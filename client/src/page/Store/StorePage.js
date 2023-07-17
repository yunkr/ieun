import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Header from "../../components/Header/Header";
import style from "./StorePage.module.css";

const List = (props) => {
  return (
    <div id={style.list} key={props.index}>
      <Link to="/fundingdetail" className={style.link}>
        <img
          src={process.env.PUBLIC_URL + "/image/test1.jpg"}
          alt="로고"
          style={{
            width: "250px",
            height: "60%",
            borderRadius: "20px",
          }}
        />
        <div id={style.listText}>
          <div>제품명</div>
          <div>업사이클 자재</div>
          <div>0000원</div>
        </div>
      </Link>
    </div>
  );
};

const StorePage = () => {
  const [sort, setSort] = useState("");
  const [kategorie, setKategorie] = useState(0);
  const [fundingList, setFundingList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 초기 데이터 로드
    fetchData();
  }, []);

  useEffect(() => {
    // 카테고리 변경 시 초기화
    setFundingList([]);
    setPage(1);
    fetchData();
  }, [kategorie, sort]);

  const fetchData = () => {
    setLoading(true);

    // API 호출 또는 데이터 가져오는 로직
    setTimeout(() => {
      const newFundingList = generateFundingList(page, kategorie);
      setFundingList((prevList) => [...prevList, ...newFundingList]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 100);
  };

  const generateFundingList = (page, kategorie) => {
    // 가상의 데이터 생성

    return new Array(8).fill(0);
  };

  const handleScroll = () => {
    // 스크롤 이벤트 핸들러
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollHeight - scrollTop === clientHeight) {
      // 스크롤이 하단에 도달했을 때 추가 데이터 로드
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const ViewAll = () => {
    if (kategorie !== 0) {
      setKategorie(0);
      window.scrollTo(0, 0);
    }
  };

  const ViewCloth = () => {
    if (kategorie !== 1) {
      setKategorie(1);
      window.scrollTo(0, 0);
    }
  };

  const ViewWood = () => {
    if (kategorie !== 2) {
      setKategorie(2);
      window.scrollTo(0, 0);
    }
  };

  const ViewPlastic = () => {
    if (kategorie !== 3) {
      setKategorie(3);
      window.scrollTo(0, 0);
    }
  };

  const ViewIron = () => {
    if (kategorie !== 4) {
      setKategorie(4);
      window.scrollTo(0, 0);
    }
  };

  // const ViewGlass = () => {
  //   if (kategorie !== 5) {
  //     setKategorie(5);
  //     window.scrollTo(0, 0);
  //   }
  // };

  // const ViewEtc = () => {
  //   if (kategorie !== 6) {
  //     setKategorie(6);
  //     window.scrollTo(0, 0);
  //   }
  // };

  return (
    <div>
      <Header />
      <div id={style.containerh}>
        <div id={style.sort}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">정렬</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleChange}
              >
                <MenuItem value={10}>최신순</MenuItem>
                <MenuItem value={20}>오래된 순</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Link to="/fundingcreate">
            <button id={style.fundingButton}>스토어 제품 등록</button>
          </Link>
        </div>
      </div>
      <div id={style.container}>
        <div id={style.aside}>
          <div id={style.kategorie}>카테고리</div>
          <button
            className={`${style.button} 
            ${kategorie === 0 ? style.selectedButton : ""}`}
            onClick={ViewAll}
          >
            스토어 전체보기
          </button>
          <button
            className={`${style.button} 
            ${kategorie === 1 ? style.selectedButton : ""}`}
            onClick={ViewCloth}
          >
            의류
          </button>
          <button
            className={`${style.button} 
            ${kategorie === 2 ? style.selectedButton : ""}`}
            onClick={ViewWood}
          >
            가구
          </button>
          <button
            className={`${style.button} 
            ${kategorie === 3 ? style.selectedButton : ""}`}
            onClick={ViewPlastic}
          >
            인테리어
          </button>
          <button
            className={`${style.button} 
            ${kategorie === 4 ? style.selectedButton : ""}`}
            onClick={ViewIron}
          >
            기타
          </button>
          {/* <button
            className={`${style.button} 
            ${kategorie === 5 ? style.selectedButton : ""}`}
            onClick={ViewGlass}
          >
            기타
          </button> */}
          {/* <button
            className={`${style.button} 
            ${kategorie === 6 ? style.selectedButton : ""}`}
            onClick={ViewEtc}
          >
            기타
          </button> */}
        </div>
        <div id={style.funding}>
          {fundingList.map((obj, index) => List(index))}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
