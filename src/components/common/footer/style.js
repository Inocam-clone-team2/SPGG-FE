import styled from "styled-components";
import { colors } from "../../../common/styles";

export const Footer = styled.footer`
	color: ${(props) => props.color || "#fff"};
	width: 1080px;
	margin: 0 auto;
`;

export const FooterNav = styled.nav`
	display: flex;
	width: 1080px;

	div {
		display: flex;
		flex-direction: column;
		font-size: 14px;
		margin-left: 30px;
		width: 170px;
	}

	p {
		font-weight: 600;
		letter-spacing: -1px;
		margin-top: 0;

		img {
			width: 16px;
			height: 16px;
			margin-left: 8px;
		}
	}
`;

export const FooterRight = styled.div`
	border-top: 1px solid white;
	margin-top: 10px;
	padding: 20px;
	width: 1080px;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: -1px;
`;
