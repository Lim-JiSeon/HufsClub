import styled from "@emotion/styled";
import React from "react";

const ContentWrap = styled.div`
  border-radius: 20px;
  border: 5px solid #526d82;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ClubIntro = (data) => {
  const { logoUrl, name, recruit, topic } = data.data;

  return (
    <ContentWrap>
      <img src={logoUrl} alt="" />
      <div>
        <div>{name}</div>
        <div>
          <div>{recruit.period}</div>
          <div>{tempData.room}</div>
        </div>
        <div>{tempData.intro}</div>
        <div>{topic}</div>
      </div>
    </ContentWrap>
  );
};

export default ClubIntro;

export const tempData = {
  intro:
    "GNUVill은 한국외국어대학교의 자유소프트웨어 동아리입니다. GNU란 GNU project를 통하여 개발한 유닉스 계열 컴퓨터 운영 체제를 뜻하며, 저희 GNUVill은 대표적인 자유소프트웨어인 리눅스에 대한 공부와 현재 많이 사용되고 있는 프로그래밍 언어인 C언어와 Java를 기반으로 여러 연구 활동을 하고 있습니다. 2001년부터 시작하여 자유소프트웨어 연구 및 프로젝트 진행을 주 활동으로 하고 있습니다. 주 1회 스터디를 하며 서로 아는 것을 공유하여 한 주간 습득한 지식을 서로 나눕니다. 더 많은 정보를 더 많은 사람들과 나누기 위해 2006년부터는 대학연합리눅스 유저 그룹 활동(ULUG)을 하고 있습니다.",
  room: "학생회관 407호",
};
