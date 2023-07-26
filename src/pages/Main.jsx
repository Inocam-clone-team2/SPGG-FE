import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../common/styles";
import Header from "../components/common/header/Header";
import { getSummonerData } from "../api/summoner";
import History from "./History";

const Main = () => {
	const navigate = useNavigate();
	const [summonerName, setSummonerName] = useState("");

	const handleInput = (e) => {
		setSummonerName(e.target.value);
	};

	const searchSummoner = async () => {
		if (searchUser.trim() === "") {
			alert("검색어를 입력해주세요.");
			return;
		}

		try {
			const response = await getSummonerData(searchUser);
			navigate(`/history/${searchUser}`);
		} catch (error) {
			console.error("Error occurred:", error);
			alert("OP.GG에 등록되지 않은 소환사입니다. 오타를 확인 후 다시 검색해주세요.");
		}
	};

	return (
		<div>
			<History summonerName={summonerName} />
			<Header />
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
						value={summonerName}
						onChange={handleInput}
					/>
					<label
						for="searchHome"
						class="onClickSearchHandler"
						onClick={searchSummoner}></label>
				</SeachContainer>
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

const MainSection = styled.section`
	box-sizing: border-box;
	background-color: ${colors.primary};
	min-height: 100vh;
	height: calc(100% + 100px);
	text-align: center;
	padding: 130px;
`;

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
		height: 60px;
		border-radius: 30px;
		border: none;
		font-size: 15px;
		box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 2px 0px;
	}
	/* 스타일을 조정하여 라벨을 버튼처럼 보이도록 설정합니다. */
	label.onClickSearchHandler {
		position: absolute;
		top: 50%;
		right: 5px;
		transform: translateY(-50%);
		padding: 8px 16px;
		background: transparent;
		background-image: url("https://s-lol-web.op.gg/images/icon/icon-gg.svg");
		background-size: 46px 34px;
		background-position: 12px center;
		background-repeat: no-repeat;
		width: 50px;
		height: 52px;
		color: #007bff;
		cursor: pointer;
		border-radius: 4px;
	}
	label.searchTag {
		position: absolute;
		top: 30%;
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
