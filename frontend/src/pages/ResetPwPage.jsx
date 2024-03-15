import React from "react";
import styled from "@emotion/styled";
import ResetPwForm from "../components/reset-pw/ResetPwForm";
import { Header } from "../components/common/Header";

const MainContainer = styled.div`
  padding: 38px 20px 20px 20px;
`;

const ResetPwPage = () => {
  return (
    <>
      <Header text="비밀번호 재설정" />
      <MainContainer>
        <ResetPwForm />
      </MainContainer>
    </>
  );
};

export default ResetPwPage;
