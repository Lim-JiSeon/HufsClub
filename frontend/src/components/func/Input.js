import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: block;
  margin-top: 16px;
  flex: 1;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  padding-left: 8px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 4px 6px;
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #333;
  background-color: white;
  box-sizing: border-box;
  outline: none;
`;

const Input = ({ label, ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </Wrapper>
  );
};

export default Input;
