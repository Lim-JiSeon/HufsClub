import { useState } from "react";
import login from "../api/login";
import signup from "../api/signup";
import { useNavigate } from "react-router-dom";

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    if (Object.keys(newErrors).length === 0)
      await login(Number(values.id), values.password);
    setErrors(newErrors);
    setIsLoading(false);
    window.location.replace("/");
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

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleLogin,
    handleSignUp,
  };
};

export default useForm;
