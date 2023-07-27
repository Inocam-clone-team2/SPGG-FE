import React from "react";

const PostItem = ({ post }) => {
  // 게시물 작성 시간
  const createdAt = new Date(post.createdAt);
  // 현재 시간
  const now = new Date();
  // 시간 차이 (밀리초 단위)
  const timeDiff = now - createdAt;
  // 시간 차이 (시간 단위)
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

  // 몇 시간 전 형식으로 표현
  let timeAgo;
  if (hoursDiff < 1) {
    timeAgo = "방금 전";
  } else if (hoursDiff < 24) {
    timeAgo = `${hoursDiff}시간 전`;
  } else {
    timeAgo = `${Math.floor(hoursDiff / 24)}일 전`;
  }

  return <p>{timeAgo}</p>;
};

export default PostItem;
