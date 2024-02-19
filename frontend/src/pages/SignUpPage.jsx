import React from "react";
import SignUpForm from "../components/SignUpForm";
import styled from "@emotion/styled";
import Header from "../components/Header";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function SignUpPage() {
  return (
    <Wrapper>
      <Header></Header>
      <div><SignUpForm onSubmit /></div>
    </Wrapper>
  );
}

export default SignUpPage;
