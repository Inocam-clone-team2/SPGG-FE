import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import api from "../api/post";
import { useNavigate } from "react-router-dom";

const DetailForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const onSubmitHandler = async (event, title, content, file) => {
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요.");

      return;
    }

    const postFormData = new FormData();

    const data = {
      title: title,
      content: content,
    };

    postFormData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    postFormData.append("file", file);
    /*
    multipart/form-data
    {
      data : {
        title: "title",
        content: "content"
        [[type]] = application/json
      },
      file : imageFile : File
    }
    */
    try {
      const response = await api.post(`/post/newpost`, postFormData);
      navigate(`/`); // 이동
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
  };
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // onSubmitHandler(event, title, content, file); // 전송
    }
  };

  const onClickMain = () => navigate("/");

  return (
    <>
      <Header />
      <SectionWrapper>
        <h1>리뷰 작성</h1>
        <SectionStyle>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              // 버튼 클릭시, input에 들어있는 값(state)을 이용하여 DB에 저장(POST요청)
              onSubmitHandler(event, title, content, file);
            }}
          >
            <FormGroup>
              <label htmlFor="title">제목</label>
              <input
                className="TitletInput"
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="제목 입력해주세요."
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="content">내용</label>
              <textarea
                className="ContentInput"
                type="text"
                id="content"
                name="content"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                placeholder="본문 입력 해주세요."
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="file">파일</label>
              <input
                type="file"
                className="file-input"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileUpload}
              />
            </FormGroup>
            <BtnWrap>
              <Btn className="write-form button" type="submit">
                글 작성
              </Btn>
              <Btn
                className="write-form button"
                type="submit"
                onClick={onClickMain}
              >
                취소
              </Btn>
            </BtnWrap>
          </form>
        </SectionStyle>
      </SectionWrapper>
    </>
  );
};

export default DetailForm;