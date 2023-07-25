import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { colors } from "../common/styles";
import instance from "../api/post";

const Main = () => {
  const navigate = useNavigate();
  const [searchUser, setSearchUser] = useState("");

  const handleInput = (e) => {
    setSearchUser(e.target.value);
  };

  const searchSummoner = async () => {
    if (!searchUser) {
      setSearchUser([]);
      return;
    }

    try {
      const response = await instance.get(
        `/api/search/test?summonerName=${searchUser}`
      );
      setSearchUser(response.data.summoner.name);
      navigate(`/history2/${searchUser}`);
      //   console.log("res", response.data.summoner.name);
    } catch (error) {
      alert("검색한 유저가 없습니다.");
      //   console.error("Error during page search:", error);
    }
  };

  useEffect(() => {
    if (searchUser) {
      searchSummoner(searchUser);
    }
  }, []);

  return (
    <div>
      <Header>
        <HeaderDiv
          height="40px"
          justify="space-between"
          backgroundColor={colors.secondary}
        >
          <HeaderLeft>
            <LogoLink to="/">
              <LogoImg src={logo} alt="logo" />
            </LogoLink>
            <Nav>
              <NavItem>
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1690002931051"
                  alt="lol"
                />
                <span>리그오브레전드</span>
              </NavItem>
              <NavItem>
                <NavLink to="/community">
                  <img
                    src="
								https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg"
                    alt="lol"
                  />
                  톡피지지
                </NavLink>
              </NavItem>
            </Nav>
          </HeaderLeft>
          <FuncBtnWrapper>
            <FuncBtn background="https://s-lol-web.op.gg/images/icon/feedback.svg">
              <TooltipText>FAQ/피드백</TooltipText>
            </FuncBtn>
            <FuncBtn background="https://s-lol-web.op.gg/images/icon/icon-lightmode.svg">
              <TooltipText>Light mode</TooltipText>
            </FuncBtn>
            <FuncBtn background="https://s-lol-web.op.gg/images/icon/icon-world-light-blue.svg?v=1690030599664"></FuncBtn>
            <span>한국어 ▾</span>
            <LoginLink to="/login">로그인</LoginLink>
          </FuncBtnWrapper>
        </HeaderDiv>
        <HeaderDiv hasBottomBorder>
          <Nav>
            <NavItem fontSize="15px">홈</NavItem>
            <NavLink to="ranking" fontSize="15px">
              랭킹
            </NavLink>
          </Nav>
          <PatchLink to="https://www.youtube.com/watch?v=7KRBH8RadNc">
            13.14 패치노트 보기
          </PatchLink>
        </HeaderDiv>
        {/* <HeaderDiv backgroundColor={colors.point}>
					<AdLink to="https://gigs.op.gg/intro?&utm_source=opgg&utm_medium=txt&utm_campaign=gnb_tier_1">
						이번 배치는 망할 수 없으니까! 프로 전문가한테 강의 받고 티어 올리자!
					</AdLink>
				</HeaderDiv> */}
      </Header>
      <MainSection>
        <img
          src="https://opgg-static.akamaized.net/logo/20230717181253.4193b693203f4c9ca15ec82267ba2682.png?image=q_auto,f_webp,w_auto&v=1690030599664"
          alt="mainImg"
        />
        <SeachContainer>
          <label for="searchHome" class="searchTag">
            Search
          </label>
          <input
            className="searchHome"
            placeholder="소환사명,소환사명..."
            type="text"
            value={searchUser}
            onChange={handleInput}
          />
          <label
            for="searchHome"
            class="onClickSearchHandler"
            onClick={searchSummoner}
          >
            .GG
          </label>
        </SeachContainer>
        {/* <ul>
          {searchResults.map((summoner) => (
            <li key={summoner.id}>{summoner.name}</li>
          ))}
        </ul> */}
        <BoardWrapper>
          <BoardHeader>SP.GG Talk 인기글</BoardHeader>
          <BoardUl>
            <li>
              <p>1</p>
              <img src="https://opgg-com-image.akamaized.net/attach/images/20230723032200.1500173.jpg?image=q_auto,f_webp,w_auto&v=1690128491870" />
              <PostInfo>
                <p>
                  불과 1주일만에 대한민국에서 일어난 일들...<span>[95]</span>
                </p>
                <div>
                  <span>14시간 전</span>
                  <span>벨코즈연합회</span>
                </div>
              </PostInfo>
            </li>
            <li>
              <p>1</p>
              <img src="https://opgg-com-image.akamaized.net/attach/images/20230723032200.1500173.jpg?image=q_auto,f_webp,w_auto&v=1690128491870" />
              <PostInfo>
                <p>
                  불과 1주일만에 대한민국에서 일어난 일들...<span>[95]</span>
                </p>
                <div>
                  <span>14시간 전</span>
                  <span>벨코즈연합회</span>
                </div>
              </PostInfo>
            </li>
            <li>
              <p>1</p>
              <img src="https://opgg-com-image.akamaized.net/attach/images/20230723032200.1500173.jpg?image=q_auto,f_webp,w_auto&v=1690128491870" />
              <PostInfo>
                <p>
                  불과 1주일만에 대한민국에서 일어난 일들...<span>[95]</span>
                </p>
                <div>
                  <span>14시간 전</span>
                  <span>벨코즈연합회</span>
                </div>
              </PostInfo>
            </li>
            <li>
              <p>1</p>
              <img src="https://opgg-com-image.akamaized.net/attach/images/20230723032200.1500173.jpg?image=q_auto,f_webp,w_auto&v=1690128491870" />
              <PostInfo>
                <p>
                  불과 1주일만에 대한민국에서 일어난 일들...<span>[95]</span>
                </p>
                <div>
                  <span>14시간 전</span>
                  <span>벨코즈연합회</span>
                </div>
              </PostInfo>
            </li>
            <li>
              <p>1</p>
              <img src="https://opgg-com-image.akamaized.net/attach/images/20230723032200.1500173.jpg?image=q_auto,f_webp,w_auto&v=1690128491870" />
              <PostInfo>
                <p>
                  불과 1주일만에 대한민국에서 일어난 일들...<span>[95]</span>
                </p>
                <div>
                  <span>14시간 전</span>
                  <span>벨코즈연합회</span>
                </div>
              </PostInfo>
            </li>
          </BoardUl>
        </BoardWrapper>
      </MainSection>
      <Footer>
        <FooterNav>
          <h1>SP.GG</h1>
          <div>
            <h4>SP.GG</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
          <div>
            <h4>Products</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
          <div>
            <h4>Apps</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
          <div>
            <h4>More</h4>
            <p>About SP.GG</p>
            <p>Company</p>
            <p>Blog</p>
            <p>로고 히스토리</p>
          </div>
        </FooterNav>
        <FooterRight>
          © 2012-2023 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing League of Legends. League of Legends
          and Riot Games are trademarks or registered trademarks of Riot Games,
          Inc. League of Legends © Riot Games, Inc.
        </FooterRight>
      </Footer>
    </div>
  );
};

export default Main;

const Header = styled.header`
  width: 100%;
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.text_back};
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  height: ${(props) => props.height || "50px"};
  background-color: ${(props) => props.backgroundColor || colors.primary};
  ${({ hasBottomBorder }) =>
    hasBottomBorder && "border-bottom: 1px solid #4171D6;"}
`;

// 헤더 윗줄
const HeaderLeft = styled.div`
  display: flex;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
  height: 100%;
`;

const LogoImg = styled.img`
  width: 70px;
  margin: 10px 20px;
`;
const Nav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-start;
  margin: 0;
  padding: 0;

  & > :first-child {
    background-color: ${colors.primary};
    color: white;
  }

  & > :last-child {
    margin-right: 400px;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: 600;
  height: 100%;
  gap: 10px;
  padding: 0 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text_back};
  display: flex;
  justify-content: center;
  justify-items: baseline;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-size: ${(props) => props.fontSize || "14px"};
`;
const FuncBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  background-image: url(${(props) => props.background});
  position: relative;
  margin: 0 20px;
  padding: 0;

  /* 버튼에 호버 시 툴팁 스타일 적용 */
  &:hover .tooltip-text {
    visibility: visible;
  }
`;

const FuncBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const TooltipText = styled.div`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

const LoginLink = styled(Link)`
  background-color: ${colors.primary};
  border: none;
  border-radius: 4px;
  width: 64px;
  height: 26px;
  text-decoration: none;
  color: white;
  text-align: center;
  font-weight: bold;
`;

const MainSection = styled.section`
  box-sizing: border-box;
  background-color: ${colors.primary};
  min-height: 100vh;
  height: calc(100% + 100px);
  text-align: center;
  padding: 130px;
`;

// 링크
const AdLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
`;

const PatchLink = styled(Link)`
  background-color: #4171d6;
  border-radius: 18px;
  width: 140px;
  height: 30px;
  color: white;
  text-decoration: none;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
`;

// const SearchWrapper = styled.form`
//   background-color: white;
//   box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
//   border-radius: 30px;
//   text-align: left;
//   margin: 0 auto;
//   width: 800px;
//   height: 60px;
//   overflow: hidden;

//   input {
//     width: 100%;
//     height: 100%;
//     position: relative;
//     border: none;
//     padding: 20px;
//   }
// `;

// const SearchBtn = styled.button`
//   position: absolute;
//   background: transparent;
//   background-image: url("https://s-lol-web.op.gg/images/icon/icon-gg.svg");
//   background-size: 36px 24px;
//   background-position: 12px center;
//   background-repeat: no-repeat;
//   border: none;
//   right: 104px;
//   top: 1px;
//   font-size: 0;
//   width: 60px;
//   height: 32px;
//   overflow: hidden;
// `;

const BoardWrapper = styled.div`
  background-color: white;
  width: 800px;
  height: 450px;
  margin: 100px auto;
  border-radius: 4px;
`;

//인기글
const BoardHeader = styled.div`
  text-align: start;
  margin: 20px 0 30px 20px;
`;

const BoardUl = styled.ul`
  text-decoration: none;

  li {
    display: flex;
  }

  img {
    height: 56px;
    width: 100px;
  }
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

//푸터
const Footer = styled.footer`
  background-color: ${colors.primary};
  color: white;

  div {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 0 20px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
`;

const FooterRight = styled.div`
  border-top: 1px solid white;
  margin-top: 10px;
  padding: 20px;
`;
const SeachContainer = styled.div`
  position: relative;
  background-color: transparent;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin: 0 auto;

  /* input 요소의 왼쪽 패딩을 라벨의 너비만큼 조정하여 라벨이 input 안쪽으로 들어가도록 합니다. */
  .searchHome {
    padding-left: 40px;
    padding-right: 40px; /* 라벨의 너비 + 좌우 여백(10px * 2) */
    width: 100%;
    height: 80%;
    border-radius: 30px;
    border: none;
    font-size: 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 2px 0px;
  }
  /* 스타일을 조정하여 라벨을 버튼처럼 보이도록 설정합니다. */
  label.onClickSearchHandler {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    padding: 8px 16px;
    background-color: transparent;
    font-size: 30px;
    font-weight: bold;
    color: #007bff;
    cursor: pointer;
    border-radius: 4px;
  }
  label.searchTag {
    position: absolute;
    top: 25%;
    left: 10px;
    transform: translateY(-50%);
    padding: 8px 16px;
    background-color: transparent;
    font-size: 13px;
    font-weight: bold;
    color: #202020;
    cursor: pointer;
    border-radius: 4px;
  }
`;
