import { useState } from "react";
import login from "../api/login";
import signup from "../api/signup";

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
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
    window.location.replace("/")
  };

  const handleSignUp = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    console.log(Object.keys(newErrors));
    if (Object.keys(newErrors).length === 0) {
      await signup(values);
    }
    setErrors(newErrors);
    setIsLoading(false);
    window.location.replace("/login")
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
