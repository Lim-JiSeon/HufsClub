import styled from "@emotion/styled";
import Image from "../components/func/Image"
import logoImg from "../images/logo.png";

const Header = () => {
  const Header = styled.div`
    display: block;
  `;

  const HomeButton = styled.button`
    width: 120px;
    height: 120px;
    border: none;
    background-color: transparent;
  `;

  return (
    <Header>
      <HomeButton onClick={() => console.log("HOME")}>
        <Image src={logoImg} alt="home"></Image>
      </HomeButton>
    </Header>
  );
};

export default Header;
