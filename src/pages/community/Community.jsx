import React, { useState, useEffect } from "react";
import Header1 from "./../../components/Header1";
import Footer2 from "./../../components/Footer2";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MainForm from "./MainForm";
import moment from "moment";
import axios from "axios";
import "moment/locale/ko";

export const CommunityWrap = styled.div`
  // 스타일 코드 생략
`;

const ContentBox = styled.div`
  // 스타일 코드 생략
`;

const Community = () => {
  moment.locale("ko");

  const [communityDtos, setCommunityDtos] = useState([]);
  const [postPage, setPostPage] = useState(0);
  const [statusCode, setStatusCode] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

  useEffect(() => {
    axios
      .get("http://59.20.79.42:58002/post/" + postPage)
      .then((response) => {
        setCommunityDtos(response.data.data);
        setStatusCode(response.data.statusCode);
        console.log(1, communityDtos);
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
      .get("http://59.20.79.42:58002/post/" + prevPage)
      .then((response) => {
        console.log(response.data.statusCode);
        setCommunityDtos(response.data.data);
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
      .get("http://59.20.79.42:58002/post/" + nextPage)
      .then((response) => {
        console.log(response.data.statusCode);
        setCommunityDtos(response.data.data);
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
      .get("http://59.20.79.42:58002/post/find/" + inputValue)
      .then((response) => {
        console.log(2, inputValue);
        setCommunityDtos(response.data.data);
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
        .get("http://59.20.79.42:58002/post/find/" + inputValue)
        .then((response) => {
          console.log(2, inputValue);

          setCommunityDtos(response.data.data);
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

          <ContentBox>
            <div className="content-header">
              <div className="content-header-wrap">
                <h2 className="header-text">게시글</h2>
                <div style={{ marginRight: "24px" }}>
                  {localStorage.getItem("jwtToken") !== null &&
                    localStorage.getItem("jwtToken") !== undefined && (
                      <Link to="/write">
                        <img
                          src="img/iconWrite.png"
                          style={{ width: "24px" }}
                          alt="글쓰기"
                        />
                      </Link>
                    )}
                </div>
              </div>

              <div
                className="content-header-sub"
                style={{ height: "48px", position: "relative" }}
              >
                <div className="sub-search-wrap">
                  <form className="sub-search" onSubmit={handleOnSubmit}>
                    <select className="sub-header-search__select">
                      <option>제목+내용</option>
                    </select>
                    <input
                      onChange={handleOnChange}
                      tpye="text"
                      value={inputValue}
                      className="sub-header-search__input"
                      placeholder="검색"
                    />
                    <button className="sub-header-search__button">
                      <img
                        className="sub-header-search__img"
                        src="img/iconSearch.png"
                        alt="검색"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="article-list">
              {/* 여기서 부터 반복 */}
              {communityDtos.map(
                (communityDto) =>
                  communityDto.type === 1 && (
                    <div className="article-box" key={communityDto.post.id}>
                      <div
                        className="article-item"
                        style={{ display: "contents" }}
                      >
                        <div
                          className="article-number"
                          style={{ alignSelf: "center", width: "72px" }}
                        >
                          {communityDto.post.id}
                        </div>
                        <div
                          className="article-list-item__content"
                          style={{ alignSelf: "center" }}
                        >
                          <Link
                            to={"/community/" + communityDto.post.id}
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className="aritcle-list-item__title"
                              style={{ textAlign: "left" }}
                            >
                              <span className="post-title">
                                {communityDto.post.title}
                              </span>
                              <em
                                style={{
                                  color: "#16ae81",
                                  fontStyle: "normal",
                                }}
                              >
                                [{communityDto.post.replies.length}]
                              </em>
                            </div>
                          </Link>
                          <div className="article-list-item-meta">
                            <div className="article-list-item-meta__item">
                              <span style={{ color: "#98a0a7" }}>
                                {moment(communityDto.post.createDate)
                                  .startOf("second")
                                  .fromNow()}
                              </span>
                              <span className="article-list-author">
                                {communityDto.post.user.nickname}
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
                            src="img/iconArrowLeft.png"
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
                            src="img/iconArrowRight.png"
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

export default Community;
