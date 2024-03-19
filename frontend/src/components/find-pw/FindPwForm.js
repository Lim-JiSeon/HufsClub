import React from "react";
import useForm from "../../hooks/useForm";
import Button from "../common/Button";
import ErrorText from "../errors/ErrorText";
import Input from "../func/Input";

const FindPwForm = () => {
  const { errors, isLoading, handleChange, handleFindPw } = useForm({
    initialValues: {
      email: "",
    },
    validate: ({ email }) => {
      const newErrors = {};
      if (!email) newErrors.email = "올바른 이메일을 입력해주세요.";
      return newErrors;
    },
  });

  return (
    <form onSubmit={handleFindPw}>
      <Input type="email" name="email" onChange={handleChange} label="이메일" />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      <Button type="submit" disabled={isLoading} style={{ marginTop: "120px" }}>
        비밀번호 찾기
      </Button>
    </form>
  );
};

export default FindPwForm;
