import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { colors } from "../../../common/styles";
import moment from "moment";

const PrevGame = (data, summonerName) => {
	// 10판 리스트
	const matches = data.data.matchInfo;

	// 시간 포매터
	const formatTimeAgo = (minutes) => {
		if (minutes < 60) {
			return `${minutes}분 전`;
		} else if (minutes >= 60 && minutes < 1440) {
			const hours = Math.floor(minutes / 60);
			return `${hours}시간 전`;
		} else if (minutes >= 1440 && minutes < 10080) {
			const days = Math.floor(minutes / 1440);
			return `${days}일 전`;
		} else if (minutes >= 10080 && minutes < 43200) {
			const weeks = Math.floor(minutes / 10080);
			return `${weeks}주일 전`;
		} else {
			const months = Math.floor(minutes / 43200);
			return `${months}달 전`;
		}
	};

	return (
		<>
			{matches.map((match, index) => {
				const winText = match.info.searchUserInfo.win ? "승리" : "패배";
				//시간 포맷
				const minutes = match.info.gameTimeAgo;
				const formattedTime = formatTimeAgo(minutes);
				//챔프 사진용 이름
				const ChampName = match.info.searchUserInfo.championName;
				//서머너 스펠 1,2
				const spell1 = match.info.searchUserInfo.summonerSpell1;
				const spell2 = match.info.searchUserInfo.summonerSpell2;
				//rune 1,2
				const rune1 = match.info.searchUserInfo.mainRune;
				const rune2 = match.info.searchUserInfo.subRune;
				// 팀 레드
				const teamRed = Array.isArray(match.info.participants)
					? match.info.participants.filter((participant) => participant.team === "Red")
					: [];
				// 팀 블루
				const teamBlue = Array.isArray(match.info.participants)
					? match.info.participants.filter((participant) => participant.team === "Blue")
					: [];
				console.log(teamBlue, teamRed);

				return (
					<S.StatsPerGame key={index} isWin={match.info.searchUserInfo.win}>
						<S.GameInfo isWin={match.info.searchUserInfo.win}>
							<S.GameDiv>
								<S.ResultText
									isWin={match.info.searchUserInfo.win}
									fontWeight="700">
									솔랭
								</S.ResultText>
								<S.InfoText>
									{formattedTime} /{" "}
									{moment(match.info.gameEndTime, "YYYYMMDDHHmm")
										.startOf("day")
										.fromNow()}
								</S.InfoText>
								<S.Bar isWin={match.info.searchUserInfo.win}></S.Bar>
								<S.InfoText>{winText}</S.InfoText>
								<S.InfoText>
									{match.info.minute}분 {match.info.second}초
								</S.InfoText>
							</S.GameDiv>
							<S.GameDiv>
								<S.ChamInfo>
									<S.ChamImgWrapper>
										<img
											src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${ChampName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&v=1690128491870`}
											alt="cham"
										/>
										<S.ChamLevel>
											{match.info.searchUserInfo.champLevel}
										</S.ChamLevel>
									</S.ChamImgWrapper>
									<S.SpellWrapper>
										<img
											src={`https://opgg-static.akamaized.net/meta/images/lol/spell/${spell1}.png?image=q_auto,f_webp,w_44&v=1690344302082`}
											alt="summonerSpell1"
										/>
										<img
											src={`https://opgg-static.akamaized.net/meta/images/lol/perk/${rune1}.png?image=q_auto,f_webp,w_44&v=1690344302082`}
											alt="mainRune"
										/>
										<img
											src={`https://opgg-static.akamaized.net/meta/images/lol/spell/${spell2}.png?image=q_auto,f_webp,w_44&v=1690344302082`}
											alt="summonerSpell2"
										/>
										<img
											src={`https://opgg-static.akamaized.net/meta/images/lol/perkStyle/${rune2}.png?image=q_auto,f_webp,w_44&v=1690344302082`}
											alt="subRune"
										/>
									</S.SpellWrapper>
									<div className="kda">
										<S.KdaText>{match.info.searchUserInfo.kills}</S.KdaText>
										<S.KdaText color={colors.gray}>/</S.KdaText>
										<S.KdaText color={colors.red}>
											{match.info.searchUserInfo.deaths}
										</S.KdaText>
										<S.KdaText color={colors.gray}>/</S.KdaText>
										<S.KdaText>{match.info.searchUserInfo.assists}</S.KdaText>
									</div>
								</S.ChamInfo>
								<S.ItemInfo>
									{[0, 1, 2, 3, 4, 5, 6].map((itemNumber) => (
										<React.Fragment key={itemNumber}>
											{match.info.searchUserInfo[`item${itemNumber}`] !==
											0 ? (
												<img
													src={`https://opgg-static.akamaized.net/meta/images/lol/item/${
														match.info.searchUserInfo[
															`item${itemNumber}`
														]
													}.png?image=q_auto,f_webp,w_44&v=1690128491870`}
													alt={`item${itemNumber}`}
												/>
											) : (
												<S.EmptyItem
													isWin={
														match.info.searchUserInfo.win
													}></S.EmptyItem>
											)}
										</React.Fragment>
									))}
								</S.ItemInfo>
							</S.GameDiv>
							<S.GameDiv>
								<S.InfoText>
									제어 와드 {match.info.searchUserInfo.detectorWardsPlaced}
								</S.InfoText>
								<S.InfoText>CS {match.info.searchUserInfo.totalCs}</S.InfoText>
							</S.GameDiv>
							<S.Players>
								<ul>
									{teamRed.map((participant, index) => (
										<li key={index}>
											<img
												src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${participant.championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870`}
												alt=""
											/>
											<S.PlayerLink
												to={`/history/${participant.summonerName}`}>
												{participant.summonerName}
											</S.PlayerLink>
										</li>
									))}
								</ul>
								<ul>
									{teamBlue.map((participant, index) => (
										<li key={index}>
											<img
												src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${participant.championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870`}
												alt=""
											/>
											<S.PlayerLink
												tto={`/history/${participant.summonerName}`}>
												{participant.summonerName}
											</S.PlayerLink>
										</li>
									))}
								</ul>
							</S.Players>
						</S.GameInfo>
					</S.StatsPerGame>
				);
			})}
		</>
	);
};

export default PrevGame;
