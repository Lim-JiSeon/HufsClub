import axios from "axios";
import { API_END_POINT } from "../constants/api";

const changePw = async (token, password) => {
  try {
    axios.post(`${API_END_POINT}users/reset-password`, {
      token: token,
      password: password,
    });
    alert("새 비밀번호로 변경되었습니다.");
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export default changePw;
