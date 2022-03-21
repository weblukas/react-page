import React, { useState } from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaDev } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import useMediaQuery from "../helpers/hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import MenuHamburger from "./MenuHamburger";
import { deviceSize } from "../helpers/responsive/deviceSize";

const StyledNavbar = styled.div`
  background: linear-gradient(to right, #f6f6f9, #7799f0);
  color: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const NavLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  color: #343360;
  font-size: 1.3rem;
`;

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

   const isMobile = useMediaQuery(`(max-width: ${deviceSize.mobile}px)`)
  

  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <StyledNavbar>
        <NavLink to="/">
          <FaDev className="logo-icon" />
        </NavLink>
        {!isMobile ? (
          <ul>
            <NavLink to="/">Store</NavLink>
            <NavLink to="/gallery">Premium products</NavLink>
            <NavLink to="/cart">
              Cart <FaShoppingCart className="cart-icon" />
            </NavLink>
          </ul>
        ) : <MenuHamburger
            handleClick={handleClick}
            openMobileMenu={openMobileMenu}
          />
        }
        
      </StyledNavbar>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openMobileMenu ? (
          <MobileMenu isMobile={isMobile} handleClick={handleClick} />
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
