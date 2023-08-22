import styled from "@emotion/styled";
import RadioContext from "../contexts/RadioContext";

const Wrapper = styled.div`
  display: block;
  margin-top: 16px;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 6px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  padding-left: 8px;
`;

const RadioGroup = ({ label, children, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <RadioContainer>
        <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
      </RadioContainer>
    </Wrapper>
  );
};

export default RadioGroup;
