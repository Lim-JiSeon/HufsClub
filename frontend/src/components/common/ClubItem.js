import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Image1 from "../../images/학술.png";
import Image2 from "../../images/종교.png";
import Image3 from "../../images/스포츠.png";
import Image4 from "../../images/친목.png";
import Image5 from "../../images/문화.png";
import Image6 from "../../images/봉사.png";

const StyledLink = styled(Link)`
  width: 100%;
  max-height: fit-content;
  background-color: white;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  color: #27374d;
  margin-bottom: 16px;
  
  &:hover {
    border: 1px solid #fed313;
  }
`;

const CardItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
`;

const LogoImg = styled.img`
  width: 60px;
  height: 54px;
  object-fit: scale-down;
  object-position: left top;
  padding-right: 10px;
`;

const ClubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ClubTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const TopicTxt = styled.div`
  width: 100%;
  padding: 0 5px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ClubItem = (data) => {
  const field = useLocation().pathname.split("/")[2];

  const logo =
    data.data.logoUrl === "" ? getImgURL(data.data.field) : data.data.logoUrl;

  const topicString = data.data.topic.join(" ");

  return (
    <StyledLink to={`/area/${field}/${data.data._id}`}>
      <CardItemWrap key={data.data._id}>
        <LogoImg src={logo} alt="이미지" />

        <ClubContent>
          <ClubTitle>{data.data.name}</ClubTitle>
          <TopicTxt>{topicString}</TopicTxt>
        </ClubContent>
      </CardItemWrap>
    </StyledLink>
  );
};

export default ClubItem;

export const getImgURL = (area) => {
  if (area === "학술") return Image1;
  if (area === "종교") return Image2;
  if (area === "스포츠") return Image3;
  if (area === "친목") return Image4;
  if (area === "문화") return Image5;
  if (area === "봉사") return Image6;
};
