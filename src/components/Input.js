import { StyledInput } from "./styles/Input.styled";

const Input = ({ value, defaultChecked, handleChange, checked, ...props }) => {
  return (
    <StyledInput
      type="radio"
      value={value}
      // defaultChecked={defaultChecked}
      checked={checked}
      color={value}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Input;
