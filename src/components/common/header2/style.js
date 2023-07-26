import styled from "styled-components";
import { colors } from "../../../common/styles";

export const Header = styled.header`
	background-color: ${colors.primary};
	height: 100px;
`;

export const SearchSection = styled.section`
	display: flex;
	justify-content: center;

	img {
		width: 60px;
		height: 46px;
		margin: 0 30px;
	}
`;

export const SearchForm = styled.form`
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

export const SearchBtn = styled.button`
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

export const HeaderNav = styled.nav`
	ul {
		display: flex;
		color: ${colors.text_secondary};
		font-weight: 600;
		list-style: none;
		gap: 30px;
	}
`;
