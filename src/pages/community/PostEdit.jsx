import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../components/community/Header1";
import MainForm from "./CommunityMainForm";
import Footer2 from "../../components/community/Footer2";
import api from "../../api/post";
import { useNavigate, useParams } from "react-router-dom";
const PostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (event, title, content, file) => {
    event.preventDefault();
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    const formData = new FormData();
    const data = {
      title: title,
      content: content,
    };
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    formData.append("file", file);
    try {
      const response = await api.put(`api/post/${id}`, formData);
      alert("게시글이 수정되었습니다.");
      navigate(`/posts/${id}`);
      console.log(response);
    } catch (error) {
      console.error("게시글 수정 실패:", error);
      alert("게시글 수정에 실패했습니다.");
    }
  };
  return (
    <div>
      <CommunityWrap>
        <Header1 />
        <div className="communityWrite-conatiner">
          <MainForm />
          <div style={{ backgroundColor: "#EBEEF1" }}>
            <WriteBox>
              <div className="content">
                <form onSubmit={handleSubmit}>
                  <div className="article-write">
                    <div className="article-write-header">
                      <div className="article-write__title">글수정</div>
                    </div>
                    <div className="article-write-input">
                      <input
                        onChange={handleTitleChange}
                        type="text"
                        name="title"
                        value={title}
                        className="article-write__text"
                        placeholder="제목"
                        autoComplete="off"
                      />
                    </div>
                    <div className="article-write-content">
                      <textarea
                        onChange={handleContentChange}
                        className="article-write__textarea"
                        value={content}
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="file">파일</label>
                      <input
                        type="file"
                        className="file-input"
                        id="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="article-write__btn">
                      <button
                        className="article-write__button article-write__button--cancel"
                        type="button"
                        onClick={() => navigate("/community")}
                      >
                        취소
                      </button>
                      <button
                        className="article-write__button article-write__button--submit"
                        type="submit"
                      >
                        작성완료
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </WriteBox>
          </div>
          <Footer2 />
        </div>
      </CommunityWrap>
    </div>
  );
};
const WriteBox = styled.div`
  text-align: center;
  width: 728px;
  margin: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  .article-write {
    background: rgb(255, 255, 255);
    padding: 20px 10px;
  }
  .article-write__title {
    text-align: left;
  }
  .article-write__title {
    color: rgb(30, 32, 34);
    font-weight: 700;
  }
  .article-write-input {
    margin-top: 16px;
  }
  .article-write-header {
    position: static;
    text-align: left;
    padding-bottom: 0px;
    padding-top: 8px;
    background: rgb(255, 255, 255);
  }
  .article-write__text {
    display: block;
    width: 100%;
    background-color: rgb(255, 255, 255);
    line-height: 19px;
    font-size: 16px;
    color: rgb(30, 32, 34);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 223, 228);
    border-image: initial;
    padding: 10px 16px 9px;
  }
  .article-write-content {
    width: 100%;
  }
  .article-write__textarea {
    font-size: 17px;
    padding: 10px;
    width: 97.8%;
    margin-top: 13px;
    border: 1px solid rgb(221, 223, 228);
    color: rgb(30, 32, 34);
    resize: none;
    height: 447px;
  }
  .article-write__button--submit {
    margin-top: 16px;
    position: static;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background-color: #46cfa7;
    width: 154px;
    height: 48px;
    line-height: 19px;
    font-size: 16px;
  }
  .article-write__button--cancel {
    margin-top: 16px;
    line-height: 19px;
    font-size: 16px;
    color: #7b858e;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #dddfe4;
    width: 154px;
    height: 48px;
  }
  .article-write__btn {
    display: flex;
    justify-content: space-between;
  }
`;
export default PostEdit;
