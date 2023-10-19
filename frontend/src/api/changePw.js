import axios from "axios";

const changePw = async (token, password) => {
  const API_END_POINT = "http://localhost:5000/api/";

  return axios
    .post(`${API_END_POINT}users/reset-password`, {
      token: token,
      password: password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export default changePw;
