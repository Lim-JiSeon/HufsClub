import axios from "axios";

const putUserInfo = async (values) => {
  const API_END_POINT = "http://localhost:5000/api/";
  const token = sessionStorage.getItem("hufs-club_isLogin");

  try {
    axios.put(
      `${API_END_POINT}users/profile`,
      {
        username: values.username,
        studentId: values.studentId,
        major: values.major,
        major2: values.major2,
        email: values.email,
        isEnroll: values.isEnroll,
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
    alert("프로필이 수정되었습니다.");
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export default putUserInfo;
