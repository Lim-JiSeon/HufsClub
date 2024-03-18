import React, { useEffect, useState } from "react";
import { Header } from "../components/common/Header";
import ClubContents from "../components/club-detail/ClubContents";
import styled from "@emotion/styled";
import getClub from "../api/getClub";
import getUserInfo from "../api/getUserInfo";
import { useParams } from "react-router-dom";
import EditButton from "../components/club-detail/EditButton";

const Main = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #efefef;
`;

const MainContainer = styled.div`
  padding: 38px 20px 90px 20px;
`;

const ClubPage = () => {
  const clubId = useParams().id;

  const [data, setData] = useState();
  const [isPresident, setIsPresident] = useState("");

  useEffect(() => {
    getClub(clubId)
      .then((res) => {
        setData(res);
        getUserInfo()
          .then((res) => {
            setIsPresident(res.isPresident);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [clubId]);

  return (
    <>
      <Main>
        <Header text={data?.name} />
        <MainContainer>{data && <ClubContents data={data} />}</MainContainer>
        {data && <EditButton data={data} isPresident={isPresident} />}
      </Main>
    </>
  );
};

export default ClubPage;
