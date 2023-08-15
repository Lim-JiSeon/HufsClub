import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  background-color: #526d82;
  color: #dde6ed;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  margin-top: 16px;
  cursor: pointer;

  &:hover {
    background-color: #dde6ed;
    color: #526d82;
  }

  &:active {
    background-color: #dde6ed;
    color: #526d82;
  }

  &:disabled {
    background-color: #d8e5ed;
    color: #526d82;
  }
`;

export default Button;
