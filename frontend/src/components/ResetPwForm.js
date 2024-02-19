import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";

const ResetPwForm = ({ onSubmit }) => {
  const { values, errors, isLoading, handleChange, handleChangePw } = useForm({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    onSubmit,
    validate: ({ password, passwordConfirm }) => {
      const newErrors = {};
      if (!password) newErrors.password = "필수 입력란입니다.";
      if (!passwordConfirm) newErrors.passwordConfirm = "필수 입력란입니다.";
      if (password !== passwordConfirm)
        newErrors.passwordConfirm = "입력한 비밀번호와 일치하지 않습니다.";

      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleChangePw}>
      <Title>비밀번호 재설정</Title>
      <Input
        type="text"
        name="password"
        onChange={handleChange}
        label="비밀번호"
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Input
        type="password"
        name="passwordConfirm"
        onChange={handleChange}
        label="비밀번호 확인"
      />
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm}</ErrorText>
      )}
      <Button type="submit" disabled={isLoading}>
        비밀번호 변경하기
      </Button>
    </CardForm>
  );
};

export default ResetPwForm;
