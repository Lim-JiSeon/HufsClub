import styled from "@emotion/styled";
import React from "react";
import Image from "../func/Image";
import HomeImage from "../../images/home.png";
import PeopleImage from "../../images/people.png";
import CalenderImage from "../../images/calender.png";
import JoinImage from "../../images/join.png";
import LinkImage from "../../images/link.png";
import LikeImage from "../../images/like_icon.png";

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
  width: 100%;
  color: #27374d;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
`;

const ClubName = styled.div`
  width: fit-content;
  font-size: 42px;
  font-weight: bold;
`;

const ClubRoom = styled.div`
  width: fit-content;
  padding-right: 40px;
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;
  margin-left: 10px;
`;

const TopicWrap = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0 10px 0;
`;

const TopicText = styled.div`
  width: fit-content;
  font-weight: bold;
  font-size: 14px;
  padding-right: 20px;
`;

const ClubRoomWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AllWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LikeButton = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  margin-top: 15px;
  cursor: pointer;
`;

const LinkText = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #27374d;
  font-weight: bold;
  border-bottom: 2px solid #27374d;
  margin-left: 10px;
`;

const ClubDetail = styled.div`
  display: flex;
`;

const ClubIntro = (data) => {
  const { logoUrl, name, topic, recruit } = data.data;

  const handleButton = () => {
    alert("해당 동아리를 좋아요 했습니다.");
  };

  return (
    <AllWrap>
      <ContentWrap>
        <ImageWrap>
          <Image src={logoUrl} alt="" width="250px" height="auto" />
        </ImageWrap>
        <ClubContent>
          <ClubName>{name}</ClubName>
          <ClubDetail>
            <ClubRoomWrap>
              <img src={HomeImage} width={20} height={20} alt="" />
              <ClubRoom>{tempData.room}</ClubRoom>
            </ClubRoomWrap>
            <ClubRoomWrap>
              <img src={PeopleImage} width={20} height={20} alt="" />
              <ClubRoom>{recruit.num}</ClubRoom>
            </ClubRoomWrap>
            <ClubRoomWrap>
              <img src={CalenderImage} width={20} height={20} alt="" />
              <ClubRoom>{recruit.period}</ClubRoom>
            </ClubRoomWrap>
          </ClubDetail>
          <ClubDetail>
            <ClubRoomWrap>
              <img src={JoinImage} width={20} height={20} alt="" />
              <ClubRoom>{recruit.way}</ClubRoom>
            </ClubRoomWrap>
            <ClubRoomWrap>
              <img src={LinkImage} width={20} height={20} alt="" />
              <LinkText href={recruit.applyUrl}>접속하기</LinkText>
            </ClubRoomWrap>
          </ClubDetail>
          <TopicWrap>
            {topic.map((title) => (
              <TopicText key={title}>{title}</TopicText>
            ))}
          </TopicWrap>
        </ClubContent>
      </ContentWrap>
      <LikeButton onClick={handleButton}>
        <Image src={LikeImage} width={30} height={30} />
      </LikeButton>
    </AllWrap>
  );
};

export default ClubIntro;

export const tempData = {
  room: "미정",
};
