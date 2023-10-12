import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";
import styled from "@emotion/styled";
import findId from "../api/findId";

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

const FindIdForm = ({ onSubmit }) => {
  const checkNum = /^[0-9]+$/;
  const { values, errors, isLoading, handleChange, handleLogin } = useForm({
    initialValues: {
      name: "",
      email: "",
      codeNumber: "",
    },
    onSubmit,
    validate: ({ id, password }) => {
      const newErrors = {};
      if (!id || id.length !== 9 || !checkNum.test(id))
        newErrors.id = "올바른 아이디를 입력해주세요";
      if (!password) newErrors.password = "비밀번호를 입력해주세요";
      return newErrors;
    },
  });

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
          onClick={() => findId(values.name, values.email)}>
          인증번호 받기
        </SendEmail>
      </EmailWrap>
      <Input
        type="number"
        name="codeNumber"
        onChange={handleChange}
        label="인증번호"
      />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Button type="button" disabled={isLoading}>
        아이디 찾기
      </Button>
    </CardForm>
  );
};

export default FindIdForm;
