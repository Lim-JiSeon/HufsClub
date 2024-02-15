import axios from "axios";
import { API_END_POINT } from "../constants/api";

const signup = (values) => {
  return axios.post(`${API_END_POINT}users/signup`, {
    username: values.name,
    email: values.email,
    studentId: values.studentNumber,
    password: values.password,
    isPresident: values.clubPresident,
  });
};

export default signup;
