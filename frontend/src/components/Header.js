import styled from "@emotion/styled";
import Image from "../components/func/Image";
import logoImg from "../images/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  const isLogin = sessionStorage.getItem("isLogin") ?? "";

  const Header = styled.div`
    display: flex;
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
  `;

  return (
    <Header>
      <HomeButton isLogin={isLogin}>
        <Link to="/"><Image src={logoImg} alt="home" /></Link>
      </HomeButton>
      {isLogin ? (
        <Image
          src="https://e7.pngegg.com/pngimages/1000/665/png-clipart-computer-icons-profile-s-free-angle-sphere.png"
          alt="프로필"
          width={50}
          height={50}
          borderRadius={50}
        />
      ) : (
        <SignButtonContainer isLogin={isLogin}>
          <SignButton>로그인</SignButton>
          <SignButton>회원가입</SignButton>
        </SignButtonContainer>
      )}
    </Header>
  );
};

export default Header;
