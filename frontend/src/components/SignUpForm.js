import useForm from "../hooks/useForm";
import Button from "./SubmitButton";
import ErrorText from "./errors/ErrorText";
import Input from "./func/Input";
import CardForm from "./CardForm";
import Title from "./TopicTitle";
import Radio from "./func/Radio";
import RadioGroup from "./func/RadioGroup";
import { useState } from "react";

const SignUpForm = ({ onSubmit }) => {
  const [clubPresidentCheck, setClubPresidentCheck] = useState(false);
  const { values, errors, isLoading, handleChange, handleSignUp } = useForm({
    initialValues: {
      name: "",
      studentNumber: 0,
      email: "",
      subject: "",
      password: "",
      passwordConfirm: "",
      attendance: "재학",
      clubPresident: "",
      agreement: false,
    },
    onSubmit,
    validate: ({
      name,
      studentNumber,
      email,
      subject,
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
      if (!email) newErrors.email = "이메일을 입력해주세요";
      if (!subject) newErrors.subject = "학과를 입력해주세요";
      if (!password) newErrors.password = "비밀번호를 입력해주세요";
      if (password !== passwordConfirm)
        newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다";
      if (!clubPresident)
        newErrors.clubPresident =
          "동아리 회장으로 활동 중인 동아리 이름을 입력해주세요";
      if (!agreement)
        newErrors.agreement =
          "개인 정보 활용에 동의하지 않을 경우 회원가입을 할 수 없습니다";
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSignUp}>
      <Title>회원가입</Title>
      <Input type="text" name="name" onChange={handleChange} label="이름" />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="text"
        name="studentNumber"
        onChange={handleChange}
        label="학번"
      />
      {errors.studentNumber && <ErrorText>{errors.studentNumber}</ErrorText>}
      <Input type="text" name="email" onChange={handleChange} label="이메일" />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      <Input type="text" name="subject" onChange={handleChange} label="학과" />
      {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
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
        label="재학 여부"
        value={values.attendance}
        onChange={handleChange}>
        <Radio name="attendance" value="재학" defaultChecked>
          재학
        </Radio>
        <Radio name="attendance" value="휴학">
          휴학
        </Radio>
        <Radio name="attendance" value="졸업">
          졸업
        </Radio>
        <Radio name="attendance" value="기타">
          기타
        </Radio>
      </RadioGroup>
      <RadioGroup
        label="동아리 회장"
        value={clubPresidentCheck}
        onChange={() => setClubPresidentCheck(!clubPresidentCheck)}>
        <Radio name="clubPresidentCheck" value={false} defaultChecked>
          일반 회원
        </Radio>
        <Radio name="clubPresidentCheck" value={true}>
          동아리 회장
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
      <Button type="submit" disabled={isLoading}>
        회원가입
      </Button>
    </CardForm>
  );
};

export default SignUpForm;
