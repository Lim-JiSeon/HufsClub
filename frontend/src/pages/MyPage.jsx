import React from "react";
import Header from "../components/Header";
import MyContents from "../components/MyContents";
import styled from "@emotion/styled";

const MyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function MyPage() {
  return (
    <MyContainer>
      <Header />
      <MyContents />
    </MyContainer>
  );
}

export default MyPage;
