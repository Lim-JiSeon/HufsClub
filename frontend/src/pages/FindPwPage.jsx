import React from "react";
import styled from "@emotion/styled";
import FindPwForm from "../components/find-pw/FindPwForm";
import { Header } from "../components/common/Header";

const MainContainer = styled.div`
  padding: 38px 20px 20px 20px;
`;

const FindPwPage = () => {
  return (
    <>
      <Header text="비밀번호 찾기" />
      <MainContainer>
        <FindPwForm />
      </MainContainer>
    </>
  );
};

export default FindPwPage;
