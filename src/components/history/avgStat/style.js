import styled from "styled-components";

export const StatContainer = styled.section`
	box-sizing: border-box;
	width: 1080px;
	display: flex;
	justify-content: space-around;
	align-items: start;
	background-color: white;
	border-radius: 4px;
	padding: 20px;
`;

export const StatsDiv = styled.div``;

export const ChrPlayed = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;

	img {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		margin-right: 5px;
	}
`;

export const TextAlign = styled.div`
	display: flex;
	gap: 10px;
`;
export const GraphWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StatText = styled.p`
	color: ${(props) => props.color || "#758592"};
	font-size: ${(props) => props.fontSize || "12px"};
	font-weight: bold;
	margin: 0;
`;

// ! donut chart
export const DonutChart = styled.div`
	width: 88px;
	height: 88px;
	border-radius: 50%;
	background: conic-gradient(
		#5383e8 0% ${(props) => props.winningPercentage}%,
		#e84057 ${(props) => props.winningPercentage}% 100%
	);
	position: relative;

	&::before {
		content: "65%";
		position: absolute;
		top: 20%;
		left: 20%;
		width: 60%;
		height: 60%;
		border-radius: 50%;
		background: white;
		//승률 글자 꾸미기
		display: flex;
		justify-content: center;
		align-items: center;
		color: #5383e8; /* 변경된 글자색 */
		font-size: 14px; /* 변경된 글자 크기 */
		font-weight: 800;
	}
`;

export const PercentageText = styled.div`
	text-align: center;
	font-size: 1.2rem;
	font-weight: bold;
	color: #333;
	margin-top: 5px;
	position: relative;
	z-index: 1;
`;

export const DonutChartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// ! 막대그래프
export const BarGraphWrapper = styled.div`
	width: 20px;
	height: 100px;
	background-color: #5383e8;
	margin-bottom: 5px;
`;

export const BarGraphFill = styled.div`
	width: 100%;
	height: ${(props) => props.percentage}%; /* props로 전달된 퍼센트에 따라 너비 조정 */
	background-color: #dbe0e4; /* 파란색 */
`;

export const Kda = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 10px 0 0 40px;
	height: 88px;
`;

export const PrfChr = styled.div`
	display: flex;
	justify-content: start;
	margin-top: 10px;
`;

export const GraphAlign = styled.div`
	text-align: center;
	margin-right: 20px;
`;
