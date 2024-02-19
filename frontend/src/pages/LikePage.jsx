import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LikeGrid from "../components/LikeGrid";
import getUserInfo from "../api/getUserInfo";

const AreaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  padding: 20px 0 30px 0;
  color: #27374d;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
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
    <AreaContainer>
      <Header></Header>
      <Title>좋아요 관리</Title>
      <LikeGrid data={club} />
    </AreaContainer>
  );
}
