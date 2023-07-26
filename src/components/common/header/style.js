import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../common/styles";

export const Header = styled.header`
	width: 100%;
	align-items: center;
	background-color: ${colors.primary};
	color: ${colors.text_back};
`;

export const HeaderDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: ${(props) => props.justify || "center"};
	height: ${(props) => props.height || "50px"};
	background-color: ${(props) => props.background || colors.primary};
	${({ hasbottomborder }) => hasbottomborder && "border-bottom: 1px solid #4171D6;"}
`;

// 헤더 윗줄
export const HeaderLeft = styled.div`
	display: flex;
`;

export const LogoLink = styled(Link)`
	display: flex;
	align-items: center;
	background-color: ${colors.primary};
	height: 100%;
`;

export const LogoImg = styled.img`
	width: 70px;
	margin: 10px 20px;
`;
export const Nav = styled.ul`
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

export const NavItem = styled.li`
	display: flex;
	align-items: center;
	font-size: ${(props) => props.fontSize || "12px"};
	font-weight: 600;
	height: 100%;
	gap: 10px;
	padding: 0 10px;
`;

export const NavLink = styled(Link)`
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
export const FuncBtn = styled.button`
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

export const FuncBtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const TooltipText = styled.div`
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

export const LoginLink = styled(Link)`
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

// ad링크
export const AdLink = styled(Link)`
	text-decoration: none;
	color: ${colors.text};
`;

export const PatchLink = styled(Link)`
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
