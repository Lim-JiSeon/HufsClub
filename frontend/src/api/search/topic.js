import axios from "axios";
import { API_END_POINT } from "../../constants/api";

const searchTopic = async (area, keyword) => {
  return axios.get(
    `${API_END_POINT}clubs/search/topic?field=${area}&keyword=${keyword}`
  );
};

export default searchTopic;
