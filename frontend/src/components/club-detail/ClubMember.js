import styled from "@emotion/styled";
import React from "react";
import Image from "../func/Image";
import profileImage from "../../images/profile.png";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleWrap = styled.div`
  width: 100%;
  color: black;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  padding: 0 0 12px 10px;
`;

const MemberWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: scroll;
`;

const MemberDiv = styled.div`
  min-width: 160px;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  padding: 6px;
  margin: 10px 16px;
`;

const TextName = styled.div`
  font-size: 12px;
  color: #27374d;
  font-weight: bold;
  padding: 5px 0;
`;

const TextRole = styled.div`
  font-size: 12px;
  color: #27374d;
  font-weight: bold;
  padding: 5px 0;
`;

export const ClubMember = (data) => {
  const { executive } = data.data;

  return (
    <ContentWrap>
      <TitleWrap>동아리 운영진 소개</TitleWrap>
      <MemberWrap>
        {executive.map(
          (member) =>
            member && (
              <MemberDiv key={member._id}>
                <Image src={profileImage} width={50} height={50} />
                <TextName>{member.name}</TextName>
                <TextRole>{member.email === "" ? "X" : member.email}</TextRole>
                <TextRole>
                  {member.role === "" ? "운영자" : member.role}
                </TextRole>
              </MemberDiv>
            )
        )}
      </MemberWrap>
    </ContentWrap>
  );
};
