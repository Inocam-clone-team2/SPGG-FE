import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignupSlideZero from "../components/signup-slide/SignupSlideZero";
import SignupSlideOne from "../components/signup-slide/SignupSlideOne";
import SignupSlideTwo from "../components/signup-slide/SignupSlideTwo";
import SignupSlideThree from "../components/signup-slide/SignupSlideThree";

//전역 레이아웃은 css
//register header,form 은 스타일 컴포넌트

const Signup = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextButtonClick = () => {
    goToSlide(slideIndex + 1);
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  const updateStepDots = () => {
    const stepDots = document.querySelectorAll(".step-dot");

    stepDots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    // 뒤로 가기 이벤트 리스너 등록
    const handlePopState = () => {
      const previousSlideIndex = Math.max(0, slideIndex - 1);
      setSlideIndex(previousSlideIndex);
    };

    window.addEventListener("popstate", handlePopState);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [slideIndex]);

  useEffect(() => {
    // 슬라이드 이동 시 step-dot 업데이트
    updateStepDots();
  }, [slideIndex]);

  return (
    <Bodylayout>
      {" "}
      <Signupscrolllayout>
        <Signupbackground>
          <Signupheader>
            <h1>SP.GG</h1>
          </Signupheader>
          <StepDots>
            <StepDot
              className={slideIndex === 0 ? "active" : ""}
              onClick={() => goToSlide(0)}
            />
            <StepDot
              className={slideIndex === 1 ? "active" : ""}
              onClick={() => goToSlide(1)}
            />
            <StepDot
              className={slideIndex === 2 ? "active" : ""}
              onClick={() => goToSlide(2)}
            />
            <StepDot
              className={slideIndex === 3 ? "active" : ""}
              onClick={() => goToSlide(3)}
            />
          </StepDots>
          <SlideContainer>
            <Slides style={{ transform: `translateX(-${slideIndex * 590}px)` }}>
              <SignupSlideZero
                slideIndex={slideIndex}
                onNextButtonClick={handleNextButtonClick}
              />
              <SignupSlideOne
                slideIndex={slideIndex}
                onNextButtonClick={handleNextButtonClick}
              />
              <SignupSlideTwo
                slideIndex={slideIndex}
                onNextButtonClick={handleNextButtonClick}
              />
              <SignupSlideThree
                slideIndex={slideIndex}
                onNextButtonClick={handleNextButtonClick}
              />
            </Slides>
          </SlideContainer>
        </Signupbackground>
      </Signupscrolllayout>
    </Bodylayout>
  );
};

export const Bodylayout = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  height: 100vh;
  //바디가 저 안에 있는 콘텐츠만큼만 높이가 잡히니까  눈에 보이는 영역 다쓰게
  background-color: #f3f5f7;
`;

export const Signupscrolllayout = styled.div`
  min-width: 320px;
  min-height: 100%;
  height: 100%;
  margin: 0 auto;
  width: 610px;
  background-color: blue;
`;

export const Signupbackground = styled.div`
  position: relative;
  width: 590px;
  height: 100vh;
  left: 50%;
  top: 0;
  bottom: 0;
  padding: 10px;
  margin-left: -305px; //610의 가운데에 오도록 음수 305
  background-color: #fff;
`;

export const Signupheader = styled.div`
  height: 50px;
  margin: 0;
  padding: 10px auto;
  background-color: #fff;

  h1 {
    font-size: 60px;
    font-weight: bold;
    color: #4c8cff;
    text-align: center;
  }
`;

const SlideContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

/* 슬라이드 아이템들을 감싸는 컨테이너 스타일 */
const Slides = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

/* Step-dot 컨테이너 스타일 */
const StepDots = styled.div`
  margin-top: 20px;
  background-color: fff;
  display: flex;
  justify-content: center;
`;
/* Step-dot 스타일 */
const StepDot = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;

  &.active {
    background-color: #1ea1f7;
  }
`;

export default Signup;
