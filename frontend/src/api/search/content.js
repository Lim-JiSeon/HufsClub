import axios from "axios";
import { API_END_POINT } from "../../constants/api";

const searchContent = async (keyword) => {
  return axios.get(`${API_END_POINT}clubs/search/activity?keyword=${keyword}`);
};

export default searchContent;
