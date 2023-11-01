import axios from "axios";
import { API_END_POINT } from "../../constants/api";

const searchName = async (keyword) => {
  return axios.get(`${API_END_POINT}clubs/search?keyword=${keyword}`);
};

export default searchName;
