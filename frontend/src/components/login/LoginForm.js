import useForm from "../../hooks/useForm";
import Button from "../../components/common/Button";
import ErrorText from "../../components/errors/ErrorText";
import Input from "../../components/func/Input";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 0 12px;
  color: #c2c2c2;
  font-size: 12px;
  &:hover {
    color: #454545;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
`;

const SignUpButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  background-color: #fed313;
  color: black;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  margin-top: 12px;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #ffefa9;
  }

  &:active {
    background-color: #ffefa9;
  }

  &:disabled {
    background-color: #ffefa9;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 102px;
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
    <form onSubmit={handleLogin}>
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
      <LinkContainer>
        <StyledLink to="/find/id">아이디 찾기</StyledLink>
        <StyledLink to="/find/password">비밀번호 찾기</StyledLink>
      </LinkContainer>
      <ButtonContainer>
        <Button type="submit" disabled={isLoading}>
          로그인
        </Button>
        <SignUpButton to="/signup">회원가입</SignUpButton>
      </ButtonContainer>
    </form>
  );
};

export default LoginForm;
