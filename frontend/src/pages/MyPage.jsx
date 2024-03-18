import React from "react";
import { Header } from "../components/common/Header";
import MyContents from "../components/my-page/MyContents";
import styled from "@emotion/styled";

const MainContainer = styled.div`
  padding: 38px 20px 20px 20px;
`;

const MyPage = () => {
  return (
    <>
      <Header text="내 정보" />
      <MainContainer>
        <MyContents />
      </MainContainer>
    </>
  );
};

export default MyPage;
