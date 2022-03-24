import React from "react";
import { StyledButton } from "./styles/Button.styled";
import { motion } from "framer-motion";

const Button = ({ addToCart }) => {
  return (
    <StyledButton
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={addToCart}
      // id={id}
      // ref={addItemBtn}
    >
      Add to cart
    </StyledButton>
  );
};

export default Button;
