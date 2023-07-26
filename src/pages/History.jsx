import React from "react";
import styled from "styled-components";
import UserInfo from "../components/history/userInfo/UserInfo";
import AvgStat from "../components/history/avgStat/AvgStat";
import PrevGame from "../components/history/prevGame/PrevGame";
import Header2 from "../components/common/header2/Header2";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSummonerData } from "../api/summoner";

const History = () => {
  const navigate = useNavigate();
  const { summonerName } = useParams();

  //유저 정보 조회
  const useSummonerData = (summonerName) => {
    return useQuery(["summonerData", summonerName], () =>
      getSummonerData(summonerName)
    );
  };

  const { data, isLoading, error } = useSummonerData(summonerName);

  if (error) {
    alert("잘못된 접근입니다.");
    return navigate("/");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HistoryWrapper>
      <Header2 />
      <UserInfo data={data} />
      <AvgStat data={data} />
      <PrevGame data={data} summonerName={summonerName} />
    </HistoryWrapper>
  );
};

export default History;

const HistoryWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 200px;
  background-color: #e1e4e7;
`;
