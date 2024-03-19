import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  background-color: #fed313;
  color: black;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  margin-top: 26px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #ffefa9;
  }

  &:active {
    background-color: #ffefa9;
  }

  &:disabled {
    background-color: #ffefa9;
  }
`;

export default Button;
