import axios from "axios";

const findPw = async (email) => {
  const API_END_POINT = "http://localhost:5000/api/";

  axios
    .post(`${API_END_POINT}users/forget-password`, {
      email: email,
    })
    .then(() => {
      alert(
        "입력하신 이메일로 새로운 비밀번호를 설정할 수 있는 링크를 보냈습니다."
      );
    })
    .catch(() => {
      alert("회원을 찾을 수 없습니다.");
    });
};

export default findPw;
