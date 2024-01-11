import { useState } from "react";
import login from "../api/login";
import signup from "../api/signup";
import { useNavigate } from "react-router-dom";
import findPw from "../api/findPw";
import changePw from "../api/changePw";
import { useLocation } from "react-router-dom";
import getId from "../api/getId";

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const token = useLocation().pathname.split("/")[2];

  const handleChange = (e) => {
    if (typeof e === "string") {
      setValues({ ...values }, (values.attendance = e));
    } else {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    }
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await login(Number(values.id), values.password);
        sessionStorage.setItem("hufs-club_isLogin", response.data.token);
        sessionStorage.setItem("hufs-club_id", response.data._id);
        // 추후 삭제 (패스워드 삭제)
        sessionStorage.setItem("hufs-password", values.password);
        navigate("/");
      } catch (error) {
        alert(
          "사용자를 찾을 수 없습니다.\n올바른 아이디와 비밀번호를 입력해주세요."
        );
      }
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  const handleSignUp = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await signup(values);
        alert(`${response.data.username}님 회원가입에 성공하셨습니다.`);
        navigate("/login");
      } catch (error) {
        alert("회원가입에 실패하셨습니다.");
      }
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  const handleFindPw = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      await findPw(values.email);
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  const handleFindId = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await getId(values.email, values.verificationCode);
        alert(`아이디는 ${response.studentId} 입니다.`);
        navigate("/login");
      } catch (error) {
        alert("회원을 찾을 수 없습니다.");
      }
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  const handleChangePw = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      await changePw(token, values.password);
      navigate("/login");
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleLogin,
    handleSignUp,
    handleFindPw,
    handleChangePw,
    handleFindId,
  };
};

export default useForm;
