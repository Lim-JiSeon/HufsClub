import axios from "axios";

const deleteClub = (_id) => {
  const API_END_POINT = "http://localhost:5000/api/";

  try {
    axios.delete(`${API_END_POINT}clubs/${_id}`);
    alert("해당 글이 삭제되었습니다.");
    
  } catch (error) {
    alert("오류가 발생했습니다.");
  }
};

export default deleteClub;
