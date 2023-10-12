import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";
import findPw from "../api/findPw";

const FindPwForm = ({ onSubmit }) => {
  const checkNum = /^[0-9]+$/;
  const { values, errors, isLoading, handleChange, handleLogin } = useForm({
    initialValues: {
      email: "",
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
    <CardForm onSubmit={findPw(values.email)}>
      <Title>비밀번호 찾기</Title>
      <Input type="email" name="email" onChange={handleChange} label="이메일" />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Button type="submit" disabled={isLoading}>
        비밀번호 찾기
      </Button>
    </CardForm>
  );
};

export default FindPwForm;
