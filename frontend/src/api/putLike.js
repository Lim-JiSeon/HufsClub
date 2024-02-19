import axios from "axios";
import { API_END_POINT } from "../constants/api";

const putLike = async (clubName) => {
  const token = sessionStorage.getItem("hufs-club_isLogin");

  const data = axios
    .put(
      `${API_END_POINT}users/like`,
      {
        clubname: clubName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
      alert("해당 동아리를 좋아요 했습니다.");
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export default putLike;
