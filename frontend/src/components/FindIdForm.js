import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";
import styled from "@emotion/styled";
import findId from "../api/findId";
import { useState } from "react";
import getId from "../api/getId";

const EmailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: last baseline;
`;

const SendEmail = styled.button`
  padding: 5px 10px;
  color: #dde6ed;
  background-color: #526d82;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const FindIdForm = () => {
  const [notificationEmail, setNotificationEmail] = useState("");
  const { values, errors, isLoading, handleChange } = useForm({
    initialValues: {
      name: "",
      email: "",
      verificationCode: "",
    },
  });

  const submitId = async () => {
    const { message, studentId } = await getId(
      values.email,
      values.verificationCode
    );
  };

  return (
    <CardForm>
      <Title>아이디 찾기</Title>
      <Input type="text" name="name" onChange={handleChange} label="이름" />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <EmailWrap>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          label="이메일"
        />
        {errors.id && <ErrorText>{errors.id}</ErrorText>}
        <SendEmail
          type="button"
          onClick={() =>
            setNotificationEmail(findId(values.name, values.email))
          }>
          인증번호 받기
        </SendEmail>
      </EmailWrap>
      <Input
        type="text"
        name="verificationCode"
        onChange={handleChange}
        label="인증번호"
      />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Button type="button" disabled={isLoading} onClick={submitId}>
        아이디 찾기
      </Button>
    </CardForm>
  );
};

export default FindIdForm;
