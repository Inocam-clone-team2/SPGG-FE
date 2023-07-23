import React, { useState } from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../components/Header1";
import MainForm from "./MainForm";
import Footer2 from "../../components/Footer2";
import { useNavigate } from "react-router-dom"; // withRouter 대신 useNavigate를 사용하기 위해 import 변경
import axios from "axios";

const WriteBox = styled.div`
  // 스타일 코드 생략
`;

const CommunityEdit = () => {
  const paramTitle = ""; // 기본값으로 설정할 값으로 변경
  const paramContent = ""; // 기본값으로 설정할 값으로 변경
  const paramPostId = ""; // 기본값으로 설정할 값으로 변경
  const [updateTitle, setUpdateTitle] = useState(paramTitle);
  const [updateContent, setUpdateContent] = useState(paramContent);
  const storageUserId = parseInt(localStorage.getItem("userId"));
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

  const handleChangeTitle = (e) => {
    setUpdateTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setUpdateContent(e.target.value);
  };

  // 이거 작성완료 누르면 데이터보내고 본진으로 가는것을 구현할 것이다
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://59.20.79.42:58002/post/update",
        {
          id: paramPostId,
          title: updateTitle,
          content: updateContent,
          user: {
            id: storageUserId,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      );

      console.log(response.data);
      alert("글 수정이 완료되었습니다");

      navigate("/community/" + paramPostId); // navigate 함수를 사용하여 페이지 이동
    } catch (error) {
      console.log("에러", error.response);
    }
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
                      <div className="article-write__title">글수정</div>
                    </div>
                    <div className="article-write-input">
                      <input
                        onChange={handleChangeTitle}
                        type="text"
                        name="title"
                        value={updateTitle}
                        className="article-write__text"
                        placeholder="제목"
                        autoComplete="off"
                      />
                    </div>
                    <div className="article-write-content">
                      <textarea
                        onChange={handleChangeContent}
                        className="article-write__textarea"
                        value={updateContent}
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
                        수정완료
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

export default CommunityEdit;
