import styled from "@emotion/styled";

const LogoutButton = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  background-color: #ffffff;
  color: red;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  margin-top: 26px;
  box-shadow: 0 0 0 0.01em rgba(0,0,0,0.1);
  cursor: pointer;

  &:hover {
    background-color: red;
    color: #ffffff;
  }

  &:active {
    background-color: red;
    color: #ffffff;
  }

  &:disabled {
    background-color: #d8e5ed;
    color: #526d82;
  }
`;

export default LogoutButton;
