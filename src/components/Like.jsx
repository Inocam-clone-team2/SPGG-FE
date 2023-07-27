import { BsCaretUpFill, BsCaretUp } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { Tooltip } from "antd";
import instance from "../api/post";
import { useNavigate } from "react-router-dom";

const Like = ({ postId }) => {
  const sizeValue = 7 * 3;
  const [Likes, setLikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(false);
  const navigate = useNavigate();

  const onClickPostWriteButton = () => {
    if (localStorage.getItem("authorization") === null) {
      alert("로그인 되지 않은 사용자입니다.");
      navigate("/login");
    } else {
      console.log("로그인 중입니다");
      onToggleLike();
    }
  };

  const fetchPostData = async () => {
    try {
      const response = await instance.get(`/api/post/${postId}`);
      const result = response.data.data.isLike;
      const LikeCount = response.data.data.liked;

      if (result) {
        onToggleLike;
        setLikeAction(true);
        setLikes(LikeCount);
      } else {
        setLikeAction(false);
        setLikes(LikeCount);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const onToggleLike = async () => {
    try {
      const response = await instance.post(`/api/post/${postId}/like`);
      console.log("response", response);
      if (response.status === 200) {
        fetchPostData();
        setLikes((prevLikes) => (LikeAction ? prevLikes - 1 : prevLikes + 1));
      } else {
        console.error("좋아요 요청이 실패하였습니다.");
      }
    } catch (error) {
      alert("로그인을 해주세요");
      console.error("좋아요 요청 중 오류가 발생했습니다.", error);
    }
  };
  return (
    <div>
      <span
        key="comment-basic-like"
        style={{ display: "flex", gap: "4px", alignItems: "flex-end" }}
      >
        <Tooltip title="Like ">
          {LikeAction ? (
            <BsCaretUpFill
              size={7 * 3}
              color="#4171d6"
              onClick={onClickPostWriteButton}
            />
          ) : (
            <BsCaretUp
              size={7 * 3}
              color="#4171d6"
              onClick={onClickPostWriteButton}
            />
          )}
        </Tooltip>
        <span style={{ paddingLeft: "1px", cursor: "auto" }}> {Likes}</span>
      </span>
    </div>
  );
};

export default Like;
