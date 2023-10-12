import axios from "axios";

const findPw = (email) => {
  const API_END_POINT = "http://localhost:5000/api/";

  console.log(email);
  axios
    .post(`${API_END_POINT}users/forget-password`, {
      email: email, //"rac8793@naver.com",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default findPw;
