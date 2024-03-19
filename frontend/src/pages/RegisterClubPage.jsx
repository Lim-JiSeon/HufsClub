import React, { useEffect, useState } from "react";
import { Header } from "../components/common/Header";
import styled from "@emotion/styled";
import RegisterClubContents from "../components/RegisterClubContents";
import getUserInfo from "../api/getUserInfo";

const Main = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #efefef;
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
    <>
      <Main>
        <Header text="글 작성하기" />
        {data && <RegisterClubContents data={data} />}
      </Main>
    </>
  );
};

export default RegisterClubPage;
