import React from "react";
import styled from "@emotion/styled";
import Image from "../components/func/Image";
import bannerImg from "../images/banner.png";
import { Header } from "../components/main/Header";
import { FieldGrid } from "../components/main/FieldGrid";

const BannerContainer = styled.div`
  width: 100%;
  background-color: #fed313;
`;

const GridWrap = styled.div`
  padding: 36px 0;
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <Image src={bannerImg} alt="banner" height={140} />
      </BannerContainer>
      <GridWrap>
        <FieldGrid />
      </GridWrap>
    </>
  );
};

export default MainPage;
