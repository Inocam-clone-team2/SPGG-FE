import React, { useState, useEffect } from "react";
import Header from "../components/common/header/Header";
import Header2 from "../components/common/header2/Header2";
import styled from "styled-components";
import instance from "../api/post";
import RankingPage from "./RankeingPage";

const Ranking = () => {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    fetchRankingData();
  }, []);

  const fetchRankingData = async () => {
    try {
      const response = await instance.get(`/ranking/top10`);
      // console.log("ranking", response.data);
      // console.log("ranking.data", response.data.data);
      setRank(response.data.data);
    } catch (error) {
      console.log("API 요청 오류:", error);
    }
  };

  return (
    <Bodylayout>
      <Header2 />
      <UpperVar>
        <h3>랭킹</h3>
      </UpperVar>
      <Rankingground style={{ width: "1200px" }}>
        <TableBox>
          {" "}
          <RankingPage rank={rank} />
        </TableBox>
      </Rankingground>
      <Footer>
        <FooterNav>
          <h1>SP.GG</h1>
          <div>
            <h4>SP.GG</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
          <div>
            <h4>Products</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
          <div>
            <h4>Apps</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
          <div>
            <h4>More</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
        </FooterNav>
        <FooterRight>
          © 2012-2023 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing League of Legends. League of Legends
          and Riot Games are trademarks or registered trademarks of Riot Games,
          Inc. League of Legends © Riot Games, Inc.
        </FooterRight>
      </Footer>
    </Bodylayout>
  );
};

const UpperVar = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  font-size: 24px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;

  h3 {
    background-color: #fff;
    margin-top: 0;
    margin-left: 650px;
    padding: 10px 20px 0 20px;
    /* border-bottom: 1px solid red; */
  }
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const RankerHeader = styled.div`
  background-color: #f7f7f9;
  color: #9aa4af;
  display: flex;
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-top: -600px;
  padding: 0px 20px 10px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Rankingground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 1000px;
  /* left: 20%; */
  /* top: 0;
  bottom: 0;
  padding: 10px; */
  margin: 20px auto;
  border-radius: 20px;
  background-color: #f7f7f9;
`;

export const Bodylayout = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  width:100vh
  height: 100vh;
  //바디가 저 안에 있는 콘텐츠만큼만 높이가 잡히니까  눈에 보이는 영역 다쓰게
  background-color: #DBE0E4;
`;

const Footer = styled.footer`
  background-color: #ebeef1;
  color: #758592;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    font-size: 14px;
    margin: 0 20px;
  }

  h4 {
    color: #202d37;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const FooterRight = styled.div`
  border-top: 1px solid white;
  margin-top: 10px;
  padding: 20px;
`;

const TableBox = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
`;

export default Ranking;
