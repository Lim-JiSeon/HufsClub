import React from "react";
import Header from "../components/Header";
import styled from "@emotion/styled";
import EditClubContents from "../components/club-edit/EditClubContents";

const EditClubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function EditClubPage() {
  return (
    <EditClubContainer>
      <Header />
      <EditClubContents />
    </EditClubContainer>
  );
}

export default EditClubPage;
