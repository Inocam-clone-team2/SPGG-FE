import React, { useState } from "react";
import * as S from "./style";

const UserInfo = (data) => {
	const playerInfo = data.data.summoner;

	// 새로고침 1분 뒤
	// const { refreshTime, setRefreshTime } = useState(null);
	// const handleRefreshTime = () => {
	// 	const currentTime = new Date();
	// 	setButtonClickTime(currentTime);
	// 	setInButtonDisabled(true);
	// };

	//프로필 아이콘
	const profileIcon =
		"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon" +
		playerInfo.profileIconId +
		".jpg";

	return (
		<S.UserInfoWrapper>
			<S.UserInfo>
				<S.ImgWrapper>
					<img src={profileIcon} alt="profile" />
					<div>{playerInfo.summonerLevel}</div>
				</S.ImgWrapper>
				<div>
					<h1>{playerInfo.name}</h1>
					{/* <S.InfoSpan>
						랭킹 <S.InfoSpan color="blue">3</S.InfoSpan>위(상위 0.0004%)
					</S.InfoSpan> */}
					<S.RefreshBtn onClick={() => location.reload()}>전적 갱신</S.RefreshBtn>
					{/* <S.InfoSpan color="gray">최근 업데이트: 2시간 전</S.InfoSpan> */}
				</div>
			</S.UserInfo>
		</S.UserInfoWrapper>
	);
};

export default UserInfo;
