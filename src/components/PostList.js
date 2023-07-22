import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const PostList = () => {
  const dummyPosts = [
    {
      id: 1,
      title: '첫 번째 게시물',
      author: '사용자1',
      date: '2023-07-22',
      recommendations: 10,
      commentCount: 5,
    },
    {
      id: 2,
      title: '두 번째 게시물',
      author: '사용자2',
      date: '2023-07-21',
      recommendations: 5,
      commentCount: 2,
    },
    {
      id: 3,
      title: '세 번째 게시물',
      author: '사용자3',
      date: '2023-07-20',
      recommendations: 7,
      commentCount: 3,
    },
    // 추가적인 게시물 데이터가 있다면 여기에 추가해주세요.
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 여기에서 서버에서 게시물 데이터를 가져오는 로직을 구현해야 합니다.
    // 실제 서버가 없으므로 임시로 가상의 데이터(dummyPosts)를 사용합니다.
    setPosts(dummyPosts);
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <Recommendation>{post.recommendations}</Recommendation>
          <Title>{post.title}</Title>
          <CommentCount>[{post.commentCount}]</CommentCount>
          <Date>{post.date}</Date>
          <Author>{post.author}</Author>
        </PostItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 700px;
  margin: 490px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const PostItem = styled.div`
  width: 700px;
  height: 50px;
  border-bottom: 1px solid #e6e6e6;
  padding: 10px 80px 10px 80px;
  display: flex;
`;

const Recommendation = styled.div`
  margin-right: 10px;
  margin-left: 30px;
`;


const Title = styled.button`
  font-size: 15px;
  margin-left: 60px;
  background-color: white;
  border-color: white;
`;

const CommentCount = styled.div`
  margin-right: 10px;
  color: green;
`;

const Date = styled.div`
  font-size: 14px;
  margin: 0;
  color: grey;

`;

const Author = styled.div`
  font-size: 14px;
  margin: 0;
  color: grey;
`;


export default PostList;