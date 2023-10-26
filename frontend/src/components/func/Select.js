import styled from "@emotion/styled";

export const StyledSelect = styled.select`
  color: #ffffff;
  background-color: #27374d;
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  outline: none;
`;

const Select = (props) => {
  const handleChange = (e) => {
    props.setField(e.target.value);
  };

  return (
    <StyledSelect onChange={handleChange}>
      {props.options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          defaultValue={props.defaultValue === option.value}>
          {option.name}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
