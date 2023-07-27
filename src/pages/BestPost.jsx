import React, { useState, useEffect } from "react";
import instance from "../api/post";
import styled, { css } from "styled-components";
import Like from "../components/Like";
import PostItem from "../components/community/PostItem";

const BestPost = () => {
	const [bestPosts, setBestPosts] = useState([]);

	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	useEffect(() => {
		fetchPostData();
	}, []);

	const fetchPostData = async () => {
		try {
			const response = await instance.get(`/api/post/popular`);
			const postList = response.data.data.content;

			// 배열 슬라이싱을 사용하여 인기있는 게시물 5개를 복사하여 새로운 배열로 만듦
			const bestFivePosts = postList.slice(0, 5);
			setBestPosts(bestFivePosts);
		} catch (error) {}
	};

	const BestFive = [1, 2, 3, 4, 5];

	return (
		<>
			<BoardHeader style={{ paddingTop: "20px" }}>SP.GG 인기글</BoardHeader>
			<BestPostContainer>
				<div>
					{BestFive.map((item, index) => (
						<RankingStyle>
							<h2 key={index}>{item}</h2>{" "}
						</RankingStyle>
					))}
				</div>
				<div>
					{bestPosts.map((post) => (
						<PostInfo key={post.id}>
							<ImageGroup>
								<ImageBox imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAY1BMVEX///+VlZWPj4/j4+O0tLT7+/ucnJyfn5/b29uSkpKkpKSrq6uurq7m5uZmZmaWlpbz8/OIiIjs7Ox5eXlkZGRsbGzNzc2BgYF0dHTU1NRvb2+7u7ve3t7w8PDCwsKKiopcXFxuhZvhAAAELklEQVR4nO3b25KiOhQG4HBIICgHUQgg6rz/U85Kgt3OlNDs6mrdrPm/Kwtzwc9KApIoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAU3LBu8/tR8k23i2IW77xcxXqRaGq332OPyRSOviCVjwrX5dfRg+CsH33af6Eqerhc/fLouN3n+cPqF10rdvombzVfLNHrsNrlT//ulZ8s+e+6uVM9Ivi2+f9NDcbfaq65pjdT3PzHX4aD2fNL/uUTc91+MR3+HEM2WX301yQzDyyTVcmyEXKLns+DeY2f353m2bBUYieW/aPpzk981TjZzmKzq7u9dfP8KSMbFtu2Xdrogepa8ssexU+Sfr35QhH35hZ9shnV3N89sg35ph94Xep+wkT+i7PMnu50KBknj1ZaJDpz+zM7u/IvtCAeXb9D2dfXfd/ea5D9pec1ysg+0IDZPefMc+/5LxeAdkXGjxmb3m9o/4vz3W5vU7Msq+su1/AYLQGvT77/TU9n70Hq7N/sU67RWuz31fnGUVfmX2sta86q51Gq7Lra+KjRy87r1dYlT3wVQ9YVX1t9oDbNOeszs5rmnP8usxCg/JedWYdXny9LtP7suuS1zTn+LprtX9OhVN0flX/XIed2Tt87/AMqy4e5vF5DKc5776JaiE6u5vbh3r30b21fYjRbgB8bEDQesdxrN9d8iWckwMAAAAAAAAA/A/FqqyEONtliTExJptez1S7sxBXpXr6nCfKbTDJy+lvg73yDa/u7ySbfYsng6GhfOpE0bpuv+tM5Y5XByVF3DQZfW6bQdtj16Zxixd9YeJsuFX0vUo2nF2Ux+NOiISyx4P9y+Pg12Z89uFg6HPSGbdaVQadvRSyPF7oQpxSERfVG8/8+8qbogra7MqWPD/6/VNT9uxIXdvog627NLE2969ESn0gLi5vPffvKsNrEz1m37vDU5+/dqkQp7PLHnXpeaCwl8N9vXbz2W91Ec9mT81VpMVobPb2mPd2bnjMHlWXarsbrsqbMLe57EUdKnE1tcu+M1XenX32KI7jiMbEsevMdl/clzdJPTmbyV7tjcxK6bLfSn/UZu/DQ0HjvWn7vt9y3eU49LPZWyp9LGx2WVDNE2rj+rzsCwZz3U1Wh11STNnrP7NfquLc9S572jSnU9Pk03hPeWQXmQkKW1MauWP3eI8rLtIc6CZus8cDdXCa+UV1CyWX7BU9uJnCPrZdhcjsTC4+s4tk6IQb7+pAiauCap4N1KZ12Wmev2x2vMuQerpsml+USzfD0CQ+SmVKKfa/anp+S4Q8hjQY3J2tM1LUxjakobAvGhoI291QHdn/84+p3SFd9efzOFVRjhEN/lSKKrUjIRIydfeyiA6JCzXsc7oIqbXt51oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+K7fw2lApeR5FTgAAAAASUVORK5CYII=" />
							</ImageGroup>
							<PostItemGroup>
								<div className="PostFirstLine">
									<p>{post.title}</p>
									<p>[{post.commentCount}]</p>
								</div>
								<div className="PostSecondLine">
									<div>
										<PostItem post={post} />
									</div>
									<div>{post.nickname}</div>
								</div>
								<div style={{ marginTop: "-29px", marginLeft: "430px" }}>
									<Like postId={post.id} />
								</div>
							</PostItemGroup>
						</PostInfo>
					))}
				</div>
			</BestPostContainer>
		</>
	);
};

export default BestPost;

const BestPostContainer = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 50px;
	width: 600px;
	height: 500px;
`;

const BoardHeader = styled.div`
	text-align: start;
	margin: 20px 0 30px 20px;
	font-weight: bold;
	text-align: center;
	font-size: 25px;
	font-family: "GongGothicMedium";
	src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff")
		format("woff");
	font-weight: normal;
	font-style: normal;
`;

// const BoardUl = styled.ul`
//   text-decoration: none;
//   display: flex;
//   flex-direction: column;

//   border: 1px solid #ccc;
//   width: 100%;
//   height: 20%;
//   li {
//     display: flex;
//   }

//   h1 {
//     display: flex;
//     align-items: center; /* 내용물을 세로 중앙에 정렬합니다 */
//     /* justify-content: flex-start; 내용물을 가로 왼쪽으로 정렬합니다 */
//     text-align: center;
//   }
// `;

const PostInfo = styled.div`
	background-color: fff;
	display: flex;
	flex-direction: row;
	align-items: start;
	border-bottom: 1px solid #ccc;
	width: 600px;
	height: 100px;
`;

const PostItemGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	margin-left: 20px;

	.PostFirstLine {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		/* font-weight: bold; */
		font-size: 20px;
		font-family: "EF_jejudoldam";
		/* font-weight: 800; */
	}

	.PostSecondLine {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: -10px;
		font-weight: 10px;
		font-family: "TheJamsil5Bold";
	}
`;

const ImageGroup = styled.div`
	display: flex;
	flex-direction: row;
	/* align-items: center;
  justify-content: space-around; */
	margin-left: -3px;
`;

const RankingStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 40px;
	height: 100px;
	/* border-bottom: 1px solid blue; */

	h1 {
		border: 1px solid red;
	}
`;

const ImageBox = styled.div`
	width: 99px;
	height: 99px;
	background-image: ${(props) =>
		props.imageUrl
			? `url(${props.imageUrl})`
			: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAY1BMVEX///+VlZWPj4/j4+O0tLT7+/ucnJyfn5/b29uSkpKkpKSrq6uurq7m5uZmZmaWlpbz8/OIiIjs7Ox5eXlkZGRsbGzNzc2BgYF0dHTU1NRvb2+7u7ve3t7w8PDCwsKKiopcXFxuhZvhAAAELklEQVR4nO3b25KiOhQG4HBIICgHUQgg6rz/U85Kgt3OlNDs6mrdrPm/Kwtzwc9KApIoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAU3LBu8/tR8k23i2IW77xcxXqRaGq332OPyRSOviCVjwrX5dfRg+CsH33af6Eqerhc/fLouN3n+cPqF10rdvombzVfLNHrsNrlT//ulZ8s+e+6uVM9Ivi2+f9NDcbfaq65pjdT3PzHX4aD2fNL/uUTc91+MR3+HEM2WX301yQzDyyTVcmyEXKLns+DeY2f353m2bBUYieW/aPpzk981TjZzmKzq7u9dfP8KSMbFtu2Xdrogepa8ssexU+Sfr35QhH35hZ9shnV3N89sg35ph94Xep+wkT+i7PMnu50KBknj1ZaJDpz+zM7u/IvtCAeXb9D2dfXfd/ea5D9pec1ysg+0IDZPefMc+/5LxeAdkXGjxmb3m9o/4vz3W5vU7Msq+su1/AYLQGvT77/TU9n70Hq7N/sU67RWuz31fnGUVfmX2sta86q51Gq7Lra+KjRy87r1dYlT3wVQ9YVX1t9oDbNOeszs5rmnP8usxCg/JedWYdXny9LtP7suuS1zTn+LprtX9OhVN0flX/XIed2Tt87/AMqy4e5vF5DKc5776JaiE6u5vbh3r30b21fYjRbgB8bEDQesdxrN9d8iWckwMAAAAAAAAA/A/FqqyEONtliTExJptez1S7sxBXpXr6nCfKbTDJy+lvg73yDa/u7ySbfYsng6GhfOpE0bpuv+tM5Y5XByVF3DQZfW6bQdtj16Zxixd9YeJsuFX0vUo2nF2Ux+NOiISyx4P9y+Pg12Z89uFg6HPSGbdaVQadvRSyPF7oQpxSERfVG8/8+8qbogra7MqWPD/6/VNT9uxIXdvog627NLE2969ESn0gLi5vPffvKsNrEz1m37vDU5+/dqkQp7PLHnXpeaCwl8N9vXbz2W91Ec9mT81VpMVobPb2mPd2bnjMHlWXarsbrsqbMLe57EUdKnE1tcu+M1XenX32KI7jiMbEsevMdl/clzdJPTmbyV7tjcxK6bLfSn/UZu/DQ0HjvWn7vt9y3eU49LPZWyp9LGx2WVDNE2rj+rzsCwZz3U1Wh11STNnrP7NfquLc9S572jSnU9Pk03hPeWQXmQkKW1MauWP3eI8rLtIc6CZus8cDdXCa+UV1CyWX7BU9uJnCPrZdhcjsTC4+s4tk6IQb7+pAiauCap4N1KZ12Wmev2x2vMuQerpsml+USzfD0CQ+SmVKKfa/anp+S4Q8hjQY3J2tM1LUxjakobAvGhoI291QHdn/84+p3SFd9efzOFVRjhEN/lSKKrUjIRIydfeyiA6JCzXsc7oIqbXt51oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+K7fw2lApeR5FTgAAAAASUVORK5CYII="};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	/* border: 1px solid red; */
`;
