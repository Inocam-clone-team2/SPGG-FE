import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export const MainFormBox = styled.div`
height: 200px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-position: 50% 30%;

  .icon-form {
  display: block;
  position: absolute;
  justify-content: flex-end;
  right: 50%;
  margin-right: 380px;
  }
  .icon-text {
    display: inline-block;
    vertical-align: middle;
    line-height: 39px;
    margin-bottom: 46px;
    margin-left: 8px;
    font-size: 32px;
    color: #fff;
    font-weight: bold;
  }`;

export const SearchForm = styled.div`
display: block;
position: absolute;
  justify-content: flex-end;
  top: 1;
    right: 50%;
    margin-right: -363px;
    margin-top: 88px;
  .main-input {
    border-radius: 2px;
    background: #fff;
    border: none;
    width: 268px;
    line-height: 17px;
    font-size: 14px;
    padding: 12px 62px 11px 12px;
    box-sizing: border-box;
    height: 40px;
    margin-right: 8px;
  }

  .mainBtn {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5px;
    margin-right: 15px;
    position: absolute;
    background: none;
    border: none;
  }`;

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
    <MainFormBox style={{
      backgroundImage: `url("https://talk.op.gg/images/game/bg_lol.jpg")`
    }}>
      <Link to="/community">
        <div className="icon-form">
          <img
            className="community-icon"
            alt="communityIcon"
            src="/img/communityIcon.png"
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
            placeholder="소환사명 검색"
          />
          <button className="mainBtn" type="submit">
            <img className="btnImg" src="/img/searchBtn.png" alt="검색" width="50" style={{ cursor: "pointer" }} />
          </button>
        </form>
      </SearchForm>
    </MainFormBox>
  );
};

export default MainForm;