import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiStarSwirl } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoX } from "react-icons/go";
import { NavbarContainer } from "./styles/Navbar.styles";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import useMediaQuery from "./hooks/useMediaQuery";
import Overlay from "./overlay/Overlay";
// import { DeviceSize } from "./responsive/DeviceSize";

const Menu = styled.div`
  width: 60vw;
  background-color: #fff;
  margin: 0;
  border-radius: 8px;
  position: relative;
`;

const MobileNavList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const dropIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ModalBtn = styled.button`
  color: #343360;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: absolute;
  top: 30px;
  right: 30px;
`;

const MobileMenu = ({ handleClick }) => {
  return (
    <Overlay>
      <Menu
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <MobileNavList>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Galery
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
        </MobileNavList>
        <ModalBtn>
          <GoX onClick={handleClick} />
        </ModalBtn>
      </Menu>
    </Overlay>
  );
};

export const NavLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  color: #343360;
  font-size: 1.3rem;
`;

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  //  const isMobile = useMediaQuery(`maxWidth: ${DeviceSize.mobile}`) - doesn't work
  const isMobile = useMediaQuery(`(max-width: 960px)`);

  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <NavbarContainer>
        <GiStarSwirl className="logo-icon" />
        {!isMobile ? (
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Galery</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </ul>
        ) : null}
        {isMobile ? (
          <motion.button
            className="toggle-menu-button"
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {!openMobileMenu ? <GiHamburgerMenu /> : <GoX />}
          </motion.button>
        ) : null}
      </NavbarContainer>
      <AnimatePresence initial={true} exitBeforeEnter={true} onExitComplete={()=> null}>
      {openMobileMenu ? 
      
      (
        <MobileMenu isMobile={isMobile} handleClick={handleClick} />
      )
      
      : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
