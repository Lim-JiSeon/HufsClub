import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/common/Header";
import SearchBar from "../components/area/SearchBar";
import ClubGrid from "../components/area/ClubGrid";
import getField from "../api/getField";

const Main = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #efefef;
`;

const MainContainer = styled.div`
  padding: 38px 20px 20px 20px;
`;

const RegisterButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 480px;
  height: 40px;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  text-decoration: none;
  background-color: #fed313;
  color: black;
  font-size: 14px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: #ffefa9;
  }

  &:active {
    background-color: #ffefa9;
  }

  &:disabled {
    background-color: #ffefa9;
  }
`;

function AreaPage() {
  const area = useParams().field;
  const [club, setClub] = useState([]);

  const registerButton =
    sessionStorage.getItem("hufs-isAdmin") &&
    sessionStorage.getItem("hufs-isPresident");

  const getClub = async () => {
    setClub(await getField(area));
  };

  useEffect(() => {
    getClub();
  }, []);

  return (
    <>
      <Main>
        <Header text={area} />
        <MainContainer>
          <SearchBar setClub={setClub} />
          <ClubGrid data={club} />
        </MainContainer>
        {registerButton && (
          <RegisterButton to={`/${area}/register-club`}>
            동아리 등록하기
          </RegisterButton>
        )}
      </Main>
    </>
  );
}

export default AreaPage;
