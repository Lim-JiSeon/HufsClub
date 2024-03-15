import React from "react";
import SignUpForm from "../components/signup/SignUpForm";
import styled from "@emotion/styled";
import { Header } from "../components/common/Header";

const MainContainer = styled.div`
  padding: 38px 20px 20px 20px;
`;

function SignUpPage() {
  return (
    <>
      <Header text="회원가입" />
      <MainContainer>
        <SignUpForm />
      </MainContainer>
    </>
  );
}

export default SignUpPage;
