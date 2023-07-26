import React from "react";
import * as S from "./style";

const AvgStat = (data) => {
	const userAvg = data.data.userAverage;

	// 승률
	const winningRate = Math.floor(userAvg.userTotalOdds);

	// 킬댓
	const AverKda = userAvg.userAverKDA.toFixed(2);

	// 최근 10게임 플레이 많이 한 챔
	const playedCham = userAvg.playChampionList;

	return (
		<S.StatContainer>
			<S.StatsDiv>
				<S.StatText>
					{userAvg.userTotalGame}전 {userAvg.userTotalWin}승 {userAvg.userTotalLose}패
				</S.StatText>
				<S.GraphWrapper>
					<S.DonutChartWrapper>
						<S.DonutChart winningPercentage={winningRate}>
							<S.PercentageText></S.PercentageText>
						</S.DonutChart>
					</S.DonutChartWrapper>
					<S.Kda>
						<S.StatText>
							{userAvg.userAverKill} / {userAvg.userAverDeath} /{" "}
							{userAvg.userAverAssist}
						</S.StatText>
						<S.StatText color="#000" fontSize="20px">
							{AverKda} : 1
						</S.StatText>
						{/* <S.StatText color="#e84057">킬관여 57%</S.StatText> */}
					</S.Kda>
				</S.GraphWrapper>
			</S.StatsDiv>
			<S.StatsDiv>
				<S.StatText>플레이한 챔피언 (최근 10게임)</S.StatText>
				{Object.keys(playedCham).map((championKey, index) => (
					<S.ChrPlayed key={index}>
						<img
							src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${championKey}.png`}
							alt="champimg"
						/>
						<S.TextAlign>
							<S.StatText fontSize="11px">
								{Math.floor(playedCham[championKey].champOdds)}%
							</S.StatText>
							<S.StatText fontSize="11px">
								({playedCham[championKey].winCount}승{" "}
								{playedCham[championKey].loseCount}패)
							</S.StatText>
							<S.StatText fontSize="11px" color="">
								{playedCham[championKey].averKda.toFixed(2)} 평점
							</S.StatText>
						</S.TextAlign>
					</S.ChrPlayed>
				))}
			</S.StatsDiv>
			<S.StatsDiv>
				<S.StatText>선호 포지션 (랭크)</S.StatText>
				<S.PrfChr>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill
								percentage={100 - (userAvg.positionList.TOP?.odds || 0)}
							/>
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-top.svg?v=1690254150472"
							width="16"
							alt="TOP"
						/>
					</S.GraphAlign>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill
								percentage={100 - (userAvg.positionList.JUNGLE?.odds || 0)}
							/>
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-jungle.svg?v=1690254150472"
							width="16"
							alt="JUNGLE"
						/>
					</S.GraphAlign>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill
								percentage={100 - (userAvg.positionList.MIDDLE?.odds || 0)}
							/>
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-mid.svg?v=1690254150472"
							width="16"
							alt="MID"
						/>
					</S.GraphAlign>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill
								percentage={100 - (userAvg.positionList.BOTTOM?.odds || 0)}
							/>
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-adc.svg?v=1690254150472"
							width="16"
							alt="ADC"
						/>
					</S.GraphAlign>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill
								percentage={100 - (userAvg.positionList.UTILITY?.odds || 0)}
							/>
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-support.svg?v=1690254150472"
							width="16"
							alt="SUPPORT"
						/>
					</S.GraphAlign>
				</S.PrfChr>
			</S.StatsDiv>
		</S.StatContainer>
	);
};

export default AvgStat;
