import React from "react";
import styled from "@emotion/styled";
import profileImage from "../images/profile.png";
import Image from "./func/Image";
import Input from "./func/Input";
import useForm from "../hooks/useForm";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";
import putUserInfo from "../api/putUserInfo";

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 40px;
`;

const ImageWrap = styled.div`
  padding-right: 40px;
`;

const Content = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const ButtonWrap = styled.div`
  width: 30%;
`;

const MyInfo = (data) => {
  const { username, studentId, major, major2, email, isEnroll, isPresident } =
    data.data;

  const password = sessionStorage.getItem("hufs-password");

  const navigate = useNavigate();

  const { handleChange, values } = useForm({
    initialValues: {
      username,
      studentId,
      major,
      major2,
      password,
      email,
      isEnroll,
      isPresident,
    },
  });

  const handleSubmitButton = () => {
    putUserInfo(values).then(() => navigate("/"));
  };

  return (
    <>
      <ContentWrap>
        <ImageWrap>
          <Image src={profileImage} alt="" width="200px" height="auto" />
        </ImageWrap>
        <Content>
          <Input
            type="text"
            name="usename"
            onChange={handleChange}
            defaultValue={username}
            label="이름"
          />
          <Input
            type="text"
            name="studentId"
            onChange={handleChange}
            defaultValue={studentId}
            label="학번"
          />
          <Input
            type="text"
            name="major"
            onChange={handleChange}
            defaultValue={major}
            label="학과1"
          />
          <Input
            type="text"
            name="major2"
            onChange={handleChange}
            defaultValue={values.major2}
            label="학과2"
          />
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            defaultValue={email}
            label="이메일"
          />
          <Input
            type="text"
            name="isEnroll"
            onChange={handleChange}
            defaultValue={isEnroll}
            label="재학 여부"
          />
          <Input
            type="text"
            name="isPresident"
            onChange={handleChange}
            defaultValue={isPresident}
            label="동아리 운영진"
          />
        </Content>
      </ContentWrap>
      <ButtonWrap>
        <SubmitButton onClick={handleSubmitButton}>
          프로필 수정하기
        </SubmitButton>
      </ButtonWrap>
    </>
  );
};

export default MyInfo;
