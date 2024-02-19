import axios from "axios";
import { API_END_POINT } from "../constants/api";

const findPw = async (email) => {
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
