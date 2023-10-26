import styled from "@emotion/styled";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Image from "../constants/Image";
import SearchBar from "../components/SearchBar";

const AreaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.img`
  width: 90vw;
  height: 300px;
  border-radius: 10px;
  border: none;
`;

function AreaPage() {
  const area = useParams().field;

  return (
    <AreaContainer>
      <Header></Header>
      <Banner src={getImgURL(area)} />
      <SearchBar />
    </AreaContainer>
  );
}

export default AreaPage;

export const getImgURL = (area) => {
  if (area === "학술") return Image.ACADEMIC;
  if (area === "종교") return Image.RELIGION;
  if (area === "스포츠") return Image.SPORTS;
  if (area === "친목") return Image.AMITY;
  if (area === "문화") return Image.CULTURE;
  if (area === "봉사") return Image.VOLUNTEER;
};
