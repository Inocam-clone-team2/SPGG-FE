import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as S from "./style";
import * as A from "../header/style";
import styled from "styled-components";
import logo from "../../../assets/logo.png";
import { colors } from "../../../common/styles";
const Header2 = () => {
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
			const response = await instance.get(`/api/search/test?summonerName=${searchUser}`);
			setSearchUser(response.data.summoner.name);
			navigate(`/history2/${searchUser}`);
			console.log("res", response.data.summoner.name);
		} catch (error) {
			alert("존재하지 않는 유저입니다.");
			//   console.error("Error during page search:", error);
		}
	};

	useEffect(() => {
		if (searchUser) {
			searchSummoner(searchUser);
		}
	}, []);

	return (
		<S.Header>
			<A.HeaderDiv height="40px" background={colors.secondary}>
				<A.HeaderLeft>
					<A.LogoLink to="/">
						<A.LogoImg src={logo} alt="logo" />
					</A.LogoLink>
					<A.Nav>
						<A.NavItem>
							<img
								src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1690002931051"
								alt="lol"
							/>
							<span>리그오브레전드</span>
						</A.NavItem>
						<A.NavItem>
							<A.NavLink to="/community">
								<img
									src="
            https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg"
									alt="lol"
								/>
								톡피지지
							</A.NavLink>
						</A.NavItem>
					</A.Nav>
				</A.HeaderLeft>
				<A.FuncBtnWrapper>
					<A.FuncBtn background="https://s-lol-web.op.gg/images/icon/feedback.svg">
						<A.TooltipText>FAQ/피드백</A.TooltipText>
					</A.FuncBtn>
					<A.FuncBtn background="https://s-lol-web.op.gg/images/icon/icon-lightmode.svg">
						<A.TooltipText>Light mode</A.TooltipText>
					</A.FuncBtn>
					<A.FuncBtn background="https://s-lol-web.op.gg/images/icon/icon-world-light-blue.svg?v=1690030599664"></A.FuncBtn>
					<A.LoginLink to="/login">로그인</A.LoginLink>
				</A.FuncBtnWrapper>
			</A.HeaderDiv>
			<SearchSection>
				<SearchContainer>
					<img
						src="https://opgg-static.akamaized.net/logo/20230717181253.4193b693203f4c9ca15ec82267ba2682.png?image=q_auto,f_webp,w_auto&v=1690128491870"
						alt="header"
					/>

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
						onClick={searchSummoner}></label>
				</SearchContainer>
			</SearchSection>
			<A.HeaderDiv hasbottomborder="true">
				<A.Nav>
					<A.NavItem>
						<A.NavLink to="/" fontSize="15">
							홈
						</A.NavLink>
					</A.NavItem>
					<A.NavItem>
						<A.NavLink to="ranking" fontSize="15">
							랭킹
						</A.NavLink>
					</A.NavItem>
				</A.Nav>
				<A.PatchLink to="https://www.youtube.com/watch?v=7KRBH8RadNc">
					13.14 패치노트 보기
				</A.PatchLink>
			</A.HeaderDiv>
		</S.Header>
	);
};

export default Header2;

export const SearchSection = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-content: center;
	align-items: center;
`;

const SearchContainer = styled.div`
	position: relative;
	background-color: t ransparent;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 950px;
	height: 32px;
	margin: 10px auto 0 auto;

	img {
		width: 60px;
		height: 46px;
	}
	/* input 요소의 왼쪽 패딩을 라벨의 너비만큼 조정하여 라벨이 input 안쪽으로 들어가도록 합니다. */
	.searchHome {
		padding-left: 40px;
		padding-right: 40px; /* 라벨의 너비 + 좌우 여백(10px * 2) */
		width: 100%;
		width: 950px;
		height: 32px;
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
