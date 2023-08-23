import axios from "axios";

const login = (id, password) => {
  const API_END_POINT = "http://localhost:5000/api/";

  console.log(id, password);
  axios
    .post(`${API_END_POINT}users/signin`, {
      "studentId": id, //202201819,
      "password": password, //"123456",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default login;
