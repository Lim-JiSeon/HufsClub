import styled from "@emotion/styled";
import React from "react";
import Image from "../func/Image";
import Image1 from "../../images/학술.png";
import Image2 from "../../images/종교.png";
import Image3 from "../../images/스포츠.png";
import Image4 from "../../images/친목.png";
import Image5 from "../../images/문화.png";
import Image6 from "../../images/봉사.png";

const Main = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: white;
`;

const ImageWrap = styled.div`
  padding: 16px;
`;

const TopicText = styled.div`
  color: #fed313;
  font-weight: bold;
  font-size: 12px;
  word-break: break-all;
  text-align: center;
  padding: 16px;
`;

const ClubLogo = ({ data }) => {
  const { logoUrl, field, topic } = data.data;

  const topicString = topic.join(" ");

  return (
    <>
      <Main>
        <ImageWrap>
          <Image
            src={logoUrl === "" ? getImgURL(field) : logoUrl}
            alt=""
            width="250px"
            height="auto"
          />
        </ImageWrap>

        <TopicText>{topicString}</TopicText>
      </Main>
    </>
  );
};

export default ClubLogo;

export const getImgURL = (area) => {
  if (area === "학술") return Image1;
  if (area === "종교") return Image2;
  if (area === "스포츠") return Image3;
  if (area === "친목") return Image4;
  if (area === "문화") return Image5;
  if (area === "봉사") return Image6;
};
