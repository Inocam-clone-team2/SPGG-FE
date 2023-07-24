import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./SignupStyleComponents";

//버튼 활성화 비활성화 시간나면 시도해보기
//시간나면 도저히 있을 수 없는 고대인 나이 거르기

const SignupSlidezero = ({ onNextButtonClick }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    let { value } = e.target;

    // 숫자와 슬래시(/)만 남기고 모두 제거
    value = value.replace(/[^0-9/]/g, "");

    // 4글자, 2글자, 2글자 순으로 "/" 추가
    if (value.length >= 4) {
      value = value.slice(0, 4) + "/" + value.slice(4);
    }
    if (value.length >= 7) {
      value = value.slice(0, 8) + "/" + value.slice(8);
    }
    // 슬래시 중복 제거를 위해 배열로 분할 후, 빈 값은 필터링하여 다시 조합
    value = value.split("/").filter(Boolean).join("/");
    setInputValue(value);
  };

  function calculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

    // Math.floor 함수를 사용하여 정수로 만 연령을 계산합니다.
    const age = Math.floor(ageInYears);
    if (inputValue.length !== 10) {
      alert("생년월일을 제대로 입력해주세요.");
      return;
    } else if (age <= 13) {
      alert("SP.GG 회원 서비스는 만 14세 이상만 이용하실 수 있습니다.");
      return;
    } else {
      onNextButtonClick();
    }
  }

  const handlePostClick = () => {
    navigate(`/Login`);
  };

  return (
    <s.SlideWrapper className="slide0">
      <s.AgeInputBox>
        {" "}
        <s.TitleStyle>생년월일 입력:</s.TitleStyle>
        <s.InputContainer>
          <s.InputLabel htmlFor="birthdate" focused={isFocused}>
            생년월일(ex-2023/07/23)
          </s.InputLabel>
          <s.InputField
            type="text"
            id="birthdate"
            maxLength={10}
            onChange={handleChange}
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </s.InputContainer>
        <s.PtagStyle style={{ marginTop: "0" }}>
          생년월일 정보는 가입 연령 확인에만 이용됩니다.
        </s.PtagStyle>
        <s.NextButton onClick={calculateAge}>다음</s.NextButton>
        <div style={{ display: "flex", alignItems: "center" }}>
          <s.PtagStyle>이미 회원이신가요?</s.PtagStyle>{" "}
          <s.AtagStyle href="#" className="button" onClick={handlePostClick}>
            로그인으로 돌아가기
          </s.AtagStyle>
        </div>
      </s.AgeInputBox>
    </s.SlideWrapper>
  );
};

export default SignupSlidezero;
