import React, { useState, useEffect } from "react";
import Header1 from "./../../components/Header1";
import Footer2 from "./../../components/Footer2";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MainForm from "./CommunityMainForm";
import moment from "moment";
import axios from "axios";
import "moment/locale/ko";

const Community = () => {

  moment.locale("ko");

  const [community, setCommunity] = useState([]);
  const [postPage, setPostPage] = useState(0);
  const [statusCode, setStatusCode] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://3.37.36./api/post")
      .then((response) => {
        setCommunity(response.data.data.content);
        setStatusCode(response.data.statusCode);
        console.log(1, community);
        console.log(2, statusCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevPage = () => {
    let prevPage = postPage - 1;
    if (postPage < 0) {
      return;
    }
    console.log(6, prevPage);
    axios
      .get("http://3.37.36./api/post/" + prevPage)
      .then((response) => {
        console.log(response.data.statusCode);
        setCommunity(response.data.data.content);
        setStatusCode(response.data.statusCode);

        setPostPage(postPage - 1);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleNextPage = () => {
    let nextPage = postPage + 1;

    axios
      .get("http://3.37.36./api/post/" + nextPage)
      .then((response) => {
        console.log(response.data.statusCode);
        setCommunity(response.data.data.content);
        setStatusCode(response.data.statusCode);
        setPostPage(postPage + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .get("api/post/find/" + inputValue)
      .then((response) => {
        console.log(2, inputValue);
        setCommunity(response.data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChange = (e) => {
    console.log(1, inputValue);
    setInputValue(e.target.value);

    const search = async () => {
      await axios
        .get("api/post/find/" + inputValue)
        .then((response) => {
          console.log(2, inputValue);

          setCommunity(response.data.data.content);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    setTimeout(400);
    search();
  };

  return (
    <div>
      <CommunityWrap>
        <Header1 />
        <div className="community-container">
          <MainForm />
          <ContentBox >
            <div className="community-header">
              <div className="community-header-1">
                <h2 className="header-text">전체</h2>
                <div style={{ marginRight: "24px" }}>
                  <Link to="/PostWrite">
                    <img
                      src="/img/iconWrite.png"
                      style={{ width: "24px" }}
                      alt="글쓰기"
                    />
                  </Link>
                </div>
              </div>
              <div
                className=" community-header-2"
                style={{ height: "48px", position: "relative" }}
              >
                <div className="post-search-wrap">
                  <form className="post-search" onSubmit={handleOnSubmit}>
                    <select className="post-search-select">
                      <option>제목+내용</option>
                    </select>
                    <input
                      onChange={handleOnChange}
                      tpye="text"
                      value={inputValue}
                      className="post-search-input"
                      placeholder="검색"
                    />
                    <button className="post-search-button">
                      <img
                        className="post-search-img"
                        src="/img/iconSearch.png"
                        alt="검색"
                        style={{ cursor: "pointer" }}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="article-list">
              {/* 여기서 부터 반복 */}
              {community.map(
                (community) =>
                (
                    <div className="article-box" key={community.id}>
                      <div
                        className="article-item"
                        style={{ display: "contents" }}
                      >
                        <div
                          className="article-number"
                          style={{ alignSelf: "center", width: "72px" }}
                        >
                          {community.id}
                        </div>
                        <div
                          className="article-list-item__content"
                          style={{ alignSelf: "center" }}
                        >
                          <Link
                            to={"/PostDetail/" + community.id}
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className="aritcle-list-item__title"
                              style={{ textAlign: "left" }}
                            >
                              <span className="post-title">
                                {community.title}
                              </span>
                              {/* <em
                                style={{
                                  color: "#16ae81",
                                  fontStyle: "normal",
                                }}
                              >
                                [{community.commentList.length}]
                              </em> */}
                            </div>
                          </Link>
                          <div className="article-list-item-meta">
                            <div className="article-list-item-meta__item">
                              <span style={{ color: "#98a0a7" }}>
                                {moment(community.createdAt)
                                  .startOf("second")
                                  .fromNow()}
                              </span>
                              <span className="article-list-author">
                                {community.nickname}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}

              <div>
                <div className="article-list-paging">
                  <div>
                    {postPage > 0 && (
                      <div style={{ display: "inline-block" }}>
                        <button
                          style={{ marginRight: "6px" }}
                          onClick={handlePrevPage}
                          className="article-list-paging__button"
                        >
                          <img
                            src="/img/iconArrowLeft.png"
                            alt="이전"
                            style={{
                              width: "24px",
                              height: "24px",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          />
                          이전
                        </button>
                      </div>
                    )}

                    {statusCode !== 204 ? (
                      <div style={{ display: "inline-block" }}>
                        <button
                          style={{ marginLeft: "6px" }}
                          onClick={handleNextPage}
                          className="article-list-paging__button"
                        >
                          다음
                          <img
                            src="/img/iconArrowRight.png"
                            alt="다음"
                            style={{
                              width: "24px",
                              height: "24px",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          />
                        </button>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Footer2 />
          </ContentBox>
        </div>
      </CommunityWrap>
    </div>
  );
};

export const CommunityWrap = styled.div`
margin: 0 auto;
  vertical-align: middle;
  justify-content: center;
  max-width: 100%;
  background-size: 100%;

  .community-container {
    text-align: center;
    background-color: #ebeef1;
  }`;

const ContentBox = styled.div`
max-width: 728px;
background-color: white;
margin: auto;
;

.community-header {
  position: relative;
  margin-bottom: 8px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
}
.community-header-1 {
  display: flex;
  padding-top: 18px;
  padding-bottom: 0px;
  justify-content: space-between;
}

.header-text {
  padding-left: 16px;
  line-height: 21px;
  font-size: 18px;
  color: #1e2022;
  font-weight: 700;
  margin-bottom: 8px;
}
.article-box {
  display: flex;
  margin-top: 0;
  border-top: 1px solid #ebeef1;
  background: #ffffff;

  line-height: 18px;
  font-size: 14px;
  color: #7b858e;
  min-height: 76px;
}

.article-list-item:first-child {
  border-top: none;

  .article-list-item__content {
    vertical-align: middle;
  }

  .article-list-item__title {
    display: flex;
    overflow: auto;
    vertical-align: top;
    line-height: 15px;
    font-size: 14px;
    color: #1e2022;
    word-break: break-all;
  }
  .article-item {
    display: flex;
    border-top: 1px solid #ebeef1;
    background-color: #fff;
  }
  .article-list-item__title .post-title {
    display: block;
    max-width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .article-number {
    vertical-align: middle;
    margin-top: 5px;
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
  }
}

.post-title {
  color: black;
  padding-right: 5px;
}

.article-list-item-meta {
  display: flex;
  justify-content: space-between;
}

.article-list-author {
  display: inline-block;
  line-height: 18px;
  font-size: 14px;
  color: #98a0a7;
  padding-left: 8px;
}

.post-search-wrap {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 6px;
  margin-bottom: 6px;
}

.post-search-select {
  float: left;
  width: 122px;
  padding: 9px 0 8px 15px;
  box-sizing: border-box;
  border: 1px solid #ebeef1;
  border-radius: 4px 0 0 4px;
  line-height: 17px;
  font-size: 14px;
  color: #98a0a7;
  background-image: url("/img/iconDropdown.png");
  background-size: 24px;
  background-position: top 5px right 5px;
  background-repeat: no-repeat;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

.post-search-input {
  float: left;
  border: none;
  width: 200px;
  box-sizing: border-box;
  padding: 10px 32px 9px 16px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #ebeef1;
  line-height: 17px;
  font-size: 14px;
}

.post-search-button {
  float: left;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 6px;
  margin-right: 8px;
  border: none;
}

.post-search-img {
  width: 24px;
  height: 24px;
}

.article-list-paging {
  height: 64px;
  background: #f8f9fa;
}

.article-list-paging__button {
  line-height: 17px;
  font-size: 14px;
  color: #7b858e;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #dddfe4;
  width: 77px;
  height: 40px;
  margin-top: 12px;
}

.article-list-author {
  margin-left: 5px;
}`;

export default Community;
