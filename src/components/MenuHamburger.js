import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoX } from "react-icons/go";
import { motion } from "framer-motion";
import { StyledMenuHamburger } from "./styles/MenuHamburger.styled";

const MenuHamburger = ({ handleClick, isMobileMenuOpen }) => {
  return (
    <StyledMenuHamburger
      as={motion.button}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {!isMobileMenuOpen ? <GiHamburgerMenu /> : <GoX />}
    </StyledMenuHamburger>
  );
};

export default MenuHamburger;
