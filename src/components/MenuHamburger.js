import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoX } from "react-icons/go";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledMenuHamburger = styled.button`
  background-color: transparent;
  font-size: 2rem;
  border: none;
  cursor: pointer;
`;

const MenuHamburger = ({ handleClick, openMobileMenu }) => {
  return (
    <StyledMenuHamburger
      as={motion.button}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {!openMobileMenu ? <GiHamburgerMenu /> : <GoX />}
    </StyledMenuHamburger>
  );
};

export default MenuHamburger;
