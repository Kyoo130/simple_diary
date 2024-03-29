import React, { useState, useRef } from "react";
import styled from "styled-components";

const Editor = ({onCreate}) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      alert("작성자는 최소 1글자 이상 입력해주세요.");
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요.");
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  };

  return (
    <DiaryEditor className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          type="text"
          value={state.author}
          onChange={handleChangeState}
          ref={authorInput}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
          ref={contentInput}
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </DiaryEditor>
  );
};

const DiaryEditor = styled.div`
  border: 1px solid #bdbdbd;
  text-align: center;
  padding: 20px;

  & input,
  textarea {
    margin-bottom: 20px;
    width: 500px;
    padding: 10px;
  }

  & textarea {
    height: 150px;
  }

  & select {
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
  }

  & button {
    width: 500px;
    padding: 10px;
    cursor: pointer;
  }
`;

export default Editor;
