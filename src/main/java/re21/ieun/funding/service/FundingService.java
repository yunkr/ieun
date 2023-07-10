package re21.ieun.funding.service;

import org.springframework.stereotype.Service;
import re21.ieun.exception.BusinessLogicException;
import re21.ieun.exception.ExceptionCode;
import re21.ieun.funding.dto.FundingResponseDto;
import re21.ieun.funding.entity.Funding;
import re21.ieun.funding.entity.FundingUpcycling;
import re21.ieun.funding.mapper.FundingMapper;
import re21.ieun.funding.repository.FundingRepository;
import re21.ieun.member.service.MemberService;
import re21.ieun.upcycling.repository.UpcyclingRepository;
import re21.ieun.upcycling.service.UpcyclingService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FundingService {

    private final FundingRepository fundingRepository;
    private final FundingMapper fundingMapper;
    private final UpcyclingService upcyclingService;
    private final UpcyclingRepository upcyclingRepository;
    private final MemberService memberService;

    public FundingService(FundingRepository fundingRepository, FundingMapper fundingMapper,
                          UpcyclingService upcyclingService, UpcyclingRepository upcyclingRepository, MemberService memberService) {
        this.fundingRepository = fundingRepository;
        this.fundingMapper = fundingMapper;
        this.upcyclingService = upcyclingService;
        this.upcyclingRepository = upcyclingRepository;
        this.memberService = memberService;
    }


    // 펀딩하기
    public Funding createFunding(Funding funding) {

        verifyFunding(funding);
        funding.setFundingStatus(Funding.FundingStatus.FUNDING_APPLICATION_COMPLETE);


        List<Funding> existingFundingList = fundingRepository.findByUpcycling(funding.getUpcycling());

        int totalReceivedQuantity = existingFundingList.stream()
                .mapToInt(Funding::getQuantity)
                .sum();

        funding.setTotalReceivedQuantity(totalReceivedQuantity + funding.getQuantity());

        // 결제한 날짜 설정
        funding.setFundingDate(LocalDateTime.now());

        return fundingRepository.save(funding);

    }

    // 펀딩 수정하기
    public Funding updateFunding(Funding funding) {
        Funding findFunding = findVerifiedFunding(funding.getFundingId());

        Optional.ofNullable(funding.getQuantity())
                .ifPresent(quantity -> findFunding.setQuantity(quantity));

        Optional.ofNullable(funding.getFundingStatus())
                .ifPresent(fundingStatus -> findFunding.setFundingStatus(fundingStatus));

        return fundingRepository.save(findFunding);
    }

    // 펀딩 취소하기
    public void cancelFunding(long fundingId) {
        Funding findFunding = findVerifiedFunding(fundingId);
        int step = findFunding.getFundingStatus().getStepNumber();

        // FundingStatus의 step이 3 이상일 경우(FUNDING_SENDING)에는 주문 취소가 되지 않도록한다.
        if (step >= 3) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_FUNDING);
        }

        findFunding.setFundingStatus(Funding.FundingStatus.FUNDING_CANCEL);
        fundingRepository.delete(findFunding);
    }

    // 하나의 Funding 확인
    public Funding findFunding(long fundingId) {

        return findVerifiedFunding(fundingId);
    }

    // 모든 Funding 을 확인
    public List<FundingResponseDto> findFundings() {

        List<Funding> fundings = fundingRepository.findAll();

        return fundingMapper.fundingToFundingResponseDtos(fundings);
    }

    /*
    // 페이지네이션
    public Page<Funding> findFundings(int page, int size) {
        return fundingRepository.findAll(PageRequest.of(page, size,
                Sort.by("fundingId").descending()));
    }
     */

    // Funding를 수정하기 위해선 Funding이 있는지 검증
    private Funding findVerifiedFunding(long fundingId) {
        Optional<Funding> optionalFunding = fundingRepository.findById(fundingId);
        Funding findFunding =
                optionalFunding.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.FUNDING_NOT_FOUND));
        return findFunding;
    }

    private void verifyFunding(Funding funding) {

        // 회원이 존재하는지 확인
        memberService.findMember(funding.getMember().getMemberId());

        // 업사이클링이 존재하는지 확인
        upcyclingService.findVerifyUpcycling(funding.getUpcycling().getUpcyclingId());
    }

}
