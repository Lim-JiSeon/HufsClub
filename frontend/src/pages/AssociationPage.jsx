import React from "react";
import styled from "@emotion/styled";
import Image from "../components/func/Image";
import bannerImg from "../images/banner.png";
import { Header } from "../components/common/Header";
import { FieldGrid } from "../components/association/FieldGrid";
import { useLocation } from "react-router-dom";
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

const GridWrap = styled.div`
  padding: 36px 20px;
  flex-grow: 1;
`;

const AssociationPage = () => {
  const text = decodeURI(useLocation().pathname.split("/")[2]);

  return (
    <>
      <Container>
        <Header text={text} />
        <BannerContainer>
          <Image src={bannerImg} alt="banner" height={140} />
        </BannerContainer>
        <GridWrap>
          <FieldGrid />
        </GridWrap>
        <Footer />
      </Container>
    </>
  );
};

export default AssociationPage;
