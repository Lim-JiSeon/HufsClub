import styled from "@emotion/styled";
import { useContext } from "react";
import RadioContext from "../../contexts/RadioContext";

const Text = styled.span`
font-size: 14px;
font-weight: bold;
padding-left: 8px;
`

const Radio = ({ children, value, name, defaultChecked }) => {
  const group = useContext(RadioContext);

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      <Text>{children}</Text>
    </label>
  );
}

export default Radio;
