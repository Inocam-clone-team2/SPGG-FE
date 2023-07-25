import React from "react";
import * as S from "./style";

const AvgStats = () => {
	return (
		<S.StatContainer>
			<div>
				<S.StatText>20전 12승 8패</S.StatText>
				<S.GraphWrapper>
					<S.DonutChartWrapper>
						<S.DonutChart winningPercentage="65">
							<S.PercentageText></S.PercentageText>
						</S.DonutChart>
					</S.DonutChartWrapper>
					<div>
						<S.StatText>2.7/5.1/11.1</S.StatText>
						<S.StatText color="#000" fontSize="20px">
							2.71:1
						</S.StatText>
						<S.StatText color="#e84057">킬관여 57%</S.StatText>
					</div>
				</S.GraphWrapper>
			</div>
			<div>
				<S.StatText>플레이한 챔피언(최근 20게임)</S.StatText>
				<S.ChrPlayed>
					<img
						src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
						alt="ch"
					/>
					<span>63% (5승 3패) 2.97 평점</span>
				</S.ChrPlayed>
				<S.ChrPlayed>
					<img
						src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
						alt="ch"
					/>
					<span>63% (5승 3패) 2.97 평점</span>
				</S.ChrPlayed>
				<S.ChrPlayed>
					<img
						src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
						alt="ch"
					/>
					<span>63% (5승 3패) 2.97 평점</span>
				</S.ChrPlayed>
			</div>
			<div>
				<S.StatText>선호 포지션 (랭크)</S.StatText>
				<div>
					<div></div>
				</div>
			</div>
		</S.StatContainer>
	);
};

export default AvgStats;
