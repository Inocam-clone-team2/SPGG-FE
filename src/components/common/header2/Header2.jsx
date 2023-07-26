import React from "react";
import * as S from "./style";

const Header2 = () => {
	return (
		<S.Header>
			<S.SearchSection>
				<img
					src="https://opgg-static.akamaized.net/logo/20230717181253.4193b693203f4c9ca15ec82267ba2682.png?image=q_auto,f_webp,w_auto&v=1690128491870"
					alt="header"
				/>
				<S.SearchForm>
					<input type="text" placeholder="소환사명, 소환사명, ..." />
					<S.SearchBtn>.GG</S.SearchBtn>
				</S.SearchForm>
			</S.SearchSection>
			<S.HeaderNav>
				<ul>
					<li>홈</li>
					<li>랭킹</li>
				</ul>
			</S.HeaderNav>
		</S.Header>
	);
};

export default Header2;
