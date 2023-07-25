import React from "react";
import * as S from "./style";

const UserInfo = () => {
	return (
		<S.UserInfoWrapper>
			<S.UserInfo>
				<S.ImgWrapper>
					<img
						src="https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon4025.jpg?image=q_auto,f_webp,w_auto&v=1690128491870"
						alt="profile"
					/>
					<div>164</div>
				</S.ImgWrapper>
				<div>
					<h1>Miaoniu3</h1>
					<S.InfoSpan>
						랭킹 <S.InfoSpan color="blue">3</S.InfoSpan>위(상위 0.0004%)
					</S.InfoSpan>
					<S.RefreshBtn>전적 갱신</S.RefreshBtn>
					<S.InfoSpan color="gray">최근 업데이트: 2시간 전</S.InfoSpan>
				</div>
			</S.UserInfo>
		</S.UserInfoWrapper>
	);
};

export default UserInfo;
