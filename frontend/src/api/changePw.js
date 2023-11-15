import axios from "axios";

const changePw = async (token, password) => {
  const API_END_POINT = "http://localhost:5000/api/";

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
