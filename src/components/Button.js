import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  margin: 1rem;
  border: none;
  background-color: #df82d2;
  border-radius: 7px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;

const Button = ({ onClick, id }) => {

  return (
    <StyledButton
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      id={id}
      // ref={addItemBtn}
    >
      Add to cart
    </StyledButton>
  );
};

export default Button;
