import axios from "axios";
import { API_END_POINT } from "../../constants/api";

const searchContent = async (area, keyword) => {
  return axios.get(
    `${API_END_POINT}clubs/search/activity?field=${area}&keyword=${keyword}`
  );
};

export default searchContent;
