import useForm from "../../hooks/useForm";
import Button from "../../components/common/Button";
import ErrorText from "../../components/errors/ErrorText";
import Input from "../../components/func/Input";
import Radio from "../../components/func/Radio";
import RadioGroup from "../../components/func/RadioGroup";
import { useState } from "react";
import styled from "@emotion/styled";

const AgreementWrap = styled.div`
  text-align: right;
  margin-top: 14px;
`;

const AgreementText = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  padding-left: 8px;
`;

const ButtonWrap = styled.div`
  margin-top: 102px;
`;

const SignUpForm = () => {
  const [clubPresidentCheck, setClubPresidentCheck] = useState(false);
  const { errors, isLoading, handleChange, handleSignUp } = useForm({
    initialValues: {
      name: "",
      studentNumber: 0,
      email: "",
      password: "",
      passwordConfirm: "",
      clubPresident: "",
      agreement: false,
    },
    validate: ({
      name,
      studentNumber,
      email,
      password,
      passwordConfirm,
      clubPresident,
      agreement,
    }) => {
      const newErrors = {};
      const checkNum = /^[0-9]+$/;
      if (!name) newErrors.name = "이름을 입력해주세요";
      if (
        !studentNumber ||
        studentNumber.length !== 9 ||
        !checkNum.test(studentNumber)
      )
        newErrors.studentNumber = "올바른 학번을 입력해주세요";
      if (!email) newErrors.email = "올바른 이메일을 입력해주세요";
      if (!password) newErrors.password = "비밀번호를 입력해주세요";
      if (password !== passwordConfirm)
        newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다";
      if (clubPresidentCheck && !clubPresident)
        newErrors.clubPresident =
          "동아리 운영진으로 활동 중인 동아리 이름을 입력해주세요";
      if (!agreement)
        newErrors.agreement =
          "개인 정보 활용에 동의하지 않을 경우 회원가입을 할 수 없습니다";
      return newErrors;
    },
  });

  return (
    <form onSubmit={handleSignUp}>
      <Input type="text" name="name" onChange={handleChange} label="이름" />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="text"
        name="studentNumber"
        onChange={handleChange}
        label="학번"
      />
      {errors.studentNumber && <ErrorText>{errors.studentNumber}</ErrorText>}
      <Input type="email" name="email" onChange={handleChange} label="이메일" />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      <Input
        type="password"
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
      <RadioGroup
        label="동아리 운영진"
        value={clubPresidentCheck}
        onChange={() => setClubPresidentCheck(!clubPresidentCheck)}>
        <Radio name="clubPresidentCheck" value={false} defaultChecked>
          일반 회원
        </Radio>
        <Radio name="clubPresidentCheck" value={true}>
          동아리 운영진
        </Radio>
      </RadioGroup>
      {clubPresidentCheck && (
        <Input
          type="text"
          name="clubPresident"
          onChange={handleChange}
          label="동아리 이름"
        />
      )}
      {clubPresidentCheck && errors.clubPresident && (
        <ErrorText>{errors.clubPresident}</ErrorText>
      )}
      <AgreementWrap>
        <input type="checkbox" name="agreement" onChange={handleChange} />
        <AgreementText>개인 정보 활용 동의</AgreementText>
      </AgreementWrap>
      {errors.agreement && (
        <ErrorText
          style={{ display: "block", textAlign: "right", marginTop: "4px" }}>
          {errors.agreement}
        </ErrorText>
      )}
      <ButtonWrap>
        <Button type="submit" disabled={isLoading}>
          회원가입
        </Button>
      </ButtonWrap>
    </form>
  );
};

export default SignUpForm;
