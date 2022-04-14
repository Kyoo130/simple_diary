import React from "react";
import { DiaryItem } from "./index";
import styled from "styled-components";

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  console.log(diaryList);
  return (
    <ListCont>
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </ListCont>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

const ListCont = styled.div`
  border: 1px solid #bdbdbd;
  padding: 20px;
  margin-top: 20px;

  & h2 {
    text-align: center;
  }
`;

export default DiaryList;
