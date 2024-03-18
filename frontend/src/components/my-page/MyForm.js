import React from "react";
import styled from "@emotion/styled";
import Input from "../func/Input";
import useForm from "../../hooks/useForm";
import ErrorText from "../errors/ErrorText";
import Button from "../common/Button";

const ButtonWrap = styled.div`
  margin-top: 102px;
`;

const MyForm = (data) => {
  const { username, studentId, email, isPresident } = data.data;

  const password = sessionStorage.getItem("hufs-password");

  const checkNum = /^[0-9]+$/;
  const checkEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const { errors, isLoading, handleChange, handleMyInfo } = useForm({
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
      if (
        !studentId ||
        studentId.toString().length !== 9 ||
        !checkNum.test(studentId)
      )
        newErrors.studentId = "숫자 9자리를 입력해주세요";
      if (!email || !checkEmail.test(email))
        newErrors.email = "이메일을 입력해주세요.";
      if (!password) newErrors.password = "비밀번호를 입력해주세요";
      if (!newPassword) newErrors.newPassword = "필수 입력란입니다.";
      return newErrors;
    },
  });

  return (
    <>
      <form onSubmit={handleMyInfo}>
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
        <Input
          type="text"
          name="isPresident"
          onChange={handleChange}
          defaultValue={isPresident}
          label="동아리 운영진"
        />
        <ButtonWrap>
          <Button type="submit" disabled={isLoading}>
            프로필 수정하기
          </Button>
        </ButtonWrap>
      </form>
    </>
  );
};

export default MyForm;
