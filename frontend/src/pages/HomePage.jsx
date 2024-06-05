import React from "react";
import styled from "@emotion/styled";
import Image from "../components/func/Image";
import bannerImg from "../images/banner.png";
import { Header } from "../components/home/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/common/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const BannerContainer = styled.div`
  width: 100%;
  background-color: #fed313;
`;

const FieldGridWrap = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FieldGrid = styled.div`
  margin: 20px 0;
`;

const FieldTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 4px;
`;

const Line = styled.hr`
  margin: 0;
`;

const FieldButton = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: left;
  padding: 10px 0;
  border-bottom: 1px solid #a9a9a9;
`;

const ButtonText = styled.div`
  color: black;
  font-size: 12px;
  padding: 0 10px;
`;

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <BannerContainer>
          <Image src={bannerImg} alt="banner" height={140} />
        </BannerContainer>

        <FieldGridWrap>
          <FieldGrid>
            <FieldTitle>동아리 연합회 소속</FieldTitle>
            <Line />
            <div>
              <FieldButton to="/동아리연합회소속/중앙 동아리">
                <FontAwesomeIcon icon={faChessPawn} color="#000000" />
                <ButtonText>중앙 동아리</ButtonText>
              </FieldButton>
              <FieldButton to="/동아리연합회소속/준 동아리">
                <FontAwesomeIcon icon={faChessPawn} color="#000000" />
                <ButtonText>준 동아리</ButtonText>
              </FieldButton>
            </div>
          </FieldGrid>

          <FieldGrid>
            <FieldTitle>단과대 소속</FieldTitle>
            <Line />
            <div>
              <FieldButton to="/학과소속/학회">
                <FontAwesomeIcon icon={faChessPawn} color="#000000" />
                <ButtonText>학회</ButtonText>
              </FieldButton>
              <FieldButton to="/학과소속/학과 동아리">
                <FontAwesomeIcon icon={faChessPawn} color="#000000" />
                <ButtonText>학과 동아리</ButtonText>
              </FieldButton>
            </div>
          </FieldGrid>
        </FieldGridWrap>

        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
