import React, { useEffect, useState } from "react";
import getUserInfo from "../../api/getUserInfo";
import MyForm from "./MyForm";
import styled from "@emotion/styled";
import LogoutButton from "../func/LogoutButton";
import { useNavigate } from "react-router-dom";

const ButtonWrap = styled.div``;

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
    <>
      {data && <MyForm data={data} />}
      <ButtonWrap>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </ButtonWrap>
    </>
  );
};

export default MyContents;
