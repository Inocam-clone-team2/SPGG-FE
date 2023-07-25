import React from "react";
import styled from "styled-components";
import { colors } from "../common/styles";
import { useParams, useNavigate } from "react-router-dom";

const History2 = () => {
  const navigate = useNavigate();
  const { searchUser } = useParams();

  return (
    <div>
      <Header>
        <SearchSection>
          <img
            src="https://opgg-static.akamaized.net/logo/20230717181253.4193b693203f4c9ca15ec82267ba2682.png?image=q_auto,f_webp,w_auto&v=1690128491870"
            alt="header"
          />
          <SearchForm>
            <input type="text" placeholder="소환사명, 소환사명, ..." />
            <SearchBtn>.GG</SearchBtn>
          </SearchForm>
        </SearchSection>
        <HeaderNav>
          <ul>
            <li>홈</li>
            <li>랭킹</li>
          </ul>
        </HeaderNav>
      </Header>
      <UserInfo>
        <ImgWrapper>
          <img
            src="https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon4025.jpg?image=q_auto,f_webp,w_auto&v=1690128491870"
            alt="profile"
          />
          <div>164</div>
        </ImgWrapper>
        <div>
          <h1>Miaoniu3</h1>
          <div>랭킹 3위(상위 0.0004%)</div>
          <RefreshBtn>전적 갱신</RefreshBtn>
          <div>최근 업데이트: 2시간 전</div>
        </div>
      </UserInfo>
      <TotalStats>
        <div>
          <p>20전 12승 8패</p>
          <div>
            <div>60% 승률 원형그래프 자리</div>
            <div>
              <p>2.7/5.1/11.1</p>
              <p>2.71:1</p>
              <p>킬관여 57%</p>
            </div>
          </div>
        </div>
        <div>
          <p>플레이한 챔피언(최근 20게임)</p>
          <ChrPlayed>
            <img
              src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
              alt="ch"
            />
            <span>63% (5승 3패) 2.97 평점</span>
          </ChrPlayed>
          <ChrPlayed>
            <img
              src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
              alt="ch"
            />
            <span>63% (5승 3패) 2.97 평점</span>
          </ChrPlayed>
          <ChrPlayed>
            <img
              src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&v=1690128491870"
              alt="ch"
            />
            <span>63% (5승 3패) 2.97 평점</span>
          </ChrPlayed>
        </div>
        <div>
          <p>선호 포지션 (랭크)</p>
          <div>
            <div></div>
          </div>
        </div>
      </TotalStats>
      <StatsPerGame>
        <GameInfo>
          <div>
            <p>솔랭</p>
            <p>3시간 전</p>
            <p>승리</p>
            <p>20분 35초</p>
          </div>
          <div>
            <ChamInfo>
              <img
                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Rakan.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&v=1690128491870"
                alt="cham"
              />
              <SpellWrapper>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&v=1690128491870"
                  alt=""
                />
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&v=1690128491870"
                  alt=""
                />
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&v=1690128491870"
                  alt=""
                />
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&v=1690128491870"
                  alt=""
                />
              </SpellWrapper>
              <div>
                <p>1 / 0 / 13</p>
                <p>Perfect 평점</p>
              </div>
            </ChamInfo>
            <ItemInfo>
              <img
                src="https://opgg-static.akamaized.net/meta/images/lol/item/2065.png?image=q_auto,f_webp,w_44&v=1690128491870"
                alt="item"
              />
              <img
                src="https://opgg-static.akamaized.net/meta/images/lol/item/2065.png?image=q_auto,f_webp,w_44&v=1690128491870"
                alt="item"
              />
              <img
                src="https://opgg-static.akamaized.net/meta/images/lol/item/2065.png?image=q_auto,f_webp,w_44&v=1690128491870"
                alt="item"
              />
              <img
                src="https://opgg-static.akamaized.net/meta/images/lol/item/2065.png?image=q_auto,f_webp,w_44&v=1690128491870"
                alt="item"
              />
              <img
                src="https://opgg-static.akamaized.net/meta/images/lol/item/2065.png?image=q_auto,f_webp,w_44&v=1690128491870"
                alt="item"
              />
              <img
                src="https://opgg-static.akamaized.net/meta/images/lol/item/2065.png?image=q_auto,f_webp,w_44&v=1690128491870"
                alt="item"
              />
              <img
                src="https://opgg-static.akamaized.net/meta/images/lol/item/2065.png?image=q_auto,f_webp,w_44&v=1690128491870"
                alt="item"
              />
            </ItemInfo>
          </div>
          <div>
            <p>킬관여 78%</p>
            <p>제어 와드 9</p>
            <p>CS 29 (1.4)</p>
            <p>Master</p>
          </div>
          <Players>
            <ul>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
            </ul>
            <ul>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
              <li>
                <img
                  src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
                  alt=""
                />
                nickname
              </li>
            </ul>
          </Players>
        </GameInfo>
      </StatsPerGame>
    </div>
  );
};

export default History2;

const Header = styled.header`
  background-color: ${colors.primary};
  height: 100px;
`;

const SearchSection = styled.section`
  display: flex;
  justify-content: center;

  img {
    width: 60px;
    height: 46px;
    margin: 0 30px;
  }
`;

const SearchForm = styled.form`
  width: 950px;
  height: 32px;

  input {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 4px;
    border: none;
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  background: transparent;
  background-image: url("https://s-lol-web.op.gg/images/icon/icon-gg.svg");
  background-size: 36px 24px;
  background-position: 12px center;
  background-repeat: no-repeat;
  border: none;
  right: 104px;
  top: 1px;
  font-size: 0;
  width: 60px;
  height: 32px;
  overflow: hidden;
`;

const HeaderNav = styled.nav`
  ul {
    display: flex;
    color: ${colors.text_secondary};
    font-weight: 600;
    list-style: none;
    gap: 30px;
  }
`;

const UserInfo = styled.section`
  width: 1080px;
  display: flex;
  justify-content: start;
  margin: 30px auto;

  h1 {
    margin-top: 0;
  }
`;

const ImgWrapper = styled.div`
  margin-right: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    overflow: hidden;
  }

  div {
    background-color: black;
    color: white;
    font-size: 12px;
    height: 20px;
    width: 30px;
    line-height: 20px;
    border-radius: 10px;
    text-align: center;
    margin-top: -11px;
    margin-left: 35px;
    position: relative;
  }
`;

const RefreshBtn = styled.button`
  color: white;
  background-color: ${colors.primary};
  height: 40px;
  width: 80px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 700;
`;

// 전체 통계
const TotalStats = styled.section`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

const ChrPlayed = styled.div`
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const StatsPerGame = styled.section`
  width: 1080px;
  margin: 0 auto;
`;
const GameInfo = styled.div`
  display: flex;
`;

const ChamInfo = styled.div`
  display: flex;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: block;
    aspect-ratio: auto 48 / 48;
  }
`;

const SpellWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;

  img {
    width: 22px;
    height: 22px;
    border-radius: 4px;
  }
`;

const ItemInfo = styled.div`
  display: flex;

  img {
    width: 22px;
    height: 22px;
    border-radius: 4px;
  }
`;

const Players = styled.div`
  display: flex;

  ul {
    list-style: none;
    font-size: 12px;
  }

  img {
    width: 12px;
    height: 12px;
    border-radius: 4px;
  }
`;
