import axios from "axios";

const search = async (keyword) => {
  const API_END_POINT = "http://localhost:5000/api/";
  return axios.get(`${API_END_POINT}clubs/search?keyword=${keyword}`);
};

export default search;
