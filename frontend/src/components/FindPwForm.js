import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";

const FindPwForm = ({ onSubmit }) => {
  const { values, errors, isLoading, handleChange, handleFindPw } = useForm({
    initialValues: {
      email: "",
    },
    onSubmit,
    validate: ({ email }) => {
      const newErrors = {};
      if (!email)
        newErrors.email = "필수 입력란입니다. 올바른 이메일을 입력해주세요.";
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleFindPw}>
      <Title>비밀번호 찾기</Title>
      <Input type="email" name="email" onChange={handleChange} label="이메일" />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      <Button type="submit" disabled={isLoading}>
        비밀번호 찾기
      </Button>
    </CardForm>
  );
};

export default FindPwForm;
