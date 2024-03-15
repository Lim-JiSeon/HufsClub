import React from "react";
import styled from "@emotion/styled";
import LoginForm from "../components/login/LoginForm";
import { Header } from "../components/common/Header";

const MainContainer = styled.div`
  padding: 38px 20px 20px 20px;
`;

function LoginPage() {
  return (
    <>
      <Header text="로그인" />
      <MainContainer>
        <LoginForm />
      </MainContainer>
    </>
  );
}

export default LoginPage;
