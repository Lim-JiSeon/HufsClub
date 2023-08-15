import styled from "@emotion/styled";
import useForm from "../hooks/useForm";
import Button from "./Button";
import ErrorText from "./ErrorText";
import Input from "./Input";

const CardForm = styled.form`
  display: block;
  padding: 46px 36px;
  width: 600px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #526d82;
`;

const LoginForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit,
    validate: ({ id, password }) => {
      const newErrors = {};
      if (!id) newErrors.id = "학번을 입력해주세요";
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
        placeholder="학번을 입력해주세요"
        onChange={handleChange}
      />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Input
        type="text"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button type="submit" disabled={isLoading}>
        로그인
      </Button>
    </CardForm>
  );
};

export default LoginForm;
