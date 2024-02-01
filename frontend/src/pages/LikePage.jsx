import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ClubGrid from "../components/ClubGrid";
import getUserInfo from "../api/getUserInfo";

const AreaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LikePage() {
  const [club, setClub] = useState([]);

  const getClub = async () => {
    setClub(await getUserInfo().likes);
  };

  useEffect(() => {
    getClub();
  }, []);

  return (
    <AreaContainer>
      <Header></Header>
      <ClubGrid data={club} />
    </AreaContainer>
  );
}
