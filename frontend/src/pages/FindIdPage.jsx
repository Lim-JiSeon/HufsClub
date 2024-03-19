import React from "react";
import styled from "@emotion/styled";
import FindIdForm from "../components/find-id/FindIdForm";
import { Header } from "../components/common/Header";

const MainContainer = styled.div`
  padding: 38px 20px 20px 20px;
`;

const FindIdPage = () => {
  return (
    <>
      <Header text="아이디 찾기" />
      <MainContainer>
        <FindIdForm />
      </MainContainer>
    </>
  );
}

export default FindIdPage;
