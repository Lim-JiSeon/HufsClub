import styled from "@emotion/styled";
import React from "react";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleWrap = styled.div`
  color: #27374d;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  padding: 40px 0;
`;

const BoxDiv = styled.div`
  max-width: 200px;
  min-height: 250px;
  border-radius: 10px;
  border: none;
  background-color: #dde6ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 10px 30px 10px;
  box-sizing: border-box;
  word-break: break-all;
`;

const ContentsDiv = styled.div`
  color: #27374d;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
`;

const SubTitleText = styled.div`
  font-weight: bold;
  font-size: 22px;
  padding: 15px 0 50px 0;
`;

const LinkText = styled.a`
  text-decoration: none;
  color: #27374d;
  font-weight: bold;
  border-bottom: 2px solid #27374d;
`;

const ClubJoin = (data) => {
  const { recruit } = data.data;

  return (
    <ContentWrap>
      <TitleWrap>동아리 지원 방법</TitleWrap>
      <ContentsDiv>
        <BoxDiv>
          <SubTitleText>모집 인원</SubTitleText>
          <div>{recruit.num}</div>
        </BoxDiv>
        <BoxDiv>
          <SubTitleText>모집 시기</SubTitleText>
          <div>{recruit.period}</div>
        </BoxDiv>
        <BoxDiv>
          <SubTitleText>모집 방법</SubTitleText>
          <div>{recruit.way}</div>
        </BoxDiv>
        <BoxDiv>
          <SubTitleText>지원서 작성</SubTitleText>
          <LinkText href={recruit.applyUrl}>Link</LinkText>
        </BoxDiv>
      </ContentsDiv>
    </ContentWrap>
  );
};

export default ClubJoin;
