import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../components/community/Header1";
import Footer2 from "../../components/community/Footer2";
import MainForm from "./CommunityMainForm";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/post";
import Like from "../../components/Like";

const PostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await api.get(`api/post/${id}`);
      setPost(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("API 요청 오류:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  const onDeletePost = async () => {
    const confirmDelete = window.confirm("글을 삭제하시겠습니까?");
    if (confirmDelete) {
      try {
        await api.delete(`api/post/${id}`);
        console.log("삭제되었습니다!");
        navigate(`/community`);
      } catch (error) {
        alert("포스트에 대한 권한이 없습니다.");
        console.error("댓글 삭제 오류:", error);
      }
    }
  };

  const onClickPostUpdateButton = () => {
    if (localStorage.getItem("authorization") === null) {
      alert("로그인 되지 않은 사용자입니다.");
      navigate("/login");
    } else {
      console.log("로그인 중입니다");
      navigate(`/PostEdit/${id}`);
    }
  };

  return (
    <div>
      <CommunityWrap>
        <Header1 />
        <div className="community-container">
          <MainForm />
          <CommunityContentBox>
            <div className="article">
              <div className="article-header">
                <div className="article__title">{post.title}</div>
                <div className="article-meta">
                  <div className="article-meta-list">
                    <div className="article-meta__item">
                      <span>
                        {moment(post.createdAt).startOf("second").fromNow()}
                      </span>
                    </div>
                    <div className="article-meta__item article-meta__item--name">
                      {post.nickname}
                    </div>
                  </div>
                  <div className="article-meta-list article-meta-list--right">
                    <div className="article-meta__item">
                      <span>조회 {post.views}</span>
                    </div>
                    <div className="article-meta__item">
                      <span>댓글 {post.commentCount}</span>
                    </div>

                    <div className="article-meta__item">
                      <span>추천 {post.liked}</span>
                    </div>
                  </div>
                </div>
                <div className="article-action">
                  <div className="article-action__item">
                    <button
                      onClick={(e) => onDeletePost()}
                      className="article-action__button button button--red button--red--border"
                    >
                      삭제
                    </button>
                  </div>
                  <div className="article-action__item">
                    <button
                      onClick={onClickPostUpdateButton}
                      className="article-action__button__button"
                    >
                      수정
                    </button>
                  </div>
                </div>
              </div>
              <div className="article-content-wrap">
                <div className="article-content">
                  <p>{post.content}</p>
                </div>
              </div>{" "}
              <ImageBox imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAY1BMVEX///+VlZWPj4/j4+O0tLT7+/ucnJyfn5/b29uSkpKkpKSrq6uurq7m5uZmZmaWlpbz8/OIiIjs7Ox5eXlkZGRsbGzNzc2BgYF0dHTU1NRvb2+7u7ve3t7w8PDCwsKKiopcXFxuhZvhAAAELklEQVR4nO3b25KiOhQG4HBIICgHUQgg6rz/U85Kgt3OlNDs6mrdrPm/Kwtzwc9KApIoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAU3LBu8/tR8k23i2IW77xcxXqRaGq332OPyRSOviCVjwrX5dfRg+CsH33af6Eqerhc/fLouN3n+cPqF10rdvombzVfLNHrsNrlT//ulZ8s+e+6uVM9Ivi2+f9NDcbfaq65pjdT3PzHX4aD2fNL/uUTc91+MR3+HEM2WX301yQzDyyTVcmyEXKLns+DeY2f353m2bBUYieW/aPpzk981TjZzmKzq7u9dfP8KSMbFtu2Xdrogepa8ssexU+Sfr35QhH35hZ9shnV3N89sg35ph94Xep+wkT+i7PMnu50KBknj1ZaJDpz+zM7u/IvtCAeXb9D2dfXfd/ea5D9pec1ysg+0IDZPefMc+/5LxeAdkXGjxmb3m9o/4vz3W5vU7Msq+su1/AYLQGvT77/TU9n70Hq7N/sU67RWuz31fnGUVfmX2sta86q51Gq7Lra+KjRy87r1dYlT3wVQ9YVX1t9oDbNOeszs5rmnP8usxCg/JedWYdXny9LtP7suuS1zTn+LprtX9OhVN0flX/XIed2Tt87/AMqy4e5vF5DKc5776JaiE6u5vbh3r30b21fYjRbgB8bEDQesdxrN9d8iWckwMAAAAAAAAA/A/FqqyEONtliTExJptez1S7sxBXpXr6nCfKbTDJy+lvg73yDa/u7ySbfYsng6GhfOpE0bpuv+tM5Y5XByVF3DQZfW6bQdtj16Zxixd9YeJsuFX0vUo2nF2Ux+NOiISyx4P9y+Pg12Z89uFg6HPSGbdaVQadvRSyPF7oQpxSERfVG8/8+8qbogra7MqWPD/6/VNT9uxIXdvog627NLE2969ESn0gLi5vPffvKsNrEz1m37vDU5+/dqkQp7PLHnXpeaCwl8N9vXbz2W91Ec9mT81VpMVobPb2mPd2bnjMHlWXarsbrsqbMLe57EUdKnE1tcu+M1XenX32KI7jiMbEsevMdl/clzdJPTmbyV7tjcxK6bLfSn/UZu/DQ0HjvWn7vt9y3eU49LPZWyp9LGx2WVDNE2rj+rzsCwZz3U1Wh11STNnrP7NfquLc9S572jSnU9Pk03hPeWQXmQkKW1MauWP3eI8rLtIc6CZus8cDdXCa+UV1CyWX7BU9uJnCPrZdhcjsTC4+s4tk6IQb7+pAiauCap4N1KZ12Wmev2x2vMuQerpsml+USzfD0CQ+SmVKKfa/anp+S4Q8hjQY3J2tM1LUxjakobAvGhoI291QHdn/84+p3SFd9efzOFVRjhEN/lSKKrUjIRIydfeyiA6JCzXsc7oIqbXt51oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+K7fw2lApeR5FTgAAAAASUVORK5CYII=" />
              <ImageBox imageUrl={post.image} />
              <div className="article-box">
                <div className="postVote">
                  <Like postId={id} />
                </div>
              </div>
            </div>
            <Footer2 />
          </CommunityContentBox>
        </div>
      </CommunityWrap>
    </div>
  );
};

const CommunityContentBox = styled.div`
  max-width: 728px;
  text-align: left;
  margin: auto;

  .article {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }

  .comment-wrap {
    padding: 10px;
  }
  .article-header {
    padding-left: 24px;
    padding-right: 24px;
    padding: 24px 16px;
    border-bottom: 1px solid #ebeef1;
  }

  .article__title {
    text-align: left;
    line-height: 36px;
    font-size: 24px;
    /* color: #1e2022; */
    word-wrap: break-word;
    word-break: break-all;
    overflow: auto;
  }
  .article-meta {
    margin-top: 9px;
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
  }

  .article-meta-list {
    float: left;
    margin-top: 0;
  }

  .article-meta__item {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin-left: 8px;
    padding-left: 9px;
  }

  .article-meta-list--right {
    float: right;
  }

  .article-content-wrap {
    overflow: auto;
  }

  .article-content {
    padding-right: 24px;
    padding-left: 24px;
    padding: 24px 16px;
  }

  .article-content p {
    margin: 10px 0;
    color: #555;
  }

  .article-box {
    border-top: 1px solid #ebeef1;
    border-bottom: 1px solid #ebeef1;
    text-align: center;
  }
  .article-vote__button {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #dddfe4;

    width: 88px;
    line-height: 17px;
    font-size: 14px;
    height: 43px;

    color: #1e2022;
  }

  /*화살표 이미지*/
  .article-vote__up-arrow {
    width: 16px;
    height: 16px;
    background-image: url("/img/iconVoteUp.png");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 16px;
    line-height: 999px;
    vertical-align: top;
    overflow: hidden;
    display: inline-block;
    margin-top: 1px;
    transition: all 0.5s;
  }
  /*추천 숫자*/
  .article-vote__up-count {
    transition: all 0.3s;
    display: inline-block;
  }
  .postVote {
    padding: 12px 0;
  }

  .comment-wrap {
    margin-bottom: 8px;
    background-color: #f8fafa;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }
  .comment {
    position: relative;
    /* padding: 20px 15px 12px 64px; */
    padding: 10px;
  }

  .comment-meta {
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
  }
  .comment-vote {
    position: absolute;
    left: 0;
    top: 36px;
    width: 64px;
    text-align: center;
  }
  .comment__date {
    margin-left: 19px;
  }
  .comment__name {
    font-weight: 700;
    color: #1e2022;
  }
  .comment-content {
    line-height: 20px;
    font-size: 15px;
    color: #1e2022;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .article-action {
    margin-top: 16px;
  }

  .article-action__item:first-child {
    margin-left: 0;
  }

  .article-action__item {
    display: inline-block;
    vertical-align: middle;
    /* margin-left: 8px; */
  }

  button,
  input {
    margin: 0;
    font-size: 14px;
    outline: 0;
    border: 1px solid #dddfe4;
    border-radius: 4px;
  }
  .article-action__button {
    line-height: 15px;
    font-size: 12px;
    padding: 8px 15px 7px;
  }
  .button--red--border {
    border-color: #f95b54;
    background: #fff;
    color: #f95b54;
    margin-right: 5px;
  }

  .article-action__button__button {
    border: 1px solid #dddfe4;

    border-radius: 4px;
    line-height: 15px;
    font-size: 12px;
    padding: 10px 15px 7px;
    color: black;
    box-sizing: border-box;
  }

  .article-meta {
    margin-bottom: 47px;
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
export default PostDetail;
