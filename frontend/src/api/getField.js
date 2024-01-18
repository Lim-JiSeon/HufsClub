import axios from "axios";
import { API_END_POINT } from "../constants/api";

const getField = async (field) => {
  try {
    const data = await axios.get(`${API_END_POINT}clubs/field/${field}`);
    return data;
  } catch (error) {
    return [];
  }
};

export default getField;
