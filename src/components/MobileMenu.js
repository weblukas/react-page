import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Overlay from "./overlay/Overlay";
import { GoX } from "react-icons/go";
import styled from "styled-components";

const StyledMenu = styled.div`
  width: 60vw;
  background-color: #fff;
  margin: 0;
  border-radius: 8px;
  position: relative;
  z-index: 20;
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

const NavLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  color: #343360;
  font-size: 1.3rem;
  color: #343360;
`;

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

  const hideModalMenu = ()=>{
    console.log('klik');
  }
  return (
    <Overlay>
      <StyledMenu
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <MobileNavList>
          <NavLink to="/" className="nav-link" onClick={hideModalMenu}>
            Store
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Premium products
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            Cart
          </NavLink>
        </MobileNavList>
        <ModalBtn>
          <GoX onClick={handleClick} />
        </ModalBtn>
      </StyledMenu>
    </Overlay>
  );
};

export default MobileMenu;
