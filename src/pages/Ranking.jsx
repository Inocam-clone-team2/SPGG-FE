import React, { useState, useEffect } from "react";
import Header2 from "../components/common/header2/Header2";
import Footer from "../components/common/footer/Footer";
import styled from "styled-components";
import instance from "../api/post";
import RankingPage from "./RankeingPage";

const Ranking = () => {
	const [rank, setRank] = useState([]);

	useEffect(() => {
		fetchRankingData();
	}, []);

	const fetchRankingData = async () => {
		try {
			const response = await instance.get(`/ranking/top10`);
			// console.log("ranking", response.data);
			// console.log("ranking.data", response.data.data);
			setRank(response.data.data);
		} catch (error) {
			console.log("API 요청 오류:", error);
		}
	};

	return (
		<Bodylayout>
			<Header2 />
			<UpperVar>
				<h3>랭킹</h3>
			</UpperVar>
			<Rankingground style={{ width: "1200px" }}>
				<TableBox>
					{" "}
					<RankingPage rank={rank} />
				</TableBox>
			</Rankingground>
			<Footer color="#97a0a7" />
		</Bodylayout>
	);
};

const UpperVar = styled.div`
	width: 100%;
	height: 60px;
	margin: 0 auto;
	font-size: 24px;
	background-color: #fff;
	border-bottom: 1px solid #ccc;

	h3 {
		background-color: #fff;
		margin-top: 0;
		margin-left: 650px;
		padding: 10px 20px 0 20px;
		/* border-bottom: 1px solid red; */
	}
`;

const TableContainer = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

const TableHead = styled.thead`
	background-color: #f0f0f0;
`;

const TableHeadCell = styled.th`
	padding: 10px;
	font-weight: bold;
	text-align: left;
	border-bottom: 1px solid #ccc;
`;

const TableRow = styled.tr`
	&:nth-child(even) {
		background-color: #f9f9f9;
	}
`;

const TableCell = styled.td`
	padding: 10px;
	border-bottom: 1px solid #ccc;
`;

const RankerHeader = styled.div`
	background-color: #f7f7f9;
	color: #9aa4af;
	display: flex;
	width: 100%;
	height: 40px;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
	margin-top: -600px;
	padding: 0px 20px 10px 20px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

const Rankingground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1200px;
	height: 1000px;
	/* left: 20%; */
	/* top: 0;
  bottom: 0;
  padding: 10px; */
	margin: 20px auto;
	border-radius: 20px;
	background-color: #f7f7f9;
`;

export const Bodylayout = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  width:100vh
  height: 100vh;
  //바디가 저 안에 있는 콘텐츠만큼만 높이가 잡히니까  눈에 보이는 영역 다쓰게
  background-color: #DBE0E4;
`;

const TableBox = styled.div`
	margin-top: 30px;
	width: 100%;
	height: 100%;
`;

export default Ranking;
