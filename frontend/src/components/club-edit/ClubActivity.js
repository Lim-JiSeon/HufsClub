import styled from "@emotion/styled";
import React from "react";
import Image from "../func/Image";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleWrap = styled.div`
  color: #27374d;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  padding: 40px 0;
`;

const ActivityWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 60px;
  color: #27374d;
`;

const ActivityDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #27374d;
`;

const ClubActivity = (data) => {
  const { activity } = data.data;

  return (
    <ContentWrap>
      <TitleWrap>동아리 활동 소개</TitleWrap>
      <ActivityWrap>
        {activity.map(({ imageUrl, text }, index) => (
          <ActivityDiv key={index}>
            {imageUrl && (
              <div style={{ paddingRight: "40px" }}>
                <Image src={imageUrl} width="30vw" height="27vh" />
              </div>
            )}
            {text && <div>{text}</div>}
          </ActivityDiv>
        ))}
      </ActivityWrap>
    </ContentWrap>
  );
};

export default ClubActivity;
