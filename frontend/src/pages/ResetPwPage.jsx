import React from "react";
import styled from "@emotion/styled";
import ResetPwForm from "../components/ResetPwForm";
import Header from "../components/Header";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  padding: 50px 0;
`;

function ResetPwPage() {
  return (
    <Wrapper>
      <Header></Header>
      <FormWrapper>
        <ResetPwForm />
      </FormWrapper>
    </Wrapper>
  );
}

export default ResetPwPage;
