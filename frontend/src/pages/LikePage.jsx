import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Header } from "../components/common/Header";
import LikeGrid from "../components/like/LikeGrid";
import getUserInfo from "../api/getUserInfo";

const Main = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #efefef;
`;

const MainContainer = styled.div`
  padding: 38px 20px 20px 20px;
`;

export default function LikePage() {
  const [club, setClub] = useState([]);

  const getClub = async () => {
    setClub(await getUserInfo());
  };

  useEffect(() => {
    getClub();
  }, []);

  return (
    <>
      <Main>
        <Header text="좋아요 관리" />
        <MainContainer>
          <LikeGrid data={club} />
        </MainContainer>
      </Main>
    </>
  );
}
