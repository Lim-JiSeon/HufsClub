import axios from "axios";

const getId = async (email, verificationCode) => {
  const API_END_POINT = "http://localhost:5000/api/";

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
