import React, { useState, useEffect } from "react";
import { Header } from "../components/common/Header";
import styled from "@emotion/styled";
import EditClubContents from "../components/club-edit/EditClubContents";
import getClub from "../api/getClub";
import { useParams } from "react-router-dom";

const Main = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #efefef;
`;

const EditClubPage = () => {
  const clubId = useParams().id;
  const [data, setData] = useState();

  useEffect(() => {
    getClub(clubId)
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Main>
        <Header text="글 수정하기" />
        {data && <EditClubContents data={data} />}
      </Main>
    </>
  );
};

export default EditClubPage;
