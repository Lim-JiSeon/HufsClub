import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Image from "../components/func/Image";
import areaImage1 from "../images/학술.png";
import areaImage2 from "../images/종교.png";
import areaImage3 from "../images/스포츠.png";
import areaImage4 from "../images/친목.png";
import areaImage5 from "../images/문화.png";
import areaImage6 from "../images/봉사.png";

function MainPage() {
  const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0 60px 0;
  `;

  const Banner = styled.div`
    display: block;
    font-size: 140px;
    text-align: center;
    color: #526d82;
  `;

  const Line = styled.hr`
    width: 700px;
    border: 0px;
    border-top: 5px solid #526d82;
  `;

  const FieldButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 180px;
    border-radius: 5px;
    border: solid 1.5px #526d82;
    background-color: white;

    &:hover {
      width: 125px;
      height: 190px;
    }
  `;

  const ButtonText = styled.div`
    font-size: 18px;
    padding: 10px 0;
    color: #526d82;
    font-weight: bold;
    text-align: center;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    width: 70vw;
    justify-content: space-around;
    align-items: center;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <MainContainer>
      <Header></Header>
      <TitleContainer>
        <Banner>HUFS Club</Banner>
        <Line />
      </TitleContainer>

      <ButtonWrapper>
        <StyledLink
          to={{
            pathname: `/area/학술`,
          }}>
          <FieldButton>
            <Image src={areaImage1} width={100} height={100} />
            <ButtonText>학술</ButtonText>
          </FieldButton>
        </StyledLink>
        <StyledLink
          to={{
            pathname: "/area/종교",
          }}>
          <FieldButton>
            <Image src={areaImage2} width={100} height={100} />
            <ButtonText>종교</ButtonText>
          </FieldButton>
        </StyledLink>
        <StyledLink
          to={{
            pathname: "/area/스포츠",
          }}>
          <FieldButton>
            <Image src={areaImage3} width={100} height={100} />
            <ButtonText>스포츠</ButtonText>
          </FieldButton>
        </StyledLink>
        <StyledLink
          to={{
            pathname: "/area/친목",
          }}>
          <FieldButton>
            <Image src={areaImage4} width={100} height={100} />
            <ButtonText>친목</ButtonText>
          </FieldButton>
        </StyledLink>
        <StyledLink
          to={{
            pathname: "/area/문화",
          }}>
          <FieldButton>
            <Image src={areaImage5} width={100} height={100} />
            <ButtonText>문화</ButtonText>
          </FieldButton>
        </StyledLink>
        <StyledLink
          to={{
            pathname: "/area/봉사",
          }}>
          <FieldButton>
            <Image src={areaImage6} width={100} height={100} />
            <ButtonText>봉사</ButtonText>
          </FieldButton>
        </StyledLink>
      </ButtonWrapper>
    </MainContainer>
  );
}

export default MainPage;
