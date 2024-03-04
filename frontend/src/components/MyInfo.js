import React, { useState } from "react";
import styled from "@emotion/styled";
// import profileImage from "../images/profile.png";
// import Image from "./func/Image";
import Input from "./func/Input";
import useForm from "../hooks/useForm";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";
import putUserInfo from "../api/putUserInfo";
import ErrorText from "./errors/ErrorText";
// import Radio from "./func/Radio";
// import RadioGroup from "./func/RadioGroup";

const CardForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 40px;
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
  const [clubPresidentCheck, setClubPresidentCheck] = useState(false);
  const { username, studentId, email, isPresident } = data.data;

  const password = sessionStorage.getItem("hufs-password");

  console.log(data.data);
  console.log(password);

  const navigate = useNavigate();

  const checkNum = /^[0-9]+$/;
  const checkEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const { errors, handleChange, values } = useForm({
    initialValues: {
      username,
      studentId,
      password: "",
      newPassword: password,
      email,
      isPresident,
    },
    validate: ({ username, studentId, password, newPassword }) => {
      const newErrors = {};
      if (!username) newErrors.username = "필수 입력란입니다.";
      if (!studentId || studentId.length !== 9 || !checkNum.test(studentId))
        newErrors.studentId = "숫자 9자리를 입력해주세요";
      if (!email || !checkEmail.test(email))
        newErrors.email = "이메일을 입력해주세요.";
      if (!password) newErrors.password = "비밀번호를 입력해주세요";
      if (!newPassword) newErrors.newPassword = "필수 입력란입니다.";
      return newErrors;
    },
  });

  const handleSubmitButton = () => {
    putUserInfo(values).then(() => navigate("/"));
  };

  return (
    <>
      <CardForm onSubmit={handleSubmitButton}>
        <ContentWrap>
          {/* <ImageWrap>
          <Image src={profileImage} alt="" width="200px" height="auto" />
        </ImageWrap> */}
          <Content>
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              defaultValue={username}
              label="이름"
            />
            {errors.username && <ErrorText>{errors.username}</ErrorText>}
            <Input
              type="text"
              name="studentId"
              onChange={handleChange}
              defaultValue={studentId}
              label="학번"
            />
            {errors.studentId && <ErrorText>{errors.studentId}</ErrorText>}
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              defaultValue={email}
              label="이메일"
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              defaultValue=""
              label="비밀번호"
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
            <Input
              type="password"
              name="newPassword"
              onChange={handleChange}
              defaultValue={password}
              label="새로운 비밀번호"
            />
            {errors.newPassword && <ErrorText>{errors.newPassword}</ErrorText>}
            {/* <RadioGroup
            label="동아리 운영진"
            value={clubPresidentCheck}
            onChange={() => setClubPresidentCheck(!clubPresidentCheck)}>
            <Radio name="clubPresidentCheck" value={false} defaultChecked>
              일반 회원
            </Radio>
            <Radio name="clubPresidentCheck" value={true}>
              동아리 운영진
            </Radio>
          </RadioGroup>
          {clubPresidentCheck && (
            <Input
              type="text"
              name="isPresident"
              onChange={handleChange}
              defaultValue={isPresident}
              label="동아리 이름"
            />
          )} */}
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
          <SubmitButton type="submit">프로필 수정하기</SubmitButton>
        </ButtonWrap>
      </CardForm>
    </>
  );
};

export default MyInfo;
