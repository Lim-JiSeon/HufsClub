import axios from "axios";
import { API_END_POINT } from "../constants/api";

const deleteLike = async (clubName) => {
  const token = sessionStorage.getItem("hufs-club_isLogin");

  const data = axios
    .put(
      `${API_END_POINT}users/dislike`,
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
      alert("해당 동아리의 좋아요를 취소했습니다.");
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export default deleteLike;