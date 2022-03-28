import { StyledInput } from "./styles/Input.styled";

const Input = ({ value, defaultChecked, handleChange, checked }) => {
  console.log(value);
  return (
    <StyledInput
      type="radio"
      value={value}
      defaultChecked={defaultChecked}
      checked={checked}
      color={value}
      onClick={handleChange}
    />
  );
};

export default Input;
