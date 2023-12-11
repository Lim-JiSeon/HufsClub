import axios from "axios";

const getClub = async (clubId) => {
  const API_END_POINT = "http://localhost:5000/api/";

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
