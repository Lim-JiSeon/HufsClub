import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Input from "../components/func/Input";
import SubmitButton from "../components/SubmitButton";
import postClub from "../api/postClub";
import ImageUploader from "../images/image-upload.png";
import { useNavigate, useParams } from "react-router-dom";
//import { useForm } from "react-hook-form";
import useForm from "../hooks/useForm";
import getUserInfo from "../api/getUserInfo";

const ContentWrap = styled.form`
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

const Wrapper = styled.div`
  display: block;
  margin-top: 16px;
  flex: 1;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  padding-left: 8px;
`;

const StyledDiv = styled.div`
  width: 100%;
  min-width: 140px;
  padding: 4px 6px;
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #333;
  background-color: white;
  box-sizing: border-box;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

const ImgUploader = styled.label`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  background-color: #526d82;
  color: #dde6ed;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #d8e5ed;
    color: #526d82;
  }

  &:active {
    background-color: #d8e5ed;
    color: #526d82;
  }

  &:disabled {
    background-color: #d8e5ed;
    color: #526d82;
  }
`;

const RedDiv = styled.div`
  font-size: 12px;
  color: red;
`;

const RegisterClubContents = (data) => {
  const navigator = useNavigate();

  const area = useParams().field;
  const { isPresident, username, email } = data.data;

  const { handleChange, handleFile, values } = useForm({
    initialValues: {
      activityImg1: ImageUploader,
      activityImg2: ImageUploader,
      activityImg3: ImageUploader,
      activityImg4: ImageUploader,
      activityText1: "",
      activityText2: "",
      activityText3: "",
      activityText4: "",
      applyUrl: "",
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
      logoUrl: ImageUploader,
      name: isPresident,
      num: "미정",
      period: "미정",
      room: "",
      topic: "",
      way: "동아리 운영진에게 문의해주세요.",
    },
  });

  const [logoUrl, setLogoUrl] = useState(ImageUploader);
  const [activityImg1, setActivityImg1] = useState(ImageUploader);
  const [activityImg2, setActivityImg2] = useState(ImageUploader);
  const [activityImg3, setActivityImg3] = useState(ImageUploader);
  const [activityImg4, setActivityImg4] = useState(ImageUploader);

  useEffect(() => {
    setLogoUrl(values.logoUrl);
    setActivityImg1(values.activityImg1);
    setActivityImg2(values.activityImg2);
    setActivityImg3(values.activityImg3);
    setActivityImg4(values.activityImg4);
  }, [values]);

  return (
    <>
      <ContentWrap>
        <ClubIntroContent>
          <ImageWrap style={{ paddingTop: "40px" }}>
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg, image/png, image/jpeg"
              onChange={handleFile}
              // {...register("logoUrl")}
              id="logoUrl"
            />
            <img
              alt=""
              src={logoUrl}
              width={300}
              height={200}
              style={{ cursor: "pointer" }}
            />
            <ImgUploader htmlFor="logoUrl">파일 선택</ImgUploader>
          </ImageWrap>
          <ClubContentWrap>
            <ClubJoinContent>
              <Input
                type="text"
                name="name"
                // value={watch().name}
                // {...register("name")}
                onChange={handleChange}
                defaultValue={isPresident}
                label="동아리 이름"
                readonly
              />
              <Input
                type="text"
                // {...register("field")}
                // value={area}
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
              //{...register("room")}
              label="동아리 방"
            />
            <Input
              type="text"
              name="topic"
              defaultValue=""
              onChange={handleChange}
              //{...register("topic")}
              label="동아리 주제"
            />
            <RedDiv>동아리 주제는 ,로 구분해서 작성해주세요.</RedDiv>
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
                defaultValue={username}
                // {...register("executive1Name")}
                // value={watch().executive1Name}
                readonly
              />
              <Input
                type="text"
                label="이메일"
                name="executive1Email"
                defaultValue={email}
                // {...register("executive1Email")}
                // value={watch().executive1Email}
                readonly
              />
              <Input
                type="text"
                label="역할"
                name="executive1Role"
                defaultValue="운영진"
                // {...register("executive1Role")}
                // value="운영진"
                readonly
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive2Name"
                defaultValue=""
                onChange={handleChange}
                // {...register("executive2Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive2Email"
                defaultValue=""
                onChange={handleChange}
                //{...register("executive2Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive2Role"
                defaultValue=""
                onChange={handleChange}
                // {...register("executive2Role")}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive3Name"
                defaultValue=""
                onChange={handleChange}
                // {...register("executive3Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive3Email"
                defaultValue=""
                onChange={handleChange}
                // {...register("executive3Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive3Role"
                defaultValue=""
                onChange={handleChange}
                // {...register("executive3Role")}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive4Name"
                defaultValue=""
                onChange={handleChange}
                // {...register("executive4Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive4Email"
                defaultValue=""
                onChange={handleChange}
                // {...register("executive4Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive4Role"
                defaultValue=""
                onChange={handleChange}
                // {...register("executive4Role")}
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
                  // {...register("activityImg1")}
                />
                <img alt="" src={activityImg1} width={300} height={200} />
                <ImgUploader htmlFor="activityImg1">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                defaultValue=""
                onChange={handleChange}
                // {...register("activityText1")}
                name="activityText1"
              />
            </ClubActivity>
            <ClubActivity>
              <ImageWrap>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg, image/png, image/jpeg"
                  id="activityImg2"
                  onChange={handleFile}
                  // {...register("activityImg2")}
                />
                <img alt="" src={activityImg2} width={300} height={200} />
                <ImgUploader htmlFor="activityImg2">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                defaultValue=""
                onChange={handleChange}
                // {...register("activityText2")}
                name="activityText2"
              />
            </ClubActivity>
            <ClubActivity>
              <ImageWrap>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg, image/png, image/jpeg"
                  id="activityImg3"
                  onChange={handleFile}
                  // {...register("activityImg3")}
                />
                <img alt="" src={activityImg3} width={300} height={200} />
                <ImgUploader htmlFor="activityImg3">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                defaultValue=""
                onChange={handleChange}
                // {...register("activityText3")}
                name="activityText3"
              />
            </ClubActivity>
            <ClubActivity>
              <ImageWrap>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/jpg, image/png, image/jpeg"
                  id="activityImg4"
                  onChange={handleFile}
                  // {...register("activityImg4")}
                />
                <img alt="" src={activityImg4} width={300} height={200} />
                <ImgUploader htmlFor="activityImg4">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                defaultValue=""
                onChange={handleChange}
                // {...register("activityText4")}
                name="activityText4"
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
              defaultValue=""
              onChange={handleChange}
              // {...register("num", { required: true })}
              label="모집 인원"
            />
            <Input
              type="text"
              name="period"
              defaultValue=""
              onChange={handleChange}
              // {...register("period", { required: true })}
              label="모집 시기"
            />
            <Input
              type="text"
              name="way"
              defaultValue=""
              onChange={handleChange}
              // {...register("way", { required: true })}
              label="모집 방법"
            />
            <Input
              type="text"
              name="applyUrl"
              defaultValue=""
              onChange={handleChange}
              // {...register("applyUrl")}
              label="지원서 작성"
            />
          </MemberWrap>
        </ClubJoin>
        <SubmitButton
          type="button"
          onClick={() => {
            postClub(values).then(() => {
              navigator("/");
            });
          }}>
          동아리 등록하기
        </SubmitButton>
      </ContentWrap>
    </>
  );
};

export default RegisterClubContents;
