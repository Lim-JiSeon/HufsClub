import React from "react";
import useForm from "../../hooks/useForm";
import Button from "../common/Button";
import ErrorText from "../errors/ErrorText";
import Input from "../func/Input";

const ResetPwForm = () => {
  const { errors, isLoading, handleChange, handleChangePw } = useForm({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
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
    <form onSubmit={handleChangePw}>
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
      <Button type="submit" disabled={isLoading} style={{ marginTop: "120px" }}>
        비밀번호 변경하기
      </Button>
    </form>
  );
};

export default ResetPwForm;
