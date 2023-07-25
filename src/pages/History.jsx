import React from "react";
import styled from "styled-components";
import UserInfo from "../components/history/userInfo/UserInfo";
import AvgStat from "../components/history/avgStat/AvgStat";
import PrevGame from "../components/history/prevGame/PrevGame";
import Header2 from "../components/common/haeder2/Header2";

const History = () => {
	return (
		<HistoryWrapper>
			<Header2 />
			<UserInfo />
			<AvgStat />
			<PrevGame />
		</HistoryWrapper>
	);
};

export default History;

const HistoryWrapper = styled.section`
	width: 100%;
	height: 100vh;
	background-color: #e1e4e7;
`;
