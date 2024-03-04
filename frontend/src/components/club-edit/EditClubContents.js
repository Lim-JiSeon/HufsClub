import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Input from "../../components/func/Input";
import SubmitButton from "../../components/SubmitButton";
import ImageUploader from "../../images/image-upload.png";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import putClub from "../../api/putClub";
import Image1 from "../../images/학술.png";
import Image2 from "../../images/종교.png";
import Image3 from "../../images/스포츠.png";
import Image4 from "../../images/친목.png";
import Image5 from "../../images/문화.png";
import Image6 from "../../images/봉사.png";

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

const RedDiv = styled.div`
  font-size: 12px;
  color: red;
`;

const EditClubContents = (data) => {
  const navigator = useNavigate();

  console.log(data);

  const id = useParams().id;

  const { logoUrl, name, field, room, topic, recruit, executive, activity } =
    data.data;

  const [logoUrlImg, setLogoUrlImg] = useState(logoUrl);
  const [activityImg1, setActivityImg1] = useState(activity[0]?.imageUrl);
  const [activityImg2, setActivityImg2] = useState(activity[1]?.imageUrl);
  const [activityImg3, setActivityImg3] = useState(activity[2]?.imageUrl);
  const [activityImg4, setActivityImg4] = useState(activity[3]?.imageUrl);

  const [logoPrev, setLogoPrev] = useState(
    !logoUrl || logoUrl === "null" ? getImgURL(field) : logoUrl
  );
  const [act1ImgPrev, setAct1ImgPrev] = useState(
    !activity[0]?.imageUrl || activity[0]?.imageUrl === "null"
      ? ImageUploader
      : activity[0]?.imageUrl
  );
  const [act2ImgPrev, setAct2ImgPrev] = useState(
    !activity[1]?.imageUrl || activity[1]?.imageUrl === "null"
      ? ImageUploader
      : activity[1]?.imageUrl
  );
  const [act3ImgPrev, setAct3ImgPrev] = useState(
    !activity[2]?.imageUrl || activity[2]?.imageUrl === "null"
      ? ImageUploader
      : activity[2]?.imageUrl
  );
  const [act4ImgPrev, setAct4ImgPrev] = useState(
    !activity[3]?.imageUrl || activity[3]?.imageUrl === "null"
      ? ImageUploader
      : activity[3]?.imageUrl
  );

  const { handleChange, handleFile, values } = useForm({
    initialValues: {
      field,
      name,
      room: room ?? "",
      topic: topic ?? "",
      activityImg1: activity[0]?.imageUrl,
      activityImg2: activity[1]?.imageUrl,
      activityImg3: activity[2]?.imageUrl,
      activityImg4: activity[3]?.imageUrl,
      activityText1: activity[0]?.text ?? "",
      activityText2: activity[1]?.text ?? "",
      activityText3: activity[2]?.text ?? "",
      activityText4: activity[3]?.text ?? "",
      executive1Name: executive[0]?.name ?? "",
      executive1Email: executive[0]?.email ?? "",
      executive1Role: executive[0]?.role ?? "",
      executive2Name: executive[1]?.name ?? "",
      executive2Email: executive[1]?.email ?? "",
      executive2Role: executive[1]?.role ?? "",
      executive3Name: executive[2]?.name ?? "",
      executive3Email: executive[2]?.email ?? "",
      executive3Role: executive[2]?.role ?? "",
      executive4Name: executive[3]?.name ?? "",
      executive4Email: executive[3]?.email ?? "",
      executive4Role: executive[3]?.role ?? "",
      period: recruit?.period ?? "미정",
      way: recruit?.way ?? "동아리 운영진에게 문의해주세요.",
      applyUrl: recruit?.applyUrl ?? "추후 공지",
      num: recruit?.num ?? "미정",
      logoUrl: logoUrlImg,
    },
  });

  useEffect(() => {
    setLogoUrlImg(values.logoUrl);
    setActivityImg1(values.activityImg1);
    setActivityImg2(values.activityImg2);
    setActivityImg3(values.activityImg3);
    setActivityImg4(values.activityImg4);

    if (values.logoUrl && typeof values.logoUrl !== "string")
      setLogoPrev(URL.createObjectURL(values.logoUrl));
    if (values.activityImg1 && typeof values.activityImg1 !== "string")
      setAct1ImgPrev(URL.createObjectURL(values.activityImg1));
    if (values.activityImg2 && typeof values.activityImg2 !== "string")
      setAct2ImgPrev(URL.createObjectURL(values.activityImg2));
    if (values.activityImg3 && typeof values.activityImg3 !== "string")
      setAct3ImgPrev(URL.createObjectURL(values.activityImg3));
    if (values.activityImg4 && typeof values.activityImg4 !== "string")
      setAct4ImgPrev(URL.createObjectURL(values.activityImg4));
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
              src={logoPrev}
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
                defaultValue={name}
                label="동아리 이름"
                readonly
              />
              <Input
                type="text"
                // {...register("field")}
                // value={area}
                name="field"
                onChange={handleChange}
                defaultValue={field}
                label="동아리 분야"
                readonly
              />
            </ClubJoinContent>
            <Input
              type="text"
              name="room"
              onChange={handleChange}
              defaultValue={room}
              //{...register("room")}
              label="동아리 방"
            />
            <Input
              type="text"
              name="topic"
              defaultValue={topic.join("").replaceAll("#", ", ").slice(1)}
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
                defaultValue={executive[0]?.name ?? ""}
                // {...register("executive1Name")}
                // value={watch().executive1Name}
                readonly
              />
              <Input
                type="text"
                label="이메일"
                name="executive1Email"
                defaultValue={executive[0]?.email ?? ""}
                // {...register("executive1Email")}
                // value={watch().executive1Email}
                readonly
              />
              <Input
                type="text"
                label="역할"
                name="executive1Role"
                defaultValue={executive[0]?.role ?? "운영진"}
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
                defaultValue={executive[1]?.name ?? ""}
                onChange={handleChange}
                // {...register("executive2Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive2Email"
                defaultValue={executive[1]?.email ?? ""}
                onChange={handleChange}
                //{...register("executive2Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive2Role"
                defaultValue={executive[1]?.role ?? ""}
                onChange={handleChange}
                // {...register("executive2Role")}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive3Name"
                defaultValue={executive[2]?.name ?? ""}
                onChange={handleChange}
                // {...register("executive3Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive3Email"
                defaultValue={executive[2]?.email ?? ""}
                onChange={handleChange}
                // {...register("executive3Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive3Role"
                defaultValue={executive[2]?.role ?? ""}
                onChange={handleChange}
                // {...register("executive3Role")}
              />
            </MemberContainer>
            <MemberContainer>
              <Input
                type="text"
                label="이름"
                name="executive4Name"
                defaultValue={executive[3]?.name ?? ""}
                onChange={handleChange}
                // {...register("executive4Name")}
              />
              <Input
                type="text"
                label="이메일"
                name="executive4Email"
                defaultValue={executive[3]?.email ?? ""}
                onChange={handleChange}
                // {...register("executive4Email")}
              />
              <Input
                type="text"
                label="역할"
                name="executive4Role"
                defaultValue={executive[3]?.role ?? ""}
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
                <img alt="" src={act1ImgPrev} width={300} height={200} />
                <ImgUploader htmlFor="activityImg1">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                defaultValue={activity[0]?.text ?? ""}
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
                <img alt="" src={act2ImgPrev} width={300} height={200} />
                <ImgUploader htmlFor="activityImg2">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                defaultValue={activity[1]?.text ?? ""}
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
                <img alt="" src={act3ImgPrev} width={300} height={200} />
                <ImgUploader htmlFor="activityImg3">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                defaultValue={activity[2]?.text ?? ""}
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
                <img alt="" src={act4ImgPrev} width={300} height={200} />
                <ImgUploader htmlFor="activityImg4">파일 선택</ImgUploader>
              </ImageWrap>
              <TextareaWrap
                type="text"
                defaultValue={activity[3]?.text ?? ""}
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
              defaultValue={recruit.num}
              onChange={handleChange}
              // {...register("num", { required: true })}
              label="모집 인원"
            />
            <Input
              type="text"
              name="period"
              defaultValue={recruit.period}
              onChange={handleChange}
              // {...register("period", { required: true })}
              label="모집 시기"
            />
            <Input
              type="text"
              name="way"
              defaultValue={recruit.way}
              onChange={handleChange}
              // {...register("way", { required: true })}
              label="모집 방법"
            />
            <Input
              type="text"
              name="applyUrl"
              defaultValue={recruit.applyUrl}
              onChange={handleChange}
              // {...register("applyUrl")}
              label="링크"
            />
          </MemberWrap>
        </ClubJoin>
        <SubmitButton
          type="button"
          onClick={() => {
            putClub(values, id).then(() => {
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

export const getImgURL = (area) => {
  if (area === "학술") return Image1;
  if (area === "종교") return Image2;
  if (area === "스포츠") return Image3;
  if (area === "친목") return Image4;
  if (area === "문화") return Image5;
  if (area === "봉사") return Image6;
};
