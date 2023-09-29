import axios from "axios";

const search = (keyword) => {
  const API_END_POINT = "http://localhost:5000/api/";
  axios
    .get(`${API_END_POINT}clubs/search?keyword=${keyword}`)
    .then((res) => {
      console.log(res.data)
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default search;
