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
  color: #27374d;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  padding: 40px 0 20px 0;
`;

const MemberWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextName = styled.div`
  font-size: 18px;
  color: #27374d;
  font-weight: bold;
  padding: 5px 0;
`;

const TextRole = styled.div`
  font-size: 16px;
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
                <Image src={profileImage} />
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
