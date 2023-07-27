import React from "react";
import * as S from "./style";
import logo from "../../../assets/logo.png";
import { colors } from "../../../common/styles";

const Header = () => {
	return (
		<S.Header>
			<S.HeaderDiv height="40px" background={colors.secondary}>
				<S.HeaderLeft>
					<S.LogoLink to="/">
						<S.LogoImg src={logo} alt="logo" />
					</S.LogoLink>
					<S.Nav>
						<S.NavItem>
							<img
								src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1690002931051"
								alt="lol"
							/>
							<span>리그오브레전드</span>
						</S.NavItem>
						<S.NavItem>
							<S.NavLink to="/community">
								<img
									src="
            https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg"
									alt="lol"
								/>
								톡피지지
							</S.NavLink>
						</S.NavItem>
					</S.Nav>
				</S.HeaderLeft>
				<S.FuncBtnWrapper>
					<S.FuncBtn background="https://s-lol-web.op.gg/images/icon/feedback.svg">
						<S.TooltipText>FAQ/피드백</S.TooltipText>
					</S.FuncBtn>
					<S.FuncBtn background="https://s-lol-web.op.gg/images/icon/icon-lightmode.svg">
						<S.TooltipText>Light mode</S.TooltipText>
					</S.FuncBtn>
					<S.FuncBtn background="https://s-lol-web.op.gg/images/icon/icon-world-light-blue.svg?v=1690030599664"></S.FuncBtn>
					<S.LoginLink to="/login">로그인</S.LoginLink>
				</S.FuncBtnWrapper>
			</S.HeaderDiv>
			<S.HeaderDiv hasbottomborder="true">
				<S.Nav>
					<S.NavItem>
						<S.NavLink to="/" fontSize="15">
							홈
						</S.NavLink>
					</S.NavItem>
					<S.NavItem>
						<S.NavLink to="ranking" fontSize="15">
							랭킹
						</S.NavLink>
					</S.NavItem>
				</S.Nav>
				<S.PatchLink to="https://www.youtube.com/watch?v=7KRBH8RadNc">
					13.14 패치노트 보기
				</S.PatchLink>
			</S.HeaderDiv>
		</S.Header>
	);
};

export default Header;
