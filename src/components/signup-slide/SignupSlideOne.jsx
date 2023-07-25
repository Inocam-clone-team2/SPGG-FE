import styled from "styled-components";
import * as s from "./SignupStyleComponents";
import React from "react";
import { useNavigate } from "react-router-dom";

function SignupSlideOne({ onNextButtonClick }) {
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`/Login`);
  };

  const handleAgreeClick = () => {
    onNextButtonClick();
  };
  return (
    <>
      {" "}
      <s.SlideWrapper className="slide1">
        <s.InfoWrapper>
          <s.InfoBox boxHeight="15%">
            <p style={{ fontSize: "20px" }}>
              이용약관, 개인정보 수집 및 이용, 프로모션 알림 메일 및 푸시 알림
              수신(선택)에 모두 동의합니다.
            </p>
          </s.InfoBox>
          <s.InfoBox boxHeight="30%">
            <p style={{ fontSize: "20px" }}>SP.GG 이용약관 동의</p>
            <s.TermsScroll>
              <s.TermsContent>
                <p>
                  이용약관 본 약관은 2023년 06월 23일부터 적용됩니다. 목적 본
                  약관은 ㈜오피지지(이하 "회사" 또는 "오피지지")가 제공하는
                  서비스(이하 "서비스")의 이용과 관련하여, 회사와 회원 간에
                  서비스 이용에 관한 권리 및 의무와 책임사항, 기타 필요한 사항을
                  규정하는 것을 목적으로 합니다. 서비스의 정의 회사는 회원에게
                  아래와 같은 서비스를 제공합니다. 1. 다음 각 호 기재와 같은
                  「https://www.op.gg」 및 「https://www.op.gg」의 하위
                  정보통신망의 유지 및 운영 서비스 1. https://www.op.gg ; 2.
                  https://tft.gg ; 3. https://valorant.op.gg ; 4.
                  https://pubg.op.gg ; 5. https://overwatch.op.gg ; 6.
                  https://er.op.gg ; 7. https://talk.op.gg ; 8.
                  https://news.op.gg ; 9. https://duo.op.gg ; 10.
                  https://esports.op.gg ; 11. 회사가 제공하는 모바일 및 PC
                  애플리케이션 2. 온라인 콘텐츠 등록, 검색, 접근, 이용, 제공
                  서비스 3. 모바일 및 PC 어플리케이션 또는 PC의 웹브라우저 등을
                  이용하여 위 제1항 내지 제2항 기재 등에 접근하는 서비스 4. 기타
                  회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해
                  회원에게 제공하는, 그리고 제공할 일체의 서비스 용어의 정의
                  서비스: 개인용 컴퓨터 (PC), TV, 휴대형 단말기, 전기통신설비
                  등을 포함한 각종 유무선 장치와 같이 구현되는 단말기와 상관없이
                  회사가 제공하는 서비스를 의미합니다. 회원: 회사와 서비스
                  이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 모든
                  사용자를 의미합니다. 계정: 회원의 식별 및 서비스 이용을 위하여
                  회원이 선정하고 회사가 인증한 문자, 숫자 또는 특수문자의
                  조합으로 만들어진 식별자(이메일 주소 등)를 의미합니다.
                  비밀번호: 회원의 개인 정보 보호 및 회원의 동일성 확인을 위해서
                  회원이 정한 문자, 숫자 또는 특수문자의 조합을 의미합니다. 계정
                  정보: 계정, 비밀번호, 닉네임 등 회원이 회사에 제공한 일반정보
                  및 게임 전적 정보 등 생성정보를 통칭합니다. 게시물: 회원이
                  서비스를 이용함에 있어 회원이 서비스에 게시한 문자, 문서,
                  그림, 음성, 동영상, 링크, 파일 혹은 이들의 조합으로 이루어진
                  정보 등 모든 정보나 자료를 의미합니다. 가입신청자: 회사에
                  대하여 서비스 이용을 신청하였으나 아직 회사로부터 그 서비스
                  이용에 관하여 동의를 받지 못한 자를 의미합니다. 약관의 게시와
                  효력, 개정 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록
                  홈페이지나 서비스 초기화면 또는 그 연결화면에 게시합니다.
                </p>
              </s.TermsContent>
            </s.TermsScroll>
          </s.InfoBox>
          <s.InfoBox boxHeight="30%">
            <p style={{ fontSize: "20px" }}>
              개인정보 수집 및 이용에 관한 동의
            </p>
            <s.TermsScroll>
              <s.TermsContent>
                <p>
                  이용약관 본 약관은 2023년 06월 23일부터 적용됩니다. 목적 본
                  약관은 ㈜오피지지(이하 "회사" 또는 "오피지지")가 제공하는
                  서비스(이하 "서비스")의 이용과 관련하여, 회사와 회원 간에
                  서비스 이용에 관한 권리 및 의무와 책임사항, 기타 필요한 사항을
                  규정하는 것을 목적으로 합니다. 서비스의 정의 회사는 회원에게
                  아래와 같은 서비스를 제공합니다. 1. 다음 각 호 기재와 같은
                  「https://www.op.gg」 및 「https://www.op.gg」의 하위
                  정보통신망의 유지 및 운영 서비스 1. https://www.op.gg ; 2.
                  https://tft.gg ; 3. https://valorant.op.gg ; 4.
                  https://pubg.op.gg ; 5. https://overwatch.op.gg ; 6.
                  https://er.op.gg ; 7. https://talk.op.gg ; 8.
                  https://news.op.gg ; 9. https://duo.op.gg ; 10.
                  https://esports.op.gg ; 11. 회사가 제공하는 모바일 및 PC
                </p>
              </s.TermsContent>
            </s.TermsScroll>
          </s.InfoBox>
          <s.InfoBox boxHeight="15%">
            <p style={{ fontSize: "16px" }}>
              이벤트 등 프로모션 알림 메일 및 푸시 알림 수신(선택)
            </p>
            <s.ButtonGroup>
              <s.DisgreeButton onClick={handlePostClick}>
                비동의
              </s.DisgreeButton>
              <s.AgreementButton onClick={handleAgreeClick}>
                동의
              </s.AgreementButton>
            </s.ButtonGroup>
          </s.InfoBox>
        </s.InfoWrapper>
      </s.SlideWrapper>
    </>
  );
}

export default SignupSlideOne;
