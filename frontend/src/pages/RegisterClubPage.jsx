import React from "react";
import Header from "../components/Header";
import styled from "@emotion/styled";
import RegisterClubContents from "../components/RegisterClubContents";

const RegisterClubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterClubPage = () => {
  return (
    <RegisterClubContainer>
      <Header />
      <RegisterClubContents />
    </RegisterClubContainer>
  );
};

export default RegisterClubPage;
