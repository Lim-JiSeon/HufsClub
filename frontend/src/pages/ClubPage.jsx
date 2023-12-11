import React from "react";
import Header from "../components/Header";
import ClubContents from "../components/club-detail/ClubContents";
import styled from "@emotion/styled";

const ClubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ClubPage() {
  return (
    <ClubContainer>
      <Header />
      <ClubContents />
    </ClubContainer>
  );
}

export default ClubPage;
