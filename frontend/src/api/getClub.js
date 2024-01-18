import axios from "axios";
import { API_END_POINT } from "../constants/api";

const getClub = async (clubId) => {
  const data = await axios
    .get(`${API_END_POINT}clubs/${clubId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

export default getClub;
