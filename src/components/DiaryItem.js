import React, { useState, useRef } from "react";
import styled from "styled-components";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date,
  onRemove,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <ItemCont>
      <InfoCont>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <InfoDate>{new Date(created_date).toLocaleString()}</InfoDate>
      </InfoCont>
      <ContentBox>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => {
                setLocalContent(e.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </ContentBox>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </ItemCont>
  );
};

const ItemCont = styled.div`
  background-color: rgba(240, 240, 240);
  margin-bottom: 10px;
  padding: 20px;
`;

const InfoCont = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const InfoDate = styled.span`
  color: gray;
`;

const ContentBox = styled.div`
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default DiaryItem;
