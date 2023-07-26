import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { colors } from "../../../common/styles";

const PrevGame = (data) => {
	console.log("조회", data.data.matchInfo);
	const matches = data.data.matchInfo;
	return (
		<S.StatsPerGame isWin={true}>
			<S.GameInfo isWin={true}>
				<S.GameDiv>
					<S.ResultText isWin={true} fontWeight="700">
						솔랭
					</S.ResultText>
					<S.InfoText>3시간 전</S.InfoText>
					<S.Bar isWin={true}></S.Bar>
					<S.InfoText>승리</S.InfoText>
					<S.InfoText>20분 35초</S.InfoText>
				</S.GameDiv>
				<S.GameDiv>
					<S.ChamInfo>
						<S.ChamImgWrapper>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Rakan.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&v=1690128491870"
								alt="cham"
							/>
							<S.ChamLevel>11</S.ChamLevel>
						</S.ChamImgWrapper>
						<S.SpellWrapper>
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
						</S.SpellWrapper>
						<div className="kda">
							<S.KdaText>1</S.KdaText>
							<S.KdaText color={colors.gray}>/</S.KdaText>
							<S.KdaText color={colors.red}>2</S.KdaText>
							<S.KdaText color={colors.gray}>/</S.KdaText>
							<S.KdaText>2</S.KdaText>
						</div>
					</S.ChamInfo>
					<S.ItemInfo>
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
					</S.ItemInfo>
				</S.GameDiv>
				<S.GameDiv>
					<S.InfoText>제어 와드 9</S.InfoText>
					<S.InfoText>CS 29 (1.4)</S.InfoText>
					<S.InfoText>Master</S.InfoText>
				</S.GameDiv>
				<S.Players>
					<ul>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
					</ul>
					<ul>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
						<li>
							<img
								src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jax.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1690128491870"
								alt=""
							/>
							<S.PlayerLink to="">nickname</S.PlayerLink>
						</li>
					</ul>
				</S.Players>
			</S.GameInfo>
		</S.StatsPerGame>
	);
};

export default PrevGame;
