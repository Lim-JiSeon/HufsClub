import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoginPage() {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
}

export default LoginPage;
