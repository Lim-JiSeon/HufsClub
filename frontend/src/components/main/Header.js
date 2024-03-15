import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../func/Image";
import logoImg from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled.div`
  padding: 10px;
`;

const HomeButton = styled.div`
  padding: 5px 10px;
`;

export const Header = () => {
  const _id = sessionStorage.getItem("hufs-club_id");
  const likePath = _id ? `/like/${_id}` : "/login";
  const profilePath = _id ? "/mypage" : "/login";

  return (
    <HeaderContainer>
      <Link to={likePath}>
        <IconButton>
          <FontAwesomeIcon icon={faHeart} color="#FED313" />
        </IconButton>
      </Link>
      <Link to="/">
        <HomeButton>
          <Image src={logoImg} alt="home" width={42} height={42} />
        </HomeButton>
      </Link>
      <Link to={profilePath}>
        <IconButton>
          <FontAwesomeIcon icon={faUser} color="#FED313" />
        </IconButton>
      </Link>
    </HeaderContainer>
  );
};
