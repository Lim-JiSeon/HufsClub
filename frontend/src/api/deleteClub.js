import axios from "axios";
import { API_END_POINT } from "../constants/api";

const deleteClub = (_id) => {
  try {
    axios.delete(`${API_END_POINT}clubs/${_id}`);
    alert("해당 글이 삭제되었습니다.");
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export default deleteClub;
