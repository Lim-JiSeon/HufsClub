import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ClubGrid from "../components/ClubGrid";
import Image1 from "../images/학술.png";
import Image2 from "../images/종교.png";
import Image3 from "../images/스포츠.png";
import Image4 from "../images/친목.png";
import Image5 from "../images/문화.png";
import Image6 from "../images/봉사.png";
import Image from "../components/func/Image";
import getField from "../api/getField";

const AreaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60vw;
  height: 300px;
  margin-top: 20px;
`;

const ButtonWrap = styled.div`
  width: 70vw;
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
  cursor: pointer;
`;

const TitleText = styled.div`
  font-size: 48px;
  color: #526d82;
  font-weight: bold;
`;

function AreaPage() {
  const area = useParams().field;
  const [club, setClub] = useState([]);

  const registerButton =
    sessionStorage.getItem("hufs-isAdmin") || sessionStorage.getItem("hufs-");

  const getClub = async () => {
    console.log("getClub");
    setClub(await getField(area));
    console.log("result");
  };

  useEffect(() => {
    getClub();
  }, []);

  return (
    <AreaContainer>
      <Header></Header>
      <Banner>
        <Image src={getImgURL(area)} width={200} height={200} />
        <TitleText>{area}</TitleText>
        <Image src={getImgURL(area)} width={200} height={200} />
      </Banner>
      <SearchBar setClub={setClub} />
      <ButtonWrap>
        {registerButton && (
          <Link to="/register-club">
            <Button>동아리 등록하기</Button>
          </Link>
        )}
      </ButtonWrap>
      <ClubGrid data={club} />
    </AreaContainer>
  );
}

export default AreaPage;

export const getImgURL = (area) => {
  if (area === "학술") return Image1;
  if (area === "종교") return Image2;
  if (area === "스포츠") return Image3;
  if (area === "친목") return Image4;
  if (area === "문화") return Image5;
  if (area === "봉사") return Image6;
};
