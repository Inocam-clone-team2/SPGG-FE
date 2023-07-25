import * as s from "./SignupStyleComponents";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../api/post";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const initialState = {
  email: "",
  nickname: "",
  password: "",
  isEmailFocused: false,
  isNicknameFocused: false,
  isPasswordFocused: false,
  hasInput: {
    email: false,
    nickname: false,
    password: false,
    // 추가적인 필드들...
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      const updatedState = { ...state, [action.field]: action.value };
      // console.log("업데이트된 상태: ", updatedState.email);
      return updatedState;
    case "SET_FOCUS":
      return { ...state, [action.field]: action.isFocused };
    case "SET_HAS_INPUT":
      return {
        ...state,
        hasInput: { ...state.hasInput, [action.field]: action.hasInput },
      };
    // 추가적인 액션들...
    default:
      return state;
  }
};

const SignupSlideTwo = ({ onNextButtonClick }) => {
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`/Login`);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onSignupHandler = async (e) => {
    e.preventDefault();
    const { email, nickname, password } = state;

    console.log(email);
    console.log(nickname);
    console.log(password);
    try {
      const res = await instance.post(`/api/auth/signup`, {
        email,
        nickname,
        password,
      });
      console.log("res", res);

      alert("회원가입에 성공했습니다.");
      handleAgreementBtn();
    } catch (error) {
      console.error("Post 요청 오류:", error);
    }
  };

  const handleFocus = (field) => {
    dispatch({ type: "SET_FOCUS", field, isFocused: true });
  };

  const handleBlur = (field) => {
    dispatch({ type: "SET_FOCUS", field, isFocused: false });

    if (
      field === "isEmailFocused" &&
      state.email &&
      !emailRegex.test(state.email)
    ) {
      dispatch({ type: "CHANGE_FIELD", field: "email", value: "" });
      alert(`올바른 이메일형식으로 작성해주세요. ex)johedoe@example.com`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", field: name, value });
  };

  const handleHasInput = (field, hasInput) => {
    dispatch({ type: "SET_HAS_INPUT", field, hasInput });
  };

  const isAnyInputEmpty = () => {
    return (
      state.email.trim() === "" ||
      state.nickname.trim() === "" ||
      state.password.trim() === ""
    );
  };

  const handleAgreementBtn = () => {
    if (!isAnyInputEmpty()) {
      onNextButtonClick();
    } else {
      alert("이메일과 닉네임, 비밀번호를 모두 입력해주세요!");
      return;
    }
  };

  return (
    <>
      <s.SlideWrapper className="slide2">
        <s.InfoWrapper>
          <s.InfoBox boxHeight="35%">
            <p style={{ marginTop: "60px", fontSize: "24px" }}>기본정보입력</p>
            <p
              style={{
                height: "60px",
                margin: "-15px 10px",
                fontSize: "15px",
                backgroundColor: "#e6e3e3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지
              회원가입이 완료가 되지 않습니다.
            </p>
          </s.InfoBox>
          <s.InputGroup>
            <s.InfoBox boxHeight="50%" style={{ gap: "22px" }}>
              <s.InputContainer>
                {/* For="emailInput" */}
                <s.InputSignupLabel
                  focused={state.isEmailFocused}
                  hasInput={state.email !== ""}
                >
                  이메일주소(ex:username@email.com)
                </s.InputSignupLabel>
                <s.InputField
                  type="email"
                  id="emailInput"
                  onChange={handleChange}
                  value={state.email}
                  onFocus={() => handleFocus("isEmailFocused")}
                  onBlur={() => handleBlur("isEmailFocused")}
                  onInput={(e) =>
                    handleHasInput("email", e.target.value !== "")
                  }
                  name="email"
                  pattern={emailRegex.source} // 정규식 패턴 적용
                />
              </s.InputContainer>{" "}
              <s.InputContainer>
                <s.InputSignupLabel
                  For="nicknameInput"
                  focused={state.isNicknameFocused}
                  hasInput={state.nickname !== ""}
                >
                  닉네임
                </s.InputSignupLabel>
                <s.InputField
                  type="text"
                  id="nicknameInput"
                  maxLength={10}
                  onChange={handleChange}
                  value={state.nickname}
                  onFocus={() => handleFocus("isNicknameFocused")}
                  onBlur={() => handleBlur("isNicknameFocused")}
                  onInput={(e) =>
                    handleHasInput("nickname", e.target.value !== "")
                  }
                  name="nickname" // name 속성 추가
                />
              </s.InputContainer>{" "}
              <s.InputContainer>
                <s.InputSignupLabel
                  For="passwordInput"
                  focused={state.isPasswordFocused}
                  hasInput={state.password !== ""}
                >
                  비밀번호
                </s.InputSignupLabel>
                <s.InputField
                  type="password"
                  id="passwordInput"
                  maxLength={15}
                  onChange={handleChange}
                  value={state.password}
                  onFocus={() => handleFocus("isPasswordFocused")}
                  onBlur={() => handleBlur("isPasswordFocused")}
                  onInput={(e) =>
                    handleHasInput("password", e.target.value !== "")
                  }
                  name="password" // name 속성 추가
                />
              </s.InputContainer>
            </s.InfoBox>
          </s.InputGroup>
          <s.InfoBox boxHeight="15%">
            <s.ButtonGroup>
              <s.DisgreeButton onClick={handlePostClick}>취소</s.DisgreeButton>
              <s.AgreementButton onClick={onSignupHandler}>
                가입하기
              </s.AgreementButton>
            </s.ButtonGroup>
          </s.InfoBox>
        </s.InfoWrapper>
      </s.SlideWrapper>
    </>
  );
};

export default SignupSlideTwo;
