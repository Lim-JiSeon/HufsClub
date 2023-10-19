import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";
import findPw from "../api/findPw";
import { useState } from "react";

const FindPwForm = () => {
  const [notification, setNotification] = useState("");
  const { values, errors, isLoading, handleChange } = useForm({
    initialValues: {
      email: "",
    },
  });

  return (
    <CardForm>
      <Title>비밀번호 찾기</Title>
      <Input type="email" name="email" onChange={handleChange} label="이메일" />
      {errors.id && <ErrorText>{errors.id}</ErrorText>}
      <Button
        type="button"
        disabled={isLoading}
        onClick={async () => setNotification(await findPw(values.email))}>
        비밀번호 찾기
      </Button>
    </CardForm>
  );
};

export default FindPwForm;
