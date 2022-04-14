import React from "react";
import styled from "styled-components";

const DiaryItem = ({ author, content, emotion, created_date }) => {
  return (
    <ItemCont>
      <InfoCont>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <InfoDate>{new Date(created_date).toLocaleString()}</InfoDate>
      </InfoCont>
      <ContentBox>{content}</ContentBox>
    </ItemCont>
  );
};

const ItemCont = styled.div`
  background-color: rgba(240, 240, 240);
  margin-bottom: 10px;
  padding: 20px;
`

const InfoCont = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`

const InfoDate = styled.span`
  color: gray;
`

const ContentBox = styled.div`
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`

export default DiaryItem;
