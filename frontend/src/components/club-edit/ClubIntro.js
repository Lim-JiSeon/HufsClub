import styled from "@emotion/styled";
import React from "react";
import Image from "../func/Image";

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const ImageWrap = styled.div`
  padding-right: 40px;
`;

const ClubContent = styled.div`
  color: #27374d;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  overflow: hidden;
`;

const ClubName = styled.div`
  width: fit-content;
  font-size: 26px;
  font-weight: bold;
`;

const ClubRoom = styled.div`
  width: fit-content;
  padding-right: 40px;
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;
`;

const TopicWrap = styled.div`
  width: fit-content;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TopicText = styled.div`
  width: fit-content;
  font-weight: bold;
  font-size: 14px;
  padding-right: 20px;
`;

const ClubIntro = (data) => {
  const { logoUrl, name, topic } = data.data;

  return (
    <ContentWrap>
      <ImageWrap>
        <Image src={logoUrl} alt="" width="250px" height="auto" />
      </ImageWrap>
      <ClubContent>
        <ClubName>{name}</ClubName>
        <ClubRoom>{tempData.room}</ClubRoom>
        <div>{tempData.intro}</div>
        <TopicWrap>
          {topic.map((title) => (
            <TopicText key={title}>{title}</TopicText>
          ))}
        </TopicWrap>
      </ClubContent>
    </ContentWrap>
  );
};

export default ClubIntro;

export const tempData = {
  intro:
    "GNUVill은 한국외국어대학교의 자유소프트웨어 동아리입니다. GNU란 GNU project를 통하여 개발한 유닉스 계열 컴퓨터 운영 체제를 뜻하며, 저희 GNUVill은 대표적인 자유소프트웨어인 리눅스에 대한 공부와 현재 많이 사용되고 있는 프로그래밍 언어인 C언어와 Java를 기반으로 여러 연구 활동을 하고 있습니다. 2001년부터 시작하여 자유소프트웨어 연구 및 프로젝트 진행을 주 활동으로 하고 있습니다. 주 1회 스터디를 하며 서로 아는 것을 공유하여 한 주간 습득한 지식을 서로 나눕니다. 더 많은 정보를 더 많은 사람들과 나누기 위해 2006년부터는 대학연합리눅스 유저 그룹 활동(ULUG)을 하고 있습니다.",
  room: "학생회관 407호",
};
