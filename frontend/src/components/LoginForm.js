import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 20px 25px 0 25px;
  color: #526d82;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    color: #9fb5c7;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = ({ onSubmit }) => {
  const checkNum = /^[0-9]+$/;
  const { errors, isLoading, handleChange, handleLogin } = useForm({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit,
    validate: ({ id, password }) => {
      const newErrors = {};
      if (!id || id.length !== 9 || !checkNum.test(id))
        newErrors.id = "숫자 9자리를 입력해주세요";
      if (!password) newErrors.password = "비밀번호를 입력해주세요";
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleLogin}>
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
      <LinkContainer>
        <StyledLink to="/find/id">아이디 찾기</StyledLink>
        <StyledLink to="/find/password">비밀번호 찾기</StyledLink>
      </LinkContainer>
    </CardForm>
  );
};

export default LoginForm;
