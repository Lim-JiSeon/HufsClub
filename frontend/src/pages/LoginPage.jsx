import React from "react";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";

const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoginPage() {
  return (
    <Wrapper>
      <LoginForm onSubmit />
    </Wrapper>
  );
}

export default LoginPage;
