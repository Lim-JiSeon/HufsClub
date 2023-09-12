import axios from "axios";

const login = (id, password) => {
  const API_END_POINT = "http://localhost:5000/api/";

  axios
    .post(`${API_END_POINT}users/signin`, {
      studentId: id, //202201819,
      password: password, //"123456",
    })
    .then((res) => {
      console.log(res);
      sessionStorage.setItem("isLogin", res.data.token); // 보안상의 문제로 추후 로직 수정 필요
    })
    .catch((err) => {
      console.log(err);
    });
};

export default login;
