import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Input from "../components/func/Input";
import postClub from "../api/postClub";
import ImageUploader from "../images/image-upload.png";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";

const ClubIntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  padding: 38px 20px 90px 20px;
`;

const ImageWrap = styled.div`
  width: 100%;
  min-width: 300px;
`;

const ClubContentWrap = styled.div`
  width: 100%;
  color: #27374d;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const TitleWrap = styled.div`
  width: 100%;
  color: black;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  padding: 60px 0 12px 0;
`;

const ClubJoinContent = styled.div`
  width: 100%;
  color: black;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const TextareaWrap = styled.textarea`
  width: 100%;
  height: 200px;
  color: black;
  padding: 0;
`;

const ClubActivity = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  overflow-x: scroll;
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
  overflow-x: scroll;
  column-gap: 20px;
`;

const MemberContainer = styled.div`
  min-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgUploader = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  background-color: #fed313;
  color: black;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  font-size: 12px;
  margin-top: 12px;

  cursor: pointer;

  &:hover {
    background-color: #ffefa9;
  }

  &:active {
    background-color: #ffefa9;
  }

  &:disabled {
    background-color: #ffefa9;
  }
`;

const RedDiv = styled.div`
  font-size: 12px;
  color: red;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 480px;
  padding: 16px 0;
  position: fixed;
  bottom: 0;
  border: none;
  background-color: #fed313;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ffefa9;
  }
`;

const RegisterClubContents = (data) => {
  const navigator = useNavigate();

  const area = useParams().field;
  const { isPresident, username, email } = data.data;

  const { handleChange, handleFile, values } = useForm({
    initialValues: {
      activityImg1: null,
      activityImg2: null,
      activityImg3: null,
      activityImg4: null,
      activityText1: "",
      activityText2: "",
      activityText3: "",
      activityText4: "",
      applyUrl: "추후 공지",
      executive1Email: email,
      executive1Name: username,
      executive1Role: "운영진",
      executive2Email: "",
      executive2Name: "",
      executive2Role: "",
      executive3Email: "",
      executive3Name: "",
      executive3Role: "",
      executive4Email: "",
      executive4Name: "",
      executive4Role: "",
      field: area,
      logoUrl: null,
      name: isPresident,
      num: "미정",
      period: "미정",
      room: "미정",
      topic: "",
      way: "동아리 운영진에게 문의해주세요.",
    },
  });

  const user = {
    name: username,
    email,
    role: "운영진",
  };

  const [logoUrl, setLogoUrl] = useState(null);
  const [activityImg1, setActivityImg1] = useState(null);
  const [activityImg2, setActivityImg2] = useState(null);
  const [activityImg3, setActivityImg3] = useState(null);
  const [activityImg4, setActivityImg4] = useState(null);

  const [logoPrev, setLogoPrev] = useState(ImageUploader);
  const [act1ImgPrev, setAct1ImgPrev] = useState(ImageUploader);
  const [act2ImgPrev, setAct2ImgPrev] = useState(ImageUploader);
  const [act3ImgPrev, setAct3ImgPrev] = useState(ImageUploader);
  const [act4ImgPrev, setAct4ImgPrev] = useState(ImageUploader);

  useEffect(() => {
    setLogoUrl(values.logoUrl);
    setActivityImg1(values.activityImg1);
    setActivityImg2(values.activityImg2);
    setActivityImg3(values.activityImg3);
    setActivityImg4(values.activityImg4);

    if (values.logoUrl) setLogoPrev(URL.createObjectURL(values.logoUrl));
    if (values.activityImg1)
      setAct1ImgPrev(URL.createObjectURL(values.activityImg1));
    if (values.activityImg2)
      setAct2ImgPrev(URL.createObjectURL(values.activityImg2));
    if (values.activityImg3)
      setAct3ImgPrev(URL.createObjectURL(values.activityImg3));
    if (values.activityImg4)
      setAct4ImgPrev(URL.createObjectURL(values.activityImg4));
  }, [values]);

  return (
    <>
      <form>
        <Main>
          <ClubIntroContent>
            <ImageWrap>
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/jpg, image/png, image/jpeg"
                onChange={handleFile}
                id="logoUrl"
              />
              <img alt="" src={logoPrev} style={{ width: "100%" }} />
              <ImgUploader htmlFor="logoUrl">파일 선택</ImgUploader>
            </ImageWrap>
            <ClubContentWrap>
              <ClubJoinContent>
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  defaultValue={isPresident}
                  label="동아리 이름"
                  readonly
                />
                <Input
                  type="text"
                  name="field"
                  onChange={handleChange}
                  defaultValue={area}
                  label="동아리 분야"
                  readonly
                />
              </ClubJoinContent>
              <Input
                type="text"
                defaultValue=""
                name="room"
                onChange={handleChange}
                label="동아리 방"
              />
              <Input
                type="text"
                name="topic"
                defaultValue=""
                onChange={handleChange}
                label="동아리 주제"
              />
              <RedDiv>동아리 주제는 ,로 구분해서 작성해주세요.</RedDiv>
            </ClubContentWrap>
          </ClubIntroContent>

          <ClubJoin>
            <TitleWrap>동아리 지원 방법</TitleWrap>
            <ClubContentWrap>
              <Input
                type="text"
                name="num"
                defaultValue=""
                onChange={handleChange}
                label="모집 인원"
              />
              <Input
                type="text"
                name="period"
                defaultValue=""
                onChange={handleChange}
                label="모집 시기"
              />
              <Input
                type="text"
                name="way"
                defaultValue=""
                onChange={handleChange}
                label="모집 방법"
              />
              <Input
                type="text"
                name="applyUrl"
                defaultValue=""
                onChange={handleChange}
                label="링크"
              />
            </ClubContentWrap>
          </ClubJoin>

          <div style={{ width: "100%" }}>
            <TitleWrap>운영진 소개</TitleWrap>
            <MemberWrap>
              <MemberContainer>
                <Input
                  type="text"
                  label="이름"
                  name="executive1Name"
                  defaultValue={username}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="이메일"
                  name="executive1Email"
                  defaultValue={email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="역할"
                  name="executive1Role"
                  defaultValue="운영진"
                  onChange={handleChange}
                />
              </MemberContainer>
              <MemberContainer>
                <Input
                  type="text"
                  label="이름"
                  name="executive2Name"
                  defaultValue=""
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="이메일"
                  name="executive2Email"
                  defaultValue=""
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="역할"
                  name="executive2Role"
                  defaultValue=""
                  onChange={handleChange}
                />
              </MemberContainer>
              <MemberContainer>
                <Input
                  type="text"
                  label="이름"
                  name="executive3Name"
                  defaultValue=""
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="이메일"
                  name="executive3Email"
                  defaultValue=""
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="역할"
                  name="executive3Role"
                  defaultValue=""
                  onChange={handleChange}
                />
              </MemberContainer>
              <MemberContainer>
                <Input
                  type="text"
                  label="이름"
                  name="executive4Name"
                  defaultValue=""
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="이메일"
                  name="executive4Email"
                  defaultValue=""
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="역할"
                  name="executive4Role"
                  defaultValue=""
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
                    id="activityImg1"
                    onChange={handleFile}
                  />
                  <img alt="" src={act1ImgPrev} style={{ width: "100%" }} />
                  <ImgUploader htmlFor="activityImg1">파일 선택</ImgUploader>
                </ImageWrap>
                <ImageWrap>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/jpg, image/png, image/jpeg"
                    id="activityImg2"
                    onChange={handleFile}
                  />
                  <img alt="" src={act2ImgPrev} style={{ width: "100%" }} />
                  <ImgUploader htmlFor="activityImg2">파일 선택</ImgUploader>
                </ImageWrap>
                <ImageWrap>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/jpg, image/png, image/jpeg"
                    id="activityImg3"
                    onChange={handleFile}
                  />
                  <img alt="" src={act3ImgPrev} style={{ width: "100%" }} />
                  <ImgUploader htmlFor="activityImg3">파일 선택</ImgUploader>
                </ImageWrap>
                <ImageWrap>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/jpg, image/png, image/jpeg"
                    id="activityImg4"
                    onChange={handleFile}
                  />
                  <img alt="" src={act4ImgPrev} style={{ width: "100%" }} />
                  <ImgUploader htmlFor="activityImg4">파일 선택</ImgUploader>
                </ImageWrap>
              </ClubActivity>
              <TextareaWrap
                type="text"
                defaultValue=""
                onChange={handleChange}
                name="activityText1"
              />
            </ActivityWrap>
          </div>
        </Main>

        <Button
          type="button"
          onClick={() => {
            postClub(values, user).then(() => {
              navigator("/");
            });
          }}>
          동아리 등록하기
        </Button>
      </form>
    </>
  );
};

export default RegisterClubContents;
