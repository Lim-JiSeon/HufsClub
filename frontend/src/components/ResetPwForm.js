import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";
import findPw from "../api/findPw";
import { useState } from "react";
import changePw from "../api/changePw";
import { useLocation } from "react-router-dom";

const ResetPwForm = () => {
  const [notification, setNotification] = useState("");
  const token = useLocation().pathname.split("/")[2];
  const { values, errors, isLoading, handleChange } = useForm({
    initialValues: {
      password: "",
    },
  });

  return (
    <CardForm>
      <Title>비밀번호 재설정</Title>
      <Input
        type="text"
        name="password"
        onChange={handleChange}
        label="비밀번호"
      />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Input
        type="password"
        name="passwordConfirm"
        onChange={handleChange}
        label="비밀번호 확인"
      />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Button
        type="button"
        disabled={isLoading}
        onClick={async () =>
          setNotification(await changePw(token, values.password))
        }>
        비밀번호 변경하기
      </Button>
    </CardForm>
  );
};

export default ResetPwForm;
