import axios from "axios";

const signup = (values) => {
  const API_END_POINT = "http://localhost:5000/api/";

  axios
    .post(`${API_END_POINT}users/signup`, {
      username: values.name,//"홍박사",
      email: values.email,//"bshong@gmail.com",
      studentId: values.studentNumber,//202204865,
      major: values.subject,//"컴퓨터전자시스템공학부",
      password: values.password,//"1234",
      isEnroll: values.attendance,//"졸업",
      isPresident: values.clubPresident,//"그누리",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default signup;
