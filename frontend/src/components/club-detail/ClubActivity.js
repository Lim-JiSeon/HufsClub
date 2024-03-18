import styled from "@emotion/styled";
import React from "react";
import Image from "../func/Image";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

const TitleWrap = styled.div`
  width: 100%;
  color: black;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  padding: 0 0 12px 10px;
`;

const ActivityWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  color: black;
`;

const ActivityImageWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: scroll;
  margin-bottom: 30px;
  border: 1px solid #fed313;
`;

const ActivityDiv = styled.div`
  display: flex;
  align-items: center;
  color: black;
  word-break: break-all;
`;

const ActivityText = styled.div`
  white-space: pre-wrap;
`;

const ClubActivity = (data) => {
  const { activity } = data.data;

  return (
    <ContentWrap>
      <TitleWrap>동아리 활동 소개</TitleWrap>
      <ActivityImageWrap>
        {activity.map(
          (value) =>
            value?.imageUrl &&
            value.imageUrl !== "null" && (
              <Image src={value.imageUrl} width={600} height={440} />
            )
        )}
      </ActivityImageWrap>
      <ActivityWrap>
        {activity.map(
          (value, index) =>
            value && (
              <ActivityDiv key={index}>
                <ActivityText>{value.text}</ActivityText>
              </ActivityDiv>
            )
        )}
      </ActivityWrap>
    </ContentWrap>
  );
};

export default ClubActivity;
