import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Input from "../../components/func/Input";
import SubmitButton from "../../components/SubmitButton";
import ImageUploader from "../../images/image-upload.png";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import getClub from "../../api/getClub";
import putClub from "../../api/putClub";

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

const EditClubContents = () => {
  const navigator = useNavigate();

  const area = useParams().field;

  const { register, watch, reset } = useForm();

  useEffect(() => {
    getClub()
      .then((res) => {
        reset({
          field: area,
          name: res.name,
          room: res.room,
          topic: res.topic,
          executive1Name: res.executive[0].name,
          executive1Email: res.executive[0].email,
          executive1Role: res.executive[0].role,
          executive2Name: res.executive[1]?.name,
          executive2Email: res.executive[1]?.email,
          executive2Role: res.executive[1]?.role,
          executive3Name: res.executive[2]?.name,
          executive3Email: res.executive[2]?.email,
          executive3Role: res.executive[2]?.role,
          executive4Name: res.executive[3]?.name,
          executive4Email: res.executive[3]?.email,
          executive4Role: res.executive[3]?.role,
          period: res.recruit.period,
          way: res.recruit.way,
          applyUrl: res.recruit.applyUrl,
          num: res.recruit.num,
        });
        setLogoUrl(res.logoUrl);
        setActivityImg1(res.activity[0]?.imageUrl);
        setActivityImg2(res.activity[1]?.imageUrl);
        setActivityImg3(res.activity[2]?.imageUrl);
        setActivityImg4(res.activity[3]?.imageUrl);
      })
      .catch((error) => console.log(error));
  }, [reset, area]);

  const [logoUrl, setLogoUrl] = useState(ImageUploader);
  const [activityImg1, setActivityImg1] = useState(ImageUploader);
  const [activityImg2, setActivityImg2] = useState(ImageUploader);
  const [activityImg3, setActivityImg3] = useState(ImageUploader);
  const [activityImg4, setActivityImg4] = useState(ImageUploader);

  const logoImg = watch("logoUrl");
  const activity1 = watch("activityImg1");
  const activity2 = watch("activityImg2");
  const activity3 = watch("activityImg3");
  const activity4 = watch("activityImg4");

  const values = watch();

  useEffect(() => {
    if (logoImg && logoImg.length) {
      const file = logoImg[0];
      setLogoUrl(URL.createObjectURL(file) ?? "");
    } else if (activity1 && activity1.length) {
      const file = activity1[0];
      setActivityImg1(URL.createObjectURL(file) ?? "");
    } else if (activity2 && activity2.length) {
      const file = activity2[0];
      setActivityImg2(URL.createObjectURL(file) ?? "");
    } else if (activity3 && activity3.length) {
      const file = activity3[0];
      setActivityImg3(URL.createObjectURL(file) ?? "");
    } else if (activity4 && activity4.length) {
      const file = activity4[0];
      setActivityImg4(URL.createObjectURL(file) ?? "");
    }
  }, [logoImg, activity1, activity2, activity3, activity4]);

  return (
    <>
      <ContentWrap>
        <ClubIntroContent>
          <ImageWrap style={{ paddingTop: "40px" }}>
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg, image/png, image/jpeg"
              {...register("logoUrl")}
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
                value={watch().name}
                {...register("name")}
                label="동아리 이름"
                readonly
              />
              <Input
                type="text"
                name="field"
                {...register("field")}
                value={area}
                label="동아리 분야"
                readonly
              />
            </ClubJoinContent>
            <Input
              type="text"
              name="room"
              {...register("room")}
              label="동아리 방"
            />
            <Input
              type="text"
              name="topic"
              {...register("topic")}
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
                {...register("executive1Name")}
                value={watch().executive1Name}
                readonly
              />
              <Input
                type="text"
                label="이메일"
                name="executive1Email"
                {...register("executive1Email")}
                value={watch().executive1Email}
                readonly
              />
              <Input
                type="text"
                label="역할"
                name="executive1Role"
                {...register("executive1Role")}
                value="운영진"
                readonly
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive2Name"
                {...register("executive2Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive2Email"
                {...register("executive2Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive2Role"
                {...register("executive2Role")}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive3Name"
                {...register("executive3Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive3Email"
                {...register("executive3Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive3Role"
                {...register("executive3Role")}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive4Name"
                {...register("executive4Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive4Email"
                {...register("executive4Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive4Role"
                {...register("executive4Role")}
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
                  {...register("activityImg1")}
                />
                <img alt="" src={activityImg1} width={300} height={200} />
                <ImgUploader htmlFor="activityImg1">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                {...register("activityText1")}
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
                  {...register("activityImg2")}
                />
                <img alt="" src={activityImg2} width={300} height={200} />
                <ImgUploader htmlFor="activityImg2">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                {...register("activityText2")}
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
                  {...register("activityImg3")}
                />
                <img alt="" src={activityImg3} width={300} height={200} />
                <ImgUploader htmlFor="activityImg3">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                {...register("activityText3")}
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
                  {...register("activityImg4")}
                />
                <img alt="" src={activityImg4} width={300} height={200} />
                <ImgUploader htmlFor="activityImg4">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                {...register("activityText4")}
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
              {...register("num", { required: true })}
              label="모집 인원"
            />
            <Input
              type="text"
              name="period"
              {...register("period", { required: true })}
              label="모집 시기"
            />
            <Input
              type="text"
              name="way"
              {...register("way", { required: true })}
              label="모집 방법"
            />
            <Input
              type="text"
              name="applyUrl"
              {...register("applyUrl")}
              label="지원서 작성"
            />
          </MemberWrap>
        </ClubJoin>
        <SubmitButton
          type="button"
          onClick={() => {
            putClub(values).then(() => {
              navigator("/");
            });
          }}>
          동아리 수정하기
        </SubmitButton>
      </ContentWrap>
    </>
  );
};

export default EditClubContents;
