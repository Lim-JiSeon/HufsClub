import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Image from "../func/Image";
import HomeImage from "../../images/home.png";
import PeopleImage from "../../images/people.png";
import CalenderImage from "../../images/calender.png";
import JoinImage from "../../images/join.png";
import LinkImage from "../../images/link.png";
import LikeImage from "../../images/like_icon.png";
import putLike from "../../api/putLike";
import getUserInfo from "../../api/getUserInfo";
import deleteLike from "../../api/deleteLike";
import Image1 from "../../images/학술.png";
import Image2 from "../../images/종교.png";
import Image3 from "../../images/스포츠.png";
import Image4 from "../../images/친목.png";
import Image5 from "../../images/문화.png";
import Image6 from "../../images/봉사.png";

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const ImageWrap = styled.div`
  padding-right: 100px;
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
  margin-bottom: 10px;
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
  flex-direction: column;
`;

const ClubIntro = (data) => {
  const [like, setLike] = useState();

  const { logoUrl, field, room, name, topic, recruit } = data.data;

  const handleButton = async () => {
    const isLogin = sessionStorage.getItem("hufs-club_isLogin") ?? false;
    if (isLogin) {
      const check = like.filter((element) => element[0]?.name === name);

      check.length ? await deleteLike(name) : await putLike(name);

      window.location.reload();
    } else {
      alert("로그인을 해주세요.");
    }
  };

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setLike(res.likes);
      })
      .catch((error) => console.log(error));
  }, []);

  const isLink = recruit.applyUrl.includes("http");
  
  return (
    <AllWrap>
      <ContentWrap>
        <ImageWrap>
          <Image
            src={logoUrl === "" ? getImgURL(field) : logoUrl}
            alt=""
            width="250px"
            height="auto"
          />
        </ImageWrap>
        <ClubContent>
          <ClubName>{name}</ClubName>
          <ClubDetail>
            <ClubRoomWrap>
              <img src={HomeImage} width={20} height={20} alt="" />
              <ClubRoom>{room}</ClubRoom>
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
              {!isLink && <ClubRoom>{recruit.applyUrl}</ClubRoom>}
              {isLink && <LinkText href={recruit.applyUrl}>접속하기</LinkText>}
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

export const getImgURL = (area) => {
  if (area === "학술") return Image1;
  if (area === "종교") return Image2;
  if (area === "스포츠") return Image3;
  if (area === "친목") return Image4;
  if (area === "문화") return Image5;
  if (area === "봉사") return Image6;
};
