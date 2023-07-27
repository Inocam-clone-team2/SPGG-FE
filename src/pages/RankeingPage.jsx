import React, { useState } from "react";
import styled from "styled-components";
import Table from "rc-table";

const RankingPage = ({ rank }) => {
  const itemsPerPage = 10; // 페이지당 아이템 개수
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 해당하는 데이터만 잘라서 가져옵니다.
  const currentItems = rank.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(currentItems);
  const totalPages = Math.ceil(rank.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableHeadCell>#</TableHeadCell>
            <TableHeadCell>소환사</TableHeadCell>
            <TableHeadCell>티어</TableHeadCell>
            <TableHeadCell>LP</TableHeadCell>
            <TableHeadCell>승률</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <tbody>
          {currentItems.map((item, index) => (
            <TableRow TableRow key={index}>
              <TableCell>
                {(currentPage - 1) * itemsPerPage + index + 1}
              </TableCell>
              <TableCell>{item.summonerName}</TableCell>
              <TableCell>{item.tier}</TableCell>
              <TableCell>{item.leaguePoints}</TableCell>
              <TableCell>
                <div style={{ display: "flex" }}>
                  <TableCellWins wins={item.wins} losses={item.losses}>
                    {item.wins}W
                  </TableCellWins>
                  <TableCellLosses wins={item.wins} losses={item.losses}>
                    {item.losses}L
                  </TableCellLosses>
                </div>
              </TableCell>
              <TableCell>{item.winRate}%</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
      <PageBtnGroup>
        <BtnStyle onClick={handlePrevPage} disabled={currentPage === 1}>
          ＜이전
        </BtnStyle>
        <BtnStyle
          style={{ marginRight: "10px" }}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          다음＞
        </BtnStyle>
      </PageBtnGroup>
    </>
  );
};

const TableCellWins = styled.div`
  flex: ${(props) => `${(props.wins / (props.losses + props.wins)) * 100}%`};
  padding: 10px;
  background-color: #5383e8;
  border-start-start-radius: 15px;
  border-end-start-radius: 15px;
  border-bottom: 1px solid #ccc;
  color: #fff;

  //item.losses 값에 따라 width를 설정
`;

const TableCellLosses = styled.div`
  flex: ${(props) => `${(props.losses / (props.losses + props.wins)) * 100}%`};
  padding: 10px;
  background-color: #e84057;
  border-start-end-radius: 15px;
  border-end-end-radius: 15px;
  border-bottom: 1px solid #ccc;
  color: #fff;
`;

const TableContainer = styled.table`
  background-color: #ebeef1;
  margin-top: -15px;
  border-radius: 20px;
  width: 1200px;
  height: 900px;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  /* background-color: #ebeef1; */
  height: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableBox = styled.div`
  margin-top: 0;
  width: 100%;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  height: 50px;
  font-size: 22px;
  color: #758592
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
`;

const TableCell = styled.td`
  padding: 10px;
  background-color: #f7f7f9;
  border-bottom: 1px solid #ccc;
  font-size: 20px;
`;

const PageBtnGroup = styled.div`
  margin: 10px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #f7f7f9;
  width: 99%;
  height: 50px;
  justify-content: space-between;
`;

const BtnStyle = styled.button`
  background-color: #c3cbd1;
  font-size: 20px;
  font-weight: bold;
  color: #6a7883;
  border: none;
  border-radius: 8px;
  width: 80px;
  height: 40px;
`;
export default RankingPage;

// 나머지 스타일 컴포넌트는 위와 동일합니다.
