import axios from "axios";
import { API_END_POINT } from "../constants/api";

const getId = async (email, verificationCode) => {
  const data = axios
    .post(`${API_END_POINT}users/verify-verification-code`, {
      email: email,
      verificationCode: verificationCode,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

export default getId;
