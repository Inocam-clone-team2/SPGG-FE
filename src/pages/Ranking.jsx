import React, { useState, useEffect } from "react";
import Header from "../components/common/header/Header";
import Header2 from "../components/common/header2/Header2";
import styled from "styled-components";

const Ranking = () => {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    try {
      const response = await instance.get(`/api/post`);
      const postList = response.data.data.content;
      // console.log("res", postList);

      // 배열 슬라이싱을 사용하여 인기있는 게시물 5개를 복사하여 새로운 배열로 만듦
      const bestFivePosts = postList.slice(0, 1);
      setBestPosts(bestFivePosts);
      // console.log("bestposts2", bestFivePosts);
    } catch (error) {
      // console.log("API 요청 오류:", error);
    }
  };
  return (
    <Bodylayout>
      <Header />
      <Header2 />
      <Rankingground style={{ width: "1200px" }}></Rankingground>
    </Bodylayout>
  );
};

const Rankingground = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 100%;
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
  height: 100vh;
  //바디가 저 안에 있는 콘텐츠만큼만 높이가 잡히니까  눈에 보이는 영역 다쓰게
  background-color: #f3f5f7;
`;

export default Ranking;
