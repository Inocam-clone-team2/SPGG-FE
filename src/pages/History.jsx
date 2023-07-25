import React from "react";
import styled from "styled-components";
import { colors } from "../common/styles";
import { Link } from "react-router-dom";
import { getSummoner } from "../api/summoner";

const History = () => {
	return (
		<div>
			<Header>
				<SearchSection>
					<img
						src="https://opgg-static.akamaized.net/logo/20230717181253.4193b693203f4c9ca15ec82267ba2682.png?image=q_auto,f_webp,w_auto&v=1690128491870"
						alt="header"
					/>
					<SearchForm>
						<input type="text" placeholder="소환사명, 소환사명, ..." />
						<SearchBtn>.GG</SearchBtn>
					</SearchForm>
				</SearchSection>
				<HeaderNav>
					<ul>
						<li>홈</li>
						<li>랭킹</li>
					</ul>
				</HeaderNav>
			</Header>

			<HistoryWrapper></HistoryWrapper>
		</div>
	);
};

export default History;

const Header = styled.header`
	background-color: ${colors.primary};
	height: 100px;
`;

const SearchSection = styled.section`
	display: flex;
	justify-content: center;

	img {
		width: 60px;
		height: 46px;
		margin: 0 30px;
	}
`;

const SearchForm = styled.form`
	width: 950px;
	height: 32px;

	input {
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 4px;
		border: none;
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
	right: 180px;
	top: 1px;
	font-size: 0;
	width: 60px;
	height: 32px;
	overflow: hidden;
`;

const HeaderNav = styled.nav`
	ul {
		display: flex;
		color: ${colors.text_secondary};
		font-weight: 600;
		list-style: none;
		gap: 30px;
	}
`;

// 전체 통계
const HistoryWrapper = styled.section`
	width: 100%;
	height: 100%;
	background-color: #e1e4e7;
`;
