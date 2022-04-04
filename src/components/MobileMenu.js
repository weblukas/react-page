import React from "react";
import  Overlay  from "./overlay/Overlay"
import { GoX } from "react-icons/go";
import { StyledMobileMenu } from "./styles/MobileMenu.styled";
import { NavLink } from "./styles/MobileMenu.styled";
import { ModalBtn } from "./styles/MobileMenu.styled";
import { MobileNavList } from "./styles/MobileMenu.styled";

const dropIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const MobileMenu = ({ handleClick }) => {
  
  return (
    <Overlay>
      <StyledMobileMenu
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <MobileNavList>
          <NavLink to="/" className="nav-link" onClick={handleClick}>
            Home
          </NavLink>
          <NavLink to="/premium" className="nav-link" onClick={handleClick}>
            Premium products
          </NavLink>
          <NavLink to="/cart" className="nav-link" onClick={handleClick}>
            Cart
          </NavLink>
        </MobileNavList>
        <ModalBtn>
          <GoX onClick={handleClick} />
        </ModalBtn>
      </StyledMobileMenu>
    </Overlay>
  );
};

export default MobileMenu;
