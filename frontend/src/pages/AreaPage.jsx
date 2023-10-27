import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Image from "../constants/Image";
import SearchBar from "../components/SearchBar";
import ClubGrid from "../components/ClubGrid";

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

const ButtonWrap = styled.div`
  width: 90vw;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 120px;
  height: 30px;
  background-color: #536582;
  color: #ffffff;
  border: none;
  border-radius: 5px;
`;

function AreaPage() {
  const area = useParams().field;
  const [club, setClub] = useState([]);

  return (
    <AreaContainer>
      <Header></Header>
      <Banner src={getImgURL(area)} />
      <SearchBar setClub={setClub} />
      <ButtonWrap>
        <Link to="/">
          <Button>동아리 등록하기</Button>
        </Link>
      </ButtonWrap>
      <ClubGrid data={club} />
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
