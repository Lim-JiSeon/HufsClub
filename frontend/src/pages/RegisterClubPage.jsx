import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "@emotion/styled";
import RegisterClubContents from "../components/RegisterClubContents";
import getUserInfo from "../api/getUserInfo";

const RegisterClubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterClubPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <RegisterClubContainer>
      <Header />
      {data && <RegisterClubContents data={data} />}
    </RegisterClubContainer>
  );
};

export default RegisterClubPage;
