import useForm from "../../hooks/useForm";
import Button from "../../components/common/Button";
import ErrorText from "../../components/errors/ErrorText";
import Input from "../../components/func/Input";
import styled from "@emotion/styled";
import findId from "../../api/findId";

const EmailWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: last baseline;
`;

const SendEmail = styled.button`
  height: 48px;
  padding: 10px;
  margin-left: 10px;
  color: black;
  background-color: #fed313;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ffefa9;
  }

  &:active {
    background-color: #ffefa9;
  }
`;

const FindIdForm = () => {
  const { values, errors, isLoading, handleChange, handleFindId } = useForm({
    initialValues: {
      name: "",
      email: "",
      verificationCode: "",
    },
    validate: ({ name, email, verificationCode }) => {
      const newErrors = {};
      if (!name) newErrors.name = "필수 입력란입니다.";
      if (!email) newErrors.email = "필수 입력란입니다.";
      if (!verificationCode)
        newErrors.verificationCode = "발급받은 인증 번호를 입력해주세요.";
      return newErrors;
    },
  });

  return (
    <form onSubmit={handleFindId}>
      <Input type="text" name="name" onChange={handleChange} label="이름" />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <EmailWrap>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          label="이메일"
        />
        <SendEmail
          type="button"
          onClick={() => findId(values.name, values.email)}>
          인증번호 받기
        </SendEmail>
      </EmailWrap>

      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      <Input
        type="text"
        name="verificationCode"
        onChange={handleChange}
        label="인증번호"
      />
      {errors.verificationCode && (
        <ErrorText>{errors.verificationCode}</ErrorText>
      )}
      <Button type="submit" disabled={isLoading} style={{ marginTop: "102px" }}>
        아이디 찾기
      </Button>
    </form>
  );
};

export default FindIdForm;
