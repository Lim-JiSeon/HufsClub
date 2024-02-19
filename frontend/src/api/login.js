import axios from "axios";
import { API_END_POINT } from "../constants/api";

const login = (id, password) => {
  return axios.post(`${API_END_POINT}users/signin`, {
    studentId: id, //202201819,
    password: password, //"123456",
  });
};

export default login;