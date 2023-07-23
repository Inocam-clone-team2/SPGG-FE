import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export const MainFormBox = styled.div`
  // 스타일 코드 생략
`;

export const SearchForm = styled.div`
  // 스타일 코드 생략
`;

const MainForm = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/summoner/" + username); // navigate 함수를 사용하여 페이지 이동
  };

  return (
    <MainFormBox>
      <Link to="/community">
        <div className="icon-form">
          <img
            className="community-icon"
            src="/img/communityIcon.png"
            alt="아이콘"
          />
          <div className="icon-text">리그오브레전드</div>
        </div>
      </Link>
      <SearchForm>
        <form onSubmit={handleOnSubmit}>
          <input
            onChange={handleOnChange}
            type="text"
            className="main-input"
            placeholder="소환사명..."
          />
          <button className="mainBtn" type="submit">
            <img className="btnImg" src="/img/searchBtn.gif" alt="검색" />
          </button>
        </form>
      </SearchForm>
    </MainFormBox>
  );
};

export default MainForm;
