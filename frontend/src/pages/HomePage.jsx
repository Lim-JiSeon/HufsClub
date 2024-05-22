import React from "react";
import styled from "@emotion/styled";
import Image from "../components/func/Image";
import bannerImg from "../images/banner.png";
import { Header } from "../components/main/Header";

const BannerContainer = styled.div`
  width: 100%;
  background-color: #fed313;
`;

export const HomePage = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <Image src={bannerImg} alt="banner" height={140} />
      </BannerContainer>
      
    </>
  );
};
