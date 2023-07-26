import styled from "styled-components";
import { colors } from "../../../common/styles";
import { Link } from "react-router-dom";

export const StatsPerGame = styled.section`
	width: 1080px;
	display: flex;
	background-color: ${(props) => (props.isWin ? "#ecf2ff" : "#fff1f3")};
	border-left-width: 6px;
	border-left-style: solid;
	border-color: ${(props) => (props.isWin ? colors.primary : colors.red)};
	border-radius: 4px;
	box-sizing: border-box;
	margin: 20px auto;
`;

export const GameInfo = styled.div`
	display: flex;
	align-items: center;
	height: 96px;
	margin-left: 30px;
	gap: 80px;
`;

export const GameDiv = styled.div`
	margin: 0 30px;
`;

export const ResultText = styled.div`
	font-size: ${(props) => props.fontsize || "12"}px;
	font-weight: ${(props) => props.fontweight || "600"};
	color: ${(props) => (props.isWin ? colors.primary : colors.red)};
`;

export const InfoText = styled.div`
	font-size: ${(props) => props.fontsize || "12"}px;
	font-weight: ${(props) => props.fontweight || "600"};
	color: #758592;
`;

export const Bar = styled.div`
	width: 48px;
	height: 1px;
	margin: 8px 0px 4px;
	background-color: ${(props) => (props.isWin ? "#d5e3ff" : "#ffd8d9")};
`;

export const ChamInfo = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 10px;

	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: block;
		aspect-ratio: auto 48 / 48;
	}
`;

export const ChamImgWrapper = styled.div`
	position: relative;
	display: block;
	width: 48px;
	height: 48px;
`;

export const ChamLevel = styled.div`
	position: absolute;
	right: 0px;
	bottom: 0px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	font-size: 11px;
	border-radius: 50%;
	color: rgb(255, 255, 255);
	background: rgb(32, 45, 55);
	font-family: Roboto, sans-serif;
	font-weight: 700;
`;

export const SpellWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 44px;
	height: 44px;
	align-items: center;
	justify-content: start;
	margin-left: 3px;

	img {
		width: 22px;
		height: 22px;
		border-radius: 4px;
	}
`;

export const KdaText = styled.span`
	font-weight: bold;
	color: ${(props) => props.color || "black"};
	margin-right: 3px;
`;

export const ItemInfo = styled.div`
	display: flex;
	gap: 1px;
	img {
		width: 22px;
		height: 22px;
		border-radius: 4px;
	}
`;

export const Players = styled.div`
	display: flex;

	ul {
		list-style: none;
		font-size: 12px;
	}

	li {
		display: flex;
		align-items: center;
	}

	img {
		width: 12px;
		height: 12px;
		border-radius: 4px;
		margin-right: 2px;
	}
`;

export const PlayerLink = styled(Link)`
	cursor: pointer;
	color: ${colors.gray};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
