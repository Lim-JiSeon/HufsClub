import axios from "axios";

const findPw =async (email) => {
  const API_END_POINT = "http://localhost:5000/api/";

  return axios
    .post(`${API_END_POINT}users/forget-password`, {
      email: email,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export default findPw;
