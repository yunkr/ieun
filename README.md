# seb44_main_021
## ♻️ 이은 ♻️


<div align="center">
 <img src="https://github.com/codestates-seb/seb44_main_021/assets/99308074/f59b7e06-cfb8-45fe-8499-349b2f45e85b">
 <br>
  <br>
<b>숨어있는 것들로 세상을 이롭게</b><br>
</div>

<br>
<br>

## 🔗 배포주소 : [ieun](https://ieun.store/)

<br>
<br /> <br />

## 🗓️ 프로젝트 기간

<br />

2023.06.28 ~ 2023.07.24

<br />

## 🔗 서비스설명
숨어있는 것들로 세상을 아름답게 '이은' 입니다.
<br>
"이은"은 환경 보호와 창의적인 업사이클링을 촉진하기 위한 플랫폼입니다. <br>
“이은”은 업사이클러와 일반인들을 연결하여, 사용하지 않는 자재를 새롭고 아름다운 창작물로 탈바꿈시키고 이를 판매하는 것을 목표로 합니다.


<br>

## 👨‍👨‍👧‍👧 Team List
|![신성철](https://github.com/codestates-seb/seb44_main_021/assets/99308074/c1cbacdb-08f0-47fd-a9f3-99921cd200eb)|![곽시현](https://github.com/codestates-seb/seb44_main_021/assets/99308074/5362dd7e-e9f3-40f5-a889-44e6c2abf554)|![나예진](https://github.com/codestates-seb/seb44_main_021/assets/99308074/6853dbdd-004e-4859-9bfa-6a23723eaf76)|![강병주](https://github.com/codestates-seb/seb44_main_021/assets/99308074/33eed813-1578-470f-9935-910da2f87733)|![박재성](https://github.com/codestates-seb/seb44_main_021/assets/99308074/3c843bf3-0e6d-40c5-8ee1-96c56c4f6344)|![윤승현](https://github.com/codestates-seb/seb44_main_021/assets/99308074/fc1eec62-97a1-4188-a194-c7fe35354685)|
|:---:|:---:|:---:|:---:|:---:|:---:|
|[신성철](https://github.com/weed7968)|[곽시현](https://github.com/shun-is-me)|[나예진](https://github.com/yejinzz)|[강병주](https://github.com/okgo25)|[박재성](https://github.com/Parkjaeseong94)|[윤승현](https://github.com/yunkr)|
|FE 팀장|FE|FE|BE 부팀장|BE|BE|

<br>

<details>
<summary>담당 파트</summary>
<div markdown="1">

<br>

**신성철**
 - Main
 - Funding detail - modal(1,2)
 - Store detail - modal(1)
 - Funding list
 - Store list

 <br>
 
 **곽시현**
 - Funding create
 - Store create
 - Funding edit
 - Store edit 

<br>
 
**나예진**
 - Login
 - Signup
 - Mypage - edit modal 

<br>
 
**강병주**
 - Sell CRUD
 - Order
 - OrderSell
 - 검색기능
 - 기술 문서 작성 (notion, google sheet) 및 디자인

<br>
 
**박재성**
 - Member CRUD
 - 이미지 업로드 구현 (AWS S3 연동)
 - JWT
 - 카테고리
 - 클라이언트, 서버 배포 및 관리
 - 인증번호 이메일
 - GitHub Actions
 - 정렬, 필터 기능
 - CLIENT HTTPS 적용, EC2 Loadbalance 적용
 
<br>
 
**윤승현**
 - Upcycling CRUD
 - Funding CRUD
 - Order CRUD
 - 검색기능
 - Redis 로그아웃
 - 인증번호 이메일 
 

</div>
</details>

<br>

## 🔗 프로젝트 구현 내용(내 담당)


<br>
 
**Upcycling CRUD**
- Spring MVC 아키텍처를 활용하여 Upcycling CRUD(Create, Read, Update, Delete) 기능을 구현
- Controller에서 HTTP 요청을 처리하여 모델과 뷰를 연결하였으며, 각각의 요청에 대응하는 핸들러 메서드를 정의하여 비즈니스 로직을 수행
- 📂[[블로그 참고]](https://tmdgus416.tistory.com/168)
  
<br>

**Funding CRUD**
- Spring MVC 아키텍처를 활용하여 Funding CRUD(Create, Read, Update, Delete) 기능을 구현
- Controller에서 HTTP 요청을 처리하여 모델과 뷰를 연결하였으며, 각각의 요청에 대응하는 핸들러 메서드를 정의하여 비즈니스 로직을 수행
- 📂[[블로그 참고]](https://tmdgus416.tistory.com/172)

<br>

**Order CRUD**
- Spring MVC 아키텍처를 활용하여 Order CRUD(Create, Read, Update, Delete) 기능을 구현
- Controller에서 HTTP 요청을 처리하여 모델과 뷰를 연결하였으며, 각각의 요청에 대응하는 핸들러 메서드를 정의하여 비즈니스 로직을 수행
- 📂[[블로그 참고]](https://tmdgus416.tistory.com/173)

<br>

**검색기능**
- 웹 애플리케이션에서 효율적인 검색 기능을 구현하기 위해 Pagination(페이지네이션)을 활용
- Spring MVC 아키텍처에서 컨트롤러를 통해 클라이언트의 요청을 처리하고, 비즈니스 로직을 수행하는 핸들러 메서드를 정의
- 데이터베이스에서 데이터를 검색하고 Pagination을 적용하기 위해 Spring Data JPA를 사용
- 📂[[블로그 참고]](https://tmdgus416.tistory.com/174)

<br>

**인증번호 이메일**
- Spring Boot의 JavaMailSender를 활용하여 이메일 전송 로직을 구현
- 서버에서는 입력된 인증번호를 데이터베이스에서 해당 회원의 인증번호와 비교하여 유효성을 검증
- 📂[[블로그 참고]](https://tmdgus416.tistory.com/169)



<br>
<br/>
<br/>

## 📸 화면 구성

|메인페이지|로그인/회원가입|
|:---:|:---:|
|![MAINPAGE](https://github.com/codestates-seb/seb44_main_021/assets/99308074/e49d503f-d419-4112-8eb9-706e3eef121b)|![signup_login](https://github.com/codestates-seb/seb44_main_021/assets/99308074/4455e006-1cae-4e2c-8408-6263922ae2f3)|
|<b>업사이클링 페이지</b>|<b>업사이클링 펀딩 글 등록</b>|
|![upcycling](https://github.com/codestates-seb/seb44_main_021/assets/99308074/3af83feb-b433-41a0-b3b1-059360f29924)|![2023_07_25_00_10_57_249 mp4_20230725_002629](https://github.com/codestates-seb/seb44_main_021/assets/99308074/fdd0ce8e-7f46-4828-9eb1-01adba485dee)|
|<b>업사이클링 펀딩 글 확인</b>|<b>업사이클링 펀딩 수정/삭제</b>|
|![UPCYCLING1](https://github.com/codestates-seb/seb44_main_021/assets/99308074/d54c2c69-6b3a-438b-a862-300ab998f1f1)|![upcycling2](https://github.com/codestates-seb/seb44_main_021/assets/99308074/9af48b56-6bb6-497d-9484-f0a4e4106f3c)|
|<b>상품 페이지</b>|<b>상품 등록</b>|
|![upcycling](https://github.com/codestates-seb/seb44_main_021/assets/99308074/ce9b0ce6-241a-462e-af23-d60bd6ec3efd)|![fe6ba8af5e93dd3e](https://github.com/codestates-seb/seb44_main_021/assets/99308074/f217ce16-7b7f-4d2b-be07-5956889e2e08)|
|<b>상품 확인</b>|<b>상품 수정/삭제</b>|
|![ce3b139fe88a1391](https://github.com/codestates-seb/seb44_main_021/assets/99308074/44afa4a3-eac6-4583-9c9d-a7816974e64e)|![debf89bd9e9cb7bf](https://github.com/codestates-seb/seb44_main_021/assets/99308074/739b9603-bb2a-4262-82e2-293a1a951189)|
|<b>마이페이지</b>|<b>About</b>|
|![mypage](https://github.com/codestates-seb/seb44_main_021/assets/99308074/f83d520d-2b90-4fac-ad4e-8e2e7a3701f5)|![about](https://github.com/codestates-seb/seb44_main_021/assets/99308074/12fab642-e582-47a8-bb2f-38e87c987c8d)|


<br>
<br/>

## 🔨 Skill Stacks

<img src="https://github.com/codestates-seb/seb44_main_021/assets/99308074/b3f86be5-89c6-41f4-b7b4-256db94aa545">

<br>

### Tools
| Git | Github | Discord |
| :---: | :---: | :---: |
| <img alt="git logo" src="https://git-scm.com/images/logos/logomark-orange@2x.png" width="65" height="65" > | <img alt="github logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="65" height="65"> | <img alt="Discord logo" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384e89d1d54d704ece7_3437c10597c1526c3dbd98c737c2bcae.svg" height="65" width="65"> |


<br/>
<br/>


## 📂 ERD
[이은 ERD](https://www.erdcloud.com/d/sW7RaiTwpKhHcxPiT)
<br>
<br>
<br/>
<img src="https://github.com/codestates-seb/seb44_main_021/assets/99308074/ecc2ccab-a92e-469a-9c20-1b89726caacb">
<br>



<br>

## 📃 Docs
🔗 [storyboard](https://www.figma.com/file/7M0HeeOe0d34axXiaK8Ea8/Untitled?type=design&node-id=0-1&mode=design&t=oWQyRcSpLjWNBqck-0)
<br>
🔗 [API 명세서](https://docs.google.com/spreadsheets/d/1QsXQFmNAr8DTtSEDhEi4WC0H93a3KvxhYUm1S8flrXI/edit?gid=0#gid=0)

<br>
<br>

## 📂 Git
<img src="https://github.com/codestates-seb/seb44_main_021/assets/99308074/a495e67f-efa6-431f-a857-9641d02f0831">

<br>

### Branch
- `main` : 배포 브랜치
- `dev` : `fe` / `be` 테스트 브랜치
- `fe` : Front-End 개발 브랜치
- `be` : Back-End 개발 브랜치
- `fe-feat/기능 이름/#이슈번호` : FE 기능 개발 브랜치
- `be-feat/기능 이름/#이슈번호` : BE 기능 개발 브랜치
