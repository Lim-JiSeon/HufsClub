import React, { useEffect, useState } from "react";
import getUserInfo from "../api/getUserInfo";
import MyInfo from "./MyInfo";
import styled from "@emotion/styled";
import LogoutButton from "./func/LogoutButton";
import { useNavigate } from "react-router-dom";

const ContentWrap = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  width: 30%;
`;

const MyContents = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ContentWrap>
      {data && <MyInfo data={data} />}
      <ButtonWrap>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </ButtonWrap>
    </ContentWrap>
  );
};

export default MyContents;
