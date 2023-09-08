import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Dropdown() {
  const DropdownList = styled.li`
    list-style: none;
    color: #ffffff;
    font-weight: bold;
    padding: 6px 12px;
  `;

  const DropdownContainer = styled.ul`
    background-color: #526d82;
    border-radius: 10px;
    border: none;
    text-align: center;
    padding: 2px;
  `;

  return (
    <DropdownContainer>
      <Link to="/mypage" style={{ textDecoration: "none" }}>
        <DropdownList>마이페이지</DropdownList>
      </Link>
      <hr style={{heigh: "2px"}}/>
      <Link to="/" style={{ textDecoration: "none" }}>
        <DropdownList
          onClick={() => {
            sessionStorage.setItem("isLogin", "");
          }}>
          로그아웃
        </DropdownList>
      </Link>
    </DropdownContainer>
  );
}

export default Dropdown;
