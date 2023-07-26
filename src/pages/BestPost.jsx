import React, { useState, useEffect } from "react";
import instance from "../api/post";
import styled from "styled-components";
import Like from "./Like";

const BestPost = () => {
  const [bestPosts, setBestPosts] = useState([]);

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

  // console.log("bestposts1", bestPosts);

  return (
    <BestPostContainer>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {bestPosts.map((post) => (
          <BestPostBox key={post.id}>
            <h2>{post.title}</h2>
            <h4>{post.commentCount}</h4>
            <p>{post.nickname}</p>
            <p>{post.createAt}</p>
            <Like postId={post.id} />
          </BestPostBox>
        ))}
      </div>
    </BestPostContainer>
  );
};

export default BestPost;

const BestPostContainer = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100vw;
  height: 500px;
`;

const BestPostBox = styled.div`
  border: 1px solid red;
`;
