import styled from "styled-components";

//zero 페이지
export const SlideWrapper = styled.div`
  position: relative;
  height: 80vh;
  width: 590px;
  flex-shrink: 0;
  background-color: transparent;
  font-size: 24px;
`;

export const NextButton = styled.button`
  margin-top: 50px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  background-color: #1ea1f7;
  text-align: center;
  color: white;
  width: 103%;
  height: 50px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const AgeInputBox = styled.div`
  width: 80%;
  background-color: fff;
  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  font-family: sans-serif;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputField = styled.input`
  width: 100%;
  height: 30px;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #1ea1f7;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 10px;
  pointer-events: none;
  color: ${({ focused }) => (focused ? "#1ea1f7" : "#999")};
  z-index: 1;
  transition: all 0.2s ease;
  font-size: ${({ focused }) => (focused ? "12px" : "15px")};
  top: ${({ focused }) => (focused ? "-18px" : "8px")};
  background-color: white;
`;

export const PtagStyle = styled.p`
  font-size: 13px;
`;

export const AtagStyle = styled.a`
  font-size: 13px;
`;

export const TitleStyle = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

//one페이지

export const InfoWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 5px;
  background-color: #fff;
  width: 90%;
  height: 75vh;
  display: relative;
  flex-direction: column;
  gap: 5px;
`;

export const InfoBox = styled.div`
  margin: 0;
  gap: 5px;
  background-color: transparent;
  width: 100%;
  height: ${(props) => props.boxHeight};
  display: flex;
  flex-direction: column;
`;

export const TermsScroll = styled.div`
  width: 90%;
  height: 90%;
  margin: 0 auto; /* 가로 중앙 정렬을 위한 margin 설정 */
  margin-bottom: 5px;
  background-color: #ccc;
  border: 1px solid #ccc;
  overflow-y: auto; /* 세로 스크롤을 추가합니다 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`;

export const TermsContent = styled.div`
  padding: 20px;
  height: 50%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const AgreementButton = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  background-color: #1ea1f7;
  text-align: center;
  color: white;
  width: 45%;
  height: 50px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

export const DisgreeButton = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  background-color: #e6e3e3;
  text-align: center;
  color: #2e2e2e;
  width: 45%;
  height: 50px;
  font-size: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

//two 페이지
export const InputGroup = styled.div`
  background-color: transparent;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const InputSignupLabel = styled.label`
  position: absolute;
  left: 10px;
  pointer-events: none;
  color: ${({ focused }) => (focused ? "#1ea1f7" : "#999")};
  z-index: 1;
  transition: all 0.2s ease;
  font-size: ${({ focused, hasInput }) =>
    focused || hasInput ? "12px" : "15px"};
  top: ${({ focused, hasInput }) => (focused || hasInput ? "-18px" : "8px")};
  background-color: white;
`;
