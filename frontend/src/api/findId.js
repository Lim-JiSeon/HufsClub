import axios from "axios";

const findId = (name, email) => {
  const API_END_POINT = "http://localhost:5000/api/";

  try {
    axios.post(`${API_END_POINT}users/forget-id`, {
      username: name,
      email: email,
    });
    alert("입력하신 이메일로 인증번호를 보냈습니다.");
  } catch (error) {
    alert("회원을 찾을 수 없습니다.");
  }
};

export default findId;
