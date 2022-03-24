import React, { useState } from "react";
import { FaDev } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import useMediaQuery from "../helpers/hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import MenuHamburger from "./MenuHamburger";
import { StyledNavbar } from "./styles/Navbar.styled";
import { NavLink } from "./styles/MobileMenu.styled";
import { deviceSize } from "../helpers/responsive/deviceSize";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${deviceSize.mobile}px)`);
  const nrOfItemsInCart = useSelector((state) => state.cart.nrOfItemsInCart);

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
              <span>{nrOfItemsInCart}</span>
              Cart <FaShoppingCart className="cart-icon" />
            </NavLink>
          </ul>
        ) : (
          <MenuHamburger
            handleClick={handleClick}
            openMobileMenu={openMobileMenu}
          />
        )}
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
