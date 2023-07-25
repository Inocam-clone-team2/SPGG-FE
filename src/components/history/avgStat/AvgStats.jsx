import React from "react";
import * as S from "./style";

const AvgStats = () => {
	const fillHeight = 100 - 45;
	return (
		<S.StatContainer>
			<S.StatsDiv>
				<S.StatText>20전 12승 8패</S.StatText>
				<S.GraphWrapper>
					<S.DonutChartWrapper>
						<S.DonutChart winningPercentage="65">
							<S.PercentageText></S.PercentageText>
						</S.DonutChart>
					</S.DonutChartWrapper>
					<S.Kda>
						<S.StatText>2.7/5.1/11.1</S.StatText>
						<S.StatText color="#000" fontSize="20px">
							2.71:1
						</S.StatText>
						<S.StatText color="#e84057">킬관여 57%</S.StatText>
					</S.Kda>
				</S.GraphWrapper>
			</S.StatsDiv>
			<S.StatsDiv>
				<S.StatText>플레이한 챔피언(최근 20게임)</S.StatText>
				<S.ChrPlayed>
					<img
						src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
						alt="ch"
					/>
					<S.TextAlign>
						<S.StatText fontSize="11px">63%</S.StatText>
						<S.StatText fontSize="11px">(5승 3패)</S.StatText>
						<S.StatText fontSize="11px">2.97 평점</S.StatText>
					</S.TextAlign>
				</S.ChrPlayed>
				<S.ChrPlayed>
					<img
						src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
						alt="ch"
					/>
					<S.TextAlign>
						<S.StatText fontSize="11px">63%</S.StatText>
						<S.StatText fontSize="11px">(5승 3패)</S.StatText>
						<S.StatText fontSize="11px">2.97 평점</S.StatText>
					</S.TextAlign>
				</S.ChrPlayed>
				<S.ChrPlayed>
					<img
						src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
						alt="ch"
					/>
					<S.TextAlign>
						<S.StatText fontSize="11px">63%</S.StatText>
						<S.StatText fontSize="11px">(5승 3패)</S.StatText>
						<S.StatText fontSize="11px">2.97 평점</S.StatText>
					</S.TextAlign>
				</S.ChrPlayed>
			</S.StatsDiv>
			<S.StatsDiv>
				<S.StatText>선호 포지션 (랭크)</S.StatText>
				<S.PrfChr>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill percentage={fillHeight} />
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-top.svg?v=1690254150472"
							width="16"
							alt="TOP"
						/>
					</S.GraphAlign>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill percentage={fillHeight} />
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-jungle.svg?v=1690254150472"
							width="16"
							alt="JUNGLE"
						/>
					</S.GraphAlign>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill percentage={fillHeight} />
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-mid.svg?v=1690254150472"
							width="16"
							alt="MID"
						/>
					</S.GraphAlign>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill percentage={fillHeight} />
						</S.BarGraphWrapper>
						<img
							src="https://s-lol-web.op.gg/images/icon/icon-position-adc.svg?v=1690254150472"
							width="16"
							alt="ADC"
						/>
					</S.GraphAlign>
					<S.GraphAlign>
						<S.BarGraphWrapper>
							<S.BarGraphFill percentage={fillHeight} />
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

export default AvgStats;
