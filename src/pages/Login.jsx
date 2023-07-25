import React, { useReducer } from "react";
import {
  Bodylayout,
  Signupscrolllayout,
  Signupbackground,
  Signupheader,
} from "./Signup";
import * as s from "../components/signup-slide/SignupStyleComponents";
import { useNavigate } from "react-router-dom";
import post from "../api/post";
import instance from "../api/post";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const initialState = {
  email: "",
  password: "",
  isEmailFocused: false,
  isPasswordFocused: false,
  hasInput: {
    email: false,
    password: false,
    // 추가적인 필드들...
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      // console.log("액션: ", action);
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

const Login = () => {
  const navigate = useNavigate();
  const handleGotoSignup = () => {
    navigate(`/signup`);
  };

  const handleGotoMain = () => {
    navigate(`/`);
  };

  // console.log(state.email);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    console.log(state);
    console.log(email);
    console.log(password);
    if (email && password) {
      try {
        const response = await instance.post(`/api/auth/login`, {
          email,
          password,
        });
        console.log("response", response);

        if (response.status === 200) {
          // localStorage.setItem("authorization", accesstoken);
          let accessToken = response.headers.get("authorization");
          localStorage.setItem("authorization", accessToken);
          alert("로그인 성공");
          handleGotoMain();
        } else {
          alert("로그인 실패");
        }
      } catch (error) {
        console.log(error);
      }
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
    // console.log("dispatch할 액션의 필드: ", name); // action.field 확인
    // console.log("값", value);
  };

  const handleHasInput = (field, hasInput) => {
    dispatch({ type: "SET_HAS_INPUT", field, hasInput });
  };

  const isAnyInputEmpty = () => {
    return state.email.trim() === "" || state.password.trim() === "";
  };

  const handleAgreementBtn = () => {
    if (!isAnyInputEmpty()) {
      //   onNextButtonClick(); 로그인 하도록!
      alert("로그인시도!");
    } else {
      alert("이메일과 비밀번호를 모두 입력해주세요!");
      return;
    }
  };

  return (
    <div>
      <Bodylayout>
        <Signupscrolllayout>
          <Signupbackground
            style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <Signupheader>
              <h1>SP.GG</h1>
            </Signupheader>
            <s.SlideWrapper
              style={{
                width: "500px",
                margin: "0px auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <s.InfoBox boxHeight="20%" style={{ marginTop: "30px" }}>
                <p style={{ fontSize: "20px" }}>간편 로그인</p>
                <s.NextButton
                  style={{
                    backgroundColor: "#FAE100",
                    marginTop: "-10px",
                    height: "60px",
                    width: "100%",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  카카오톡 로그인
                  <img
                    src="https://cs.kakao.com/img/cskakaocom/pc/thumb/thumb_talkchannel.png"
                    alt="버튼 이미지"
                    class="button-image"
                    style={{
                      width: "40px",
                      height: "20px;",
                    }}
                  />
                </s.NextButton>
              </s.InfoBox>
              <s.InputGroup style={{ height: "40%", gap: "30px" }}>
                <p style={{ fontSize: "20px" }}> 이메일 로그인</p>
                <s.InputContainer style={{ marginTop: "-25px" }}>
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
                </s.InputContainer>
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
              </s.InputGroup>
              <s.InfoBox
                boxHeight="20%"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <s.NextButton
                  // onClick={handleAgreementBtn}
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "100%",
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  type="submit"
                  onClick={handleLogin}
                >
                  로그인
                </s.NextButton>{" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontSize: "17px" }}>SP.GG에 처음이세요?</p>
                  <s.AtagStyle
                    href="#"
                    className="button"
                    onClick={handleGotoSignup}
                    style={{ fontSize: "17px" }}
                  >
                    회원가입하기
                  </s.AtagStyle>
                </div>
              </s.InfoBox>
            </s.SlideWrapper>
          </Signupbackground>
        </Signupscrolllayout>
      </Bodylayout>
    </div>
  );
};

export default Login;
