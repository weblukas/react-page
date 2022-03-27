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
          <ul className="links-list">
            <NavLink to="/">Store</NavLink>
            <NavLink to="/premium">Premium products</NavLink>
            <NavLink to="/cart" className="cart-link">
              
              Cart 
              <div>

              <FaShoppingCart className="cart-icon" />
              
              </div>
              <span>{nrOfItemsInCart}</span>
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
