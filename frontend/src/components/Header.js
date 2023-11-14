import styled from "@emotion/styled";
import Image from "../components/func/Image";
import logoImg from "../images/logo.png";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const Header = () => {
  const isLogin = sessionStorage.getItem("hufs-club_isLogin") ?? "";

  const Header = styled.div`
    display: flex;
    align-items: center;
  `;

  const AvatarWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const HomeButton = styled.button`
    width: 70vw;
    height: 120px;
    border: none;
    background-color: transparent;
    padding-left: ${({ isLogin }) => (isLogin ? "60px" : "310px")};
    cursor: pointer;
  `;

  const SignButtonContainer = styled.div`
    display: flex;
    padding-right: ${({ isLogin }) => (isLogin ? undefined : "100px")};
  `;

  const SignButton = styled.button`
    width: 100px;
    border: none;
    background-color: transparent;
    color: #526d82;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #9fb5c7;
    }
  `;

  const logout = () => {
    sessionStorage.setItem("hufs-club_isLogin", "");
    window.location.reload();
  };

  return (
    <Header>
      <HomeButton isLogin={isLogin}>
        <Link to="/">
          <Image src={logoImg} alt="home" />
        </Link>
      </HomeButton>
      {isLogin ? (
        <AvatarWrap>
          <Link to="/mypage">
            <Avatar />
          </Link>
          <Link to="/">
            <SignButton onClick={logout}>로그아웃</SignButton>
          </Link>
        </AvatarWrap>
      ) : (
        <SignButtonContainer isLogin={isLogin}>
          <Link to="/login">
            <SignButton>로그인</SignButton>
          </Link>
          <Link to="/signup">
            <SignButton>회원가입</SignButton>
          </Link>
        </SignButtonContainer>
      )}
    </Header>
  );
};

export default Header;
