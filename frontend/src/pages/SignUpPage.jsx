import React from "react";
import SignUpForm from "../components/SignUpForm";
import styled from "@emotion/styled";
import Header from "../components/Header";

const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SignUpPage() {
  return (
    <Wrapper>
      <Header></Header>
      <SignUpForm onSubmit/>
    </Wrapper>
  );
}

export default SignUpPage;
