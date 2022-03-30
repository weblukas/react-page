import { StyledInput } from "./styles/Input.styled";

const Input = ({ value, defaultChecked, handleChange, checked }) => {
  
  return (
    <StyledInput
      type="radio"
      value={value}
      checked={checked}
      color={value}
      onChange={handleChange}
     
    />
  );
};

export default Input;
