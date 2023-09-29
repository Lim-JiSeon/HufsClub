import styled from "@emotion/styled";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Image from "../constants/Image";
import search from "../api/search";
import { useState } from "react";
import searchIcon from "../images/searchIcon.png";

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

const SearchBar = styled.div`
  outline: none;
  border-radius: 10px;
  border: solid 2px #526d82;
  width: 500px;
  height: 50px;
  margin: 30px 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 400px;
  font-size: 14px;
  text-align: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

function AreaPage() {
  const area = useParams().field;
  const [keyword, setKeyword] = useState("");

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const result = await search(keyword);
      console.log(result);
    }
  };

  return (
    <AreaContainer>
      <Header></Header>
      <Banner src={getImgURL(area)} />
      <SearchBar>
        <Input
          type="text"
          name="keyword"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleEnter}
        />
        <Icon src={searchIcon} alt="검색 아이콘"/>
      </SearchBar>
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
