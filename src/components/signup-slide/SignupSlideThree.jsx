import * as s from "./SignupStyleComponents";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignupSlideThree = ({ onNextButtonClick }) => {
  const navigate = useNavigate();
  const handleGotoMain = () => {
    navigate(`/`);
  };

  return (
    <s.SlideWrapper>
      <s.InfoWrapper>
        <s.InfoBox
          boxHeight="40%"
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <p>회원가입완료</p>
          <p style={{ fontSize: "15px" }}>
            SP.GG 회원이 되신 것을 환영합니다.<br></br>다양한 서비스를 자유롭게
            이용해보세요.
          </p>
          <s.NextButton onClick={handleGotoMain}>메인으로 가기</s.NextButton>
        </s.InfoBox>
      </s.InfoWrapper>
    </s.SlideWrapper>
  );
};

export default SignupSlideThree;
