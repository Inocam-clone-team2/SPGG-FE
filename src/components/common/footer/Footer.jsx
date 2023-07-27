import React from "react";
import * as S from "./style";
import discordIcon from "../../../assets/icon-game.svg";
const Footer = ({ color }) => {
	return (
		<S.Footer color={color}>
			<S.FooterNav>
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
					<p>
						리그오브레전드
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						Gigs
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						데스크톱
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						전략적 팀 전투
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						발로란트
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						배틀그라운드
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						오버워치2
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						이터널 리턴
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						이스포츠
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						톡피지지
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						Duo
						<img src={discordIcon} alt="icon" />
					</p>
				</div>
				<div>
					<h4>Apps</h4>
					<p>
						OP.GG Android App
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						OP.GG iOS App
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						TFT Android App
						<img src={discordIcon} alt="icon" />
					</p>
					<p>
						TFT iOS App
						<img src={discordIcon} alt="icon" />
					</p>
				</div>
				<div>
					<h4>Resources</h4>
					<p>개인정보처리방침</p>
					<p>이용약관</p>
					<p>도움말</p>
					<p>이메일 문의하기</p>
					<p>FAQ/피드백</p>
				</div>
				<div>
					<h4>More</h4>
					<p>제휴</p>
					<p>광고</p>
					<p>채용</p>
				</div>
			</S.FooterNav>
			<S.FooterRight>
				© 2012-2023 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t reflect the views
				or opinions of Riot Games or anyone officially involved in producing or managing
				League of Legends. League of Legends and Riot Games are trademarks or registered
				trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
			</S.FooterRight>
		</S.Footer>
	);
};

export default Footer;
