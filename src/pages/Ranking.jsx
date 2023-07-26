import React, { useState, useEffect } from "react";
import Header from "../components/common/header/Header";
import Header2 from "../components/common/header2/Header2";
import styled from "styled-components";
import instance from "../api/post";

const Ranking = () => {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    fetchRankingData();
  }, []);

  const fetchRankingData = async () => {
    try {
      const response = await instance.get(`/api/ranking/top10`);
      console.log("res", response);
    } catch (error) {
      console.log("API 요청 오류:", error);
    }
  };
  return (
    <Bodylayout>
      <Header />
      <Header2 />
      <Rankingground style={{ width: "1200px" }}>
        <table>
          <td>
            <td>#</td>
            <td>소환사</td>
          </td>
          <td>티어</td>
          <td>LP</td>
          <td>모스트 챔피언</td>
          <td>레벨</td>
          <td>승률</td>
          <td>
            <td>1</td>
            <td>kakhi shoot</td>
            <td>challenger</td>
            <td>668Lp</td>
            <td>
              <imag src="https://opgg-static.akamaized.net/meta/images/lol/…,w_103,x_9,y_9/q_auto,f_webp,w_64&v=1690344302082" />
            </td>
            <td>73</td>
            <td>61%</td>
          </td>
        </table>
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

const Rankingground = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 100vh;
  /* left: 20%; */
  /* top: 0;
  bottom: 0;
  padding: 10px; */
  margin: 20px auto;
  border-radius: 20px;
  background-color: #fff;
`;

export const Bodylayout = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  width:100vh
  height: 100vh;
  //바디가 저 안에 있는 콘텐츠만큼만 높이가 잡히니까  눈에 보이는 영역 다쓰게
  background-color: #ebeef1;
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

export default Ranking;
