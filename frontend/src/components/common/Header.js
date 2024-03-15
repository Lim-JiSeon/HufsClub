import styled from "@emotion/styled";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const IconButton = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const TitleText = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: black;
  padding: 15px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = ({ text }) => {
  const _id = sessionStorage.getItem("hufs-club_id");
  const likePath = _id ? `/like/${_id}` : "/login";
  const profilePath = _id ? "/mypage" : "/login";

  const navigation = useNavigate();

  return (
    <HeaderContainer>
      <ButtonContainer>
        <IconButton onClick={() => navigation(-1)}>
          <FontAwesomeIcon icon={faAngleLeft} color="#FED313" />
        </IconButton>
        <div style={{ padding: "0 20px" }}></div>
      </ButtonContainer>

      <TitleText>{text}</TitleText>
      <ButtonContainer>
        <Link to={likePath}>
          <IconButton>
            <FontAwesomeIcon icon={faHeart} color="#FED313" />
          </IconButton>
        </Link>
        <Link to={profilePath}>
          <IconButton>
            <FontAwesomeIcon icon={faUser} color="#FED313" />
          </IconButton>
        </Link>
      </ButtonContainer>
    </HeaderContainer>
  );
};
