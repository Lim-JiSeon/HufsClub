import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import deleteClub from "../../api/deleteClub";
import Popup from "../func/Popup";

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 480px;
  position: fixed;
  bottom: 0;
`;

const Button = styled.button`
  width: 100%;
  max-width: 240px;
  border: none;
  background-color: #1d1d1d;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 24px 0;

  cursor: pointer;

  &:hover {
    background-color: #a6a6a6;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  max-width: 240px;
  text-decoration: none;
  background-color: #fed313;
  color: black;
  font-size: 14px;
  font-weight: bold;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: #ffefa9;
  }
`;

const EditButton = ({ data, isPresident }) => {
  const [deletePopup, setDeletePopup] = useState(false);

  const admin = sessionStorage.getItem("hufs-isAdmin") ?? false;

  const manager = admin === "true" || isPresident === data?.name;

  const PopupProps = {
    title: "글을 삭제하시겠습니까?",
    leftBtnText: "아니요",
    rightBtnText: "예",
    leftBtn: () => setDeletePopup(false),
    rightBtn: () => {
      deleteClub(data._id);
      Navigate("/");
    },
  };

  return (
    <>
      {manager && (
        <ButtonWrap>
          <StyledLink to={`/edit-club/${data?._id}`}>수정</StyledLink>
          <Button onClick={() => setDeletePopup(true)}>삭제</Button>
        </ButtonWrap>
      )}
      {deletePopup && <Popup PopupProps={PopupProps} />}
    </>
  );
};

export default EditButton;
