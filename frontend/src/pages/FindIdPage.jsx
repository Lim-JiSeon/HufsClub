import React from "react";
import styled from "@emotion/styled";
import FindIdForm from "../components/FindIdForm";
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
`

function FindIdPage() {
  return (
    <Wrapper>
      <Header></Header>
      <FormWrapper>
        <FindIdForm onSubmit />
      </FormWrapper>
    </Wrapper>
  );
}

export default FindIdPage;
