import axios from "axios";

const getUserInfo = async () => {
  const API_END_POINT = "http://localhost:5000/api/";
  const _id = sessionStorage.getItem("hufs-club_id");

  const data = axios
    .get(`${API_END_POINT}users/info/${_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

export default getUserInfo;
