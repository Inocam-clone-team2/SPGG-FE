import React, { useState } from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../components/Header1";
import MainForm from "./MainForm";
import Footer2 from "../../components/Footer2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WriteBox = styled.div`
  // 스타일 코드 생략
`;

const CommunityWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const storageUserId = parseInt(localStorage.getItem("userId"));
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(content);

    axios
      .post(
        "http://59.20.79.42:58002/post/writeProc",
        {
          title: title,
          content: content,
          user: {
            id: storageUserId,
          },
        },
        {
          headers: {
            // Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((response) => {
        console.log(response);

        alert("글작성이 완료되었습니다.");
        navigate("/community"); // navigate 함수를 사용하여 페이지 이동
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <CommunityWrap>
        <Header1 />
        <div className="communityWrite-conatiner">
          <MainForm />
          <div>
            <WriteBox>
              <div className="content">
                <form onSubmit={handleSubmit}>
                  <div className="article-write">
                    <div className="article-write-header">
                      <div className="article-write__title">글쓰기</div>
                    </div>
                    <div className="article-write-input">
                      <input
                        onChange={handleChangeTitle}
                        type="text"
                        name="title"
                        className="article-write__text"
                        placeholder="제목"
                        autoComplete="off"
                      />
                    </div>
                    <div className="article-write-content">
                      <textarea
                        onChange={handleChangeContent}
                        className="article-write__textarea"
                      ></textarea>
                    </div>
                    <div className="article-write__btn">
                      <button
                        className="article-write__button article-write__button--cancel"
                        type="button"
                        onClick={() => navigate("/community")} // navigate 함수를 사용하여 페이지 이동
                      >
                        취소
                      </button>
                      <button
                        className="article-write__button article-write__button--submit"
                        type="submit"
                      >
                        작성완료
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </WriteBox>
          </div>
          <Footer2 />
        </div>
      </CommunityWrap>
    </div>
  );
};

export default CommunityWrite;
