import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./ErrorText";
import Input from "./Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";

const LoginForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit,
    validate: ({ id, password }) => {
      const newErrors = {};
      if (!id) newErrors.id = "아이디를 입력해주세요";
      if (!password) newErrors.password = "비밀번호를 입력해주세요";
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>로그인</Title>
      <Input
        type="text"
        name="id"
        onChange={handleChange}
        label="아이디(학번)"
      />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Input
        type="password"
        name="password"
        onChange={handleChange}
        label="비밀번호"
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button type="submit" disabled={isLoading}>
        로그인
      </Button>
    </CardForm>
  );
};

export default LoginForm;
