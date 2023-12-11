import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "@emotion/styled";
import getClub from "../api/getClub";
import { useParams } from "react-router-dom";
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
  const clubId = useParams().id;
  const [data, setData] = useState();

  useEffect(() => {
    getClub(clubId)
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, [clubId]);

  return (
    <EditClubContainer>
      <Header />
      <EditClubContents />
    </EditClubContainer>
  );
}

export default EditClubPage;
