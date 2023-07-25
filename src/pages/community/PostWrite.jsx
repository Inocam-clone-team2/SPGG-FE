import React, { useState } from "react";
import styled from "styled-components";
import { CommunityWrap } from "./Community";
import Header1 from "../../components/community/Header1";
import MainForm from "./CommunityMainForm";
import Footer2 from "../../components/community/Footer2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import instance from "../../api/post"

const PostWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("FREE");
  const navigate = useNavigate();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleChangeCategory = (e) => {setCategory(e.target.value);};
  const handleChangeImage = (e) => {
    setImage(e.target.file);
}
  const handleSubmit = (e) => async (event, title, content, file) => {
    e.preventDefault();
    console.log(title);
    console.log(content);

    const data = {
      title: title,
      content: content,
      category: category,
    };

    postFormData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    try {
      const response = await instance.post(`api/post`, postFormData);
      navigate(`/community`); // 이동
      setTitle("");
      setContent("");
      setFile(null);

      console.log(response);
      // 요청에 대한 응답 처리
    } catch (error) {
      console.error("Error:", error);

      // 에러 처리
    }
    // setTitle("");
    // setContent("");


  }

    // instance
    //   .post(
    //     "/api/post",
    //     {
    //       title: title,
    //       content: content,
    //       category: category,
    //     },
    //     {
    //       headers: {
    //         // Accept: 'application/json',
    //         Authorization: "Bearer " + localStorage.getItem("jwtToken"),
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);

    //     alert("글작성이 완료되었습니다.");
    //     navigate("/community");
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // onSubmitHandler(event, title, content, file); // 전송
    }
  };

  return (
    <div>
      <CommunityWrap>
        <Header1 />
        <div className="communityWrite-conatiner">
          <MainForm />
          <div style={{backgroundColor:'#ebeef1'}}>
            <WriteBox>
              <div className="content">
                <form onSubmit={handleSubmit}>
                  <div className="article-write">
                    <div className="article-write-header">
                      <div className="article-write__title">글쓰기</div>
                    </div>
                    <div className="article-write-input">
                      <input
                        onChange={handleChangeTitle}
                        type="text"
                        name="title"
                        className="article-write__text"
                        placeholder="제목"
                        autoComplete="off"
                      />
                    </div>
                    <div className="article-write-content">
                      <textarea
                        onChange={handleChangeContent}
                        className="article-write__textarea"
                      ></textarea>
                    </div>
                    <div>
                    <label htmlFor="file">파일</label>
                      <input
                        type="file"
                        className="file-input"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleFileUpload}
                      /></div>
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
          <Footer2/>
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
    width: 97.8%;
    margin-top: 13px;
    border: 1px solid rgb(221, 223, 228);
    color: rgb(30, 32, 34);
    resize: none;
    height: 447px;
    font-size: 17px;
    padding: 10px;
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
  }`;

export default PostWrite;
