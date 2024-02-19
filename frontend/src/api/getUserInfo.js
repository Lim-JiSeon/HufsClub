import axios from "axios";
import { API_END_POINT } from "../constants/api";

const getUserInfo = async () => {
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
