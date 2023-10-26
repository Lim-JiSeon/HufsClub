import axios from "axios";
import { API_END_POINT } from "../../constants/api";

const searchTopic = async (keyword) => {
  return axios.get(`${API_END_POINT}clubs/search/topic?keyword=${keyword}`);
};

export default searchTopic;
