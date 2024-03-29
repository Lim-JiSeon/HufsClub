import axios from "axios";
import { API_END_POINT } from "../constants/api";

const findId = (name, email) => {
  if (name && email) {
    axios
      .post(`${API_END_POINT}users/forget-id`, {
        username: name,
        email: email,
      })
      .then(() => {
        alert("입력하신 이메일로 인증번호를 보냈습니다.");
      })
      .catch(() => {
        alert("회원을 찾을 수 없습니다.");
      });
  } else {
    alert("이름과 이메일을 모두 입력해주세요.");
  }
};

export default findId;
