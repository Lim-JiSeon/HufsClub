import styled from "@emotion/styled";
import Image from "../components/func/Image";
import logoImg from "../images/logo.png";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import likeImage from "../images/like.png";

const Header = () => {
  const isLogin = sessionStorage.getItem("hufs-club_isLogin") ?? "";

  const Header = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  `;

  const AvatarWrap = styled.div`
    width: 70vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  const HomeButton = styled.div`
    width: 100px;
    height: 100px;
  `;

  const SignButtonContainer = styled.div`
    display: flex;
    width: 70vw;
    justify-content: flex-end;
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

  return (
    <Header>
      <HomeButton>
        <Link to="/">
          <Image src={logoImg} alt="home" width={100} height={100} />
        </Link>
      </HomeButton>
      {isLogin ? (
        <AvatarWrap>
          <Link to="/mypage">
            <Avatar />
          </Link>
          <Link to="/register-club" style={{ paddingLeft: "20px" }}>
            <Image src={likeImage} width={55} height={55} />
          </Link>
        </AvatarWrap>
      ) : (
        <SignButtonContainer>
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
