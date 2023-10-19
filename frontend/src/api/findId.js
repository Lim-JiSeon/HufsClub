import axios from "axios";

const findId = (name, email) => {
  const API_END_POINT = "http://localhost:5000/api/";

  return axios.post(`${API_END_POINT}users/forget-id`, {
    username: name,
    email: email,
  });
};

export default findId;
