import styled from "styled-components";
import { colors } from "../../../common/styles";

export const UserInfoWrapper = styled.section`
	box-sizing: border-box;
	width: 100%;
	height: 200px;
	border-bottom: 1px solid ${colors.text_back};
	background-color: white;
	display: flex;
	justify-content: center;
`;

export const UIcontainer = styled.div`
	width: 1080px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const UserInfo = styled.div`
	display: flex;
	justify-content: start;

	h1 {
		margin: 0;
	}
`;

export const ImgWrapper = styled.div`
	margin-right: 20px;
	img {
		width: 100px;
		height: 100px;
		border-radius: 20px;
		overflow: hidden;
	}

	div {
		background-color: black;
		color: white;
		font-size: 12px;
		height: 20px;
		width: 30px;
		line-height: 20px;
		border-radius: 10px;
		text-align: center;
		margin-top: -11px;
		margin-left: 35px;
		position: relative;
	}
`;

export const RefreshBtn = styled.button`
	color: white;
	background-color: ${colors.primary};
	height: 40px;
	width: 80px;
	border-radius: 4px;
	border: none;
	font-size: 14px;
	font-weight: 700;
	display: block;
	margin: 10px 0;
	cursor: pointer;
`;

export const InfoSpan = styled.span`
	color: ${(props) => props.color || "gray"};
	font-size: ${(props) => props.fontSize || "12px"};
`;
