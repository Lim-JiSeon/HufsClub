import axios from "axios";
import { API_END_POINT } from "../constants/api";

const putUserInfo = async (values) => {
  const token = sessionStorage.getItem("hufs-club_isLogin");

  try {
    axios.put(
      `${API_END_POINT}users/profile`,
      {
        username: values.username,
        studentId: values.studentId,
        email: values.email,
        isPresident: values.isPresident,
        password: values.password,
        newPassword: values.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    sessionStorage.setItem("hufs-isPresident", values.isPresident);
    alert("프로필이 수정되었습니다.");
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export default putUserInfo;
