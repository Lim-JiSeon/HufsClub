import axios from "axios";

const findId = (name, email) => {
  const API_END_POINT = "http://localhost:5000/api/";

  console.log(name, email);
  axios
    .post(`${API_END_POINT}users/forget-id`, {
      username: name, //"김철수",
      email: email, //"rac8793@naver.com",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default findId;
