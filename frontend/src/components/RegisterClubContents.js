import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import Input from "../components/func/Input";
import useForm from "../hooks/useForm";
import imageUploader from "../images/image-upload.png";
import SubmitButton from "../components/SubmitButton";
import postClub from "../api/postClub";
import { useNavigate } from "react-router-dom";

const ContentWrap = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ClubIntroContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrap = styled.div`
  padding-right: 40px;
`;

const ClubContent2Col = styled.div`
  color: #27374d;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ClubContentWrap = styled.div`
  width: 100%;
  color: #27374d;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
`;

const TitleWrap = styled.div`
  color: #27374d;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  padding: 40px 0;
`;

const ClubJoinContent = styled.div`
  width: 100%;
  color: #27374d;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const TextareaWrap = styled.textarea`
  width: 100%;
  min-width: 450px;
  height: 200px;
  color: #27374d;
`;

const ClubActivity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ActivityWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`;

const ClubJoin = styled.div`
  width: 100%;
`;

const MemberWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 60px;
`;

const MemberContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterClubContents = () => {
  const [mainImg, setMainImg] = useState(imageUploader);
  const navigator = useNavigate();

  const [activity1Img, setActivity1Img] = useState(imageUploader);
  const [activity2Img, setActivity2Img] = useState(imageUploader);
  const [activity3Img, setActivity3Img] = useState(imageUploader);
  const [activity4Img, setActivity4Img] = useState(imageUploader);

  const mainImgInput = useRef(null);

  const activity1 = useRef(null);
  const activity2 = useRef(null);
  const activity3 = useRef(null);
  const activity4 = useRef(null);

  const uploadHandler = (e, name) => {
    const file = e.target.files[0];
    if (name === "mainImg") {
      setMainImg(file.toString());
    } else if (name === "activity1") {
      setActivity1Img(file.toString());
    } else if (name === "activity2") {
      setActivity2Img(file.toString());
    } else if (name === "activity3") {
      setActivity3Img(file.toString());
    } else {
      setActivity4Img(file.toString());
    }
    previewImage(file, name);
  };

  const previewImage = (file, name) => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2 && typeof reader.result === "string") {
        if (name === "mainImg") {
          setMainImg(reader.result);
        } else if (name === "activity1") {
          setActivity1Img(reader.result);
        } else if (name === "activity2") {
          setActivity2Img(reader.result);
        } else if (name === "activity3") {
          setActivity3Img(reader.result);
        } else {
          setActivity4Img(reader.result);
        }
      }
    };
  };

  const { values, handleChange } = useForm({
    initialValues: {
      name: "",
      field: "",
      room: "",
      intro: "",
      topic: "",
      executive1Name: "",
      executive1Email: "",
      executive1Role: "",
      executive2Name: "",
      executive2Email: "",
      executive2Role: "",
      executive3Name: "",
      executive3Email: "",
      executive3Role: "",
      executive4Name: "",
      executive4Email: "",
      executive4Role: "",
      activity1Img,
      activity2Img,
      activity3Img,
      activity4Img,
      activity1Text: "",
      activity2Text: "",
      activity3Text: "",
      activity4Text: "",
      period: "상시 모집",
      way: "동아리 회장을 통해 문의해주세요.",
      applyUrl: "",
      num: "변동",
      logoUrl: mainImg,
    },
  });

  return (
    <>
      <ContentWrap>
        <ClubIntroContent>
          <ImageWrap style={{ paddingTop: "40px" }}>
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg, image/png, image/jpeg"
              name="img_uploader"
              onChange={(e) => uploadHandler(e, "mainImg")}
              ref={mainImgInput}
            />
            <img
              alt=""
              src={mainImg}
              width={300}
              height={200}
              style={{ cursor: "pointer" }}
              onClick={() => mainImgInput.current?.click()}
            />
          </ImageWrap>
          <ClubContentWrap>
            <ClubJoinContent>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                label="동아리 명"
              />
              <Input
                type="text"
                name="room"
                onChange={handleChange}
                label="동아리 방"
              />
              <Input
                type="text"
                name="field"
                onChange={handleChange}
                label="동아리 분야"
              />
            </ClubJoinContent>
            <Input
              type="text"
              name="intro"
              onChange={handleChange}
              label="동아리 소개"
            />
            <Input
              type="text"
              name="topic"
              onChange={handleChange}
              label="동아리 주제"
            />
          </ClubContentWrap>
        </ClubIntroContent>
        <div style={{ width: "100%" }}>
          <TitleWrap>동아리 운영진 소개</TitleWrap>
          <MemberWrap>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive1Name"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="이메일"
                name="executive1Email"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="역할"
                name="executive1Role"
                onChange={handleChange}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive2Name"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="이메일"
                name="executive2Email"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="역할"
                name="executive2Role"
                onChange={handleChange}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive3Name"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="이메일"
                name="executive3Email"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="역할"
                name="executive3Role"
                onChange={handleChange}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive4Name"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="이메일"
                name="executive4Email"
                onChange={handleChange}
              />
              <Input
                type="text"
                label="역할"
                name="executive4Role"
                onChange={handleChange}
              />
            </MemberContainer>
          </MemberWrap>
        </div>
        <div style={{ width: "100%" }}>
          <TitleWrap>동아리 활동 소개</TitleWrap>
          <ActivityWrap>
            <ClubActivity>
              <ImageWrap>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg, image/png, image/jpeg"
                  name="img_uploader"
                  onChange={(e) => uploadHandler(e, "activity1")}
                  ref={activity1}
                />
                <img
                  alt=""
                  src={activity1Img}
                  width={300}
                  height={200}
                  style={{ cursor: "pointer" }}
                  onClick={() => activity1.current?.click()}
                />
              </ImageWrap>
              <TextareaWrap
                type="text"
                onChange={handleChange}
                name="activity1Text"
              />
            </ClubActivity>
            <ClubActivity>
              <ImageWrap>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg, image/png, image/jpeg"
                  name="img_uploader"
                  onChange={(e) => uploadHandler(e, "activity2")}
                  ref={activity2}
                />
                <img
                  alt=""
                  src={activity2Img}
                  width={300}
                  height={200}
                  style={{ cursor: "pointer" }}
                  onClick={() => activity2.current?.click()}
                />
              </ImageWrap>
              <TextareaWrap
                type="text"
                onChange={handleChange}
                name="activity2Text"
              />
            </ClubActivity>
            <ClubActivity>
              <ImageWrap>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg, image/png, image/jpeg"
                  name="img_uploader"
                  onChange={(e) => uploadHandler(e, "activity3")}
                  ref={activity3}
                />
                <img
                  alt=""
                  src={activity3Img}
                  width={300}
                  height={200}
                  style={{ cursor: "pointer" }}
                  onClick={() => activity3.current?.click()}
                />
              </ImageWrap>
              <TextareaWrap
                type="text"
                onChange={handleChange}
                name="activity3Text"
              />
            </ClubActivity>
            <ClubActivity>
              <ImageWrap>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg, image/png, image/jpeg"
                  name="img_uploader"
                  onChange={(e) => uploadHandler(e, "activity4")}
                  ref={activity4}
                />
                <img
                  alt=""
                  src={activity4Img}
                  width={300}
                  height={200}
                  style={{ cursor: "pointer" }}
                  onClick={() => activity4.current?.click()}
                />
              </ImageWrap>
              <TextareaWrap
                type="text"
                onChange={handleChange}
                name="activity4Text"
              />
            </ClubActivity>
          </ActivityWrap>
        </div>
        <ClubJoin>
          <TitleWrap>동아리 지원 방법</TitleWrap>
          <MemberWrap>
            <Input
              type="text"
              name="num"
              onChange={handleChange}
              label="모집 인원"
            />
            <Input
              type="text"
              name="period"
              onChange={handleChange}
              label="모집 시기"
            />
            <Input
              type="text"
              name="way"
              onChange={handleChange}
              label="모집 방법"
            />
            <Input
              type="text"
              name="applyUrl"
              onChange={handleChange}
              label="지원서 작성"
            />
          </MemberWrap>
        </ClubJoin>
        <SubmitButton
          onClick={() => {
            postClub(values).then(() => navigator("/"));
          }}>
          동아리 등록하기
        </SubmitButton>
      </ContentWrap>
    </>
  );
};

export default RegisterClubContents;
