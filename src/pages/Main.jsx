import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { colors } from "../common/styles";

const Main = () => {
	return (
		<div>
			<Header>
				<HeaderDiv height="40px" backgroundColor={colors.secondary}>
					<LogoImg src={logo} alt="logo" />
					<Nav>
						<NavItem>
							<img
								src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1690002931051"
								alt="lol"
							/>
							<span>리그오브레전드</span>
						</NavItem>
						<NavItem>
							<img
								src="
								https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg"
								alt="lol"
							/>
							<span>톡피지지</span>
						</NavItem>
						<FuncBtnWrapper>
							<FuncBtn background="https://s-lol-web.op.gg/images/icon/feedback.svg">
								<TooltipText>FAQ/피드백</TooltipText>
							</FuncBtn>
							<FuncBtn background="https://s-lol-web.op.gg/images/icon/icon-lightmode.svg">
								<TooltipText>Light mode</TooltipText>
							</FuncBtn>
							<FuncBtn background="https://s-lol-web.op.gg/images/icon/icon-world-light-blue.svg?v=1690030599664"></FuncBtn>
							<span>한국어 ▾</span>
							<LoginBtn>로그인</LoginBtn>
						</FuncBtnWrapper>
					</Nav>
				</HeaderDiv>
				<HeaderDiv height="50px">
					<Nav>
						<NavItem>홈</NavItem>
						<NavItem>랭킹</NavItem>
					</Nav>
					<Link to="https://www.youtube.com/watch?v=7KRBH8RadNc">
						13.14 패치노트 보기
					</Link>
				</HeaderDiv>
				<HeaderDiv backgroundColor={colors.point}>
					<Link to="https://gigs.op.gg/intro?&utm_source=opgg&utm_medium=txt&utm_campaign=gnb_tier_1">
						이번 배치는 망할 수 없으니까! 프로 전문가한테 강의 받고 티어 올리자!
					</Link>
				</HeaderDiv>
			</Header>
			<MainSection>
				<img
					src="https://opgg-static.akamaized.net/logo/20230717181253.4193b693203f4c9ca15ec82267ba2682.png?image=q_auto,f_webp,w_auto&v=1690030599664"
					alt="mainImg"
				/>
				<SearchWrapper>
					<label htmlFor="searchHome">search</label>
					<input type="text" name="summoner" placeholder="소환사명, 소환사명, ..." />
					<SearchBtn type="submit">.GG</SearchBtn>
				</SearchWrapper>
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
					© 2012-2023 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t reflect the
					views or opinions of Riot Games or anyone officially involved in producing or
					managing League of Legends. League of Legends and Riot Games are trademarks or
					registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
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
	height: ${(props) => props.height || "50px"};
	background-color: ${(props) => props.backgroundColor || colors.primary};
`;

const LogoImg = styled.img`
	height: 100%;
	width: auto;
	background-color: ${colors.primary};
`;
const Nav = styled.ul`
	display: flex;
	list-style: none;
	justify-content: flex-start;
	margin: 0;
	padding: 0;

	& > :first-child {
		background-color: ${colors.primary};
	}
`;

const NavItem = styled.li`
	display: flex;
	align-items: center;
	width: calc(100% + 20px);
	height: 100%;
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

const LoginBtn = styled.button`
	background-color: ${colors.primary};
	border: none;
	border-radius: 4px;
`;

const MainSection = styled.section`
	box-sizing: border-box;
	background-color: ${colors.primary};
	min-height: 100vh;
	height: calc(100% + 100px);
	text-align: center;
	padding-bottom: 100px;
`;

const SearchWrapper = styled.form`
	background-color: white;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
	border-radius: 30px;
	text-align: left;
	margin: 0 auto;
	width: 800px;
	height: 60px;
	overflow: hidden;

	input {
		width: 100%;
		height: 100%;
		position: relative;
		border: none;
		padding: 20px;
	}
`;

const SearchBtn = styled.button`
	position: absolute;
	background: transparent;
	background-image: url("https://s-lol-web.op.gg/images/icon/icon-gg.svg");
	background-size: 36px 24px;
	background-position: 12px center;
	background-repeat: no-repeat;
	border: none;
	right: 104px;
	top: 1px;
	font-size: 0;
	width: 60px;
	height: 32px;
	overflow: hidden;
`;

const BoardWrapper = styled.div`
	background-color: white;
	width: 800px;
	height: 400px;
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
