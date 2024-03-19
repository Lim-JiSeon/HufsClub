import axios from "axios";
import { API_END_POINT } from "../../constants/api";

const searchName = async (area, keyword) => {
  return axios.get(
    `${API_END_POINT}clubs/search?field=${area}&keyword=${keyword}`
  );
};

export default searchName;
