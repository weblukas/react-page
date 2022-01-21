import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiStarSwirl } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoX } from "react-icons/go";
import { NavbarContainer } from "./styles/Navbar.styles";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import useMediaQuery from "./hooks/useMediaQuery";
import { DeviceSize } from "./responsive/DeviceSize";


const Menu = styled.div `
    width: 100vw;
    background-color: #14142C;
    margin: 0;

    .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  } 
`

const MobileNavList = styled.ul `
    display: flex;
    flex-direction: column;

  
`

const MobileMenu = ({isMobile}) => {
    return (
      <CSSTransition in={isMobile} timeout={200} classNames="transition">
        <Menu>
            <MobileNavList>
            <NavLink to='/' className='nav-link'>
                Home
            </NavLink>
            <NavLink to='/gallery' className='nav-link'>
                Galery
            </NavLink>
            <NavLink to='/blog' className='nav-link'>
                Blog
            </NavLink>
            </MobileNavList>
        </Menu>
        </CSSTransition>
    )
}




export const NavLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
`;

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  //  const isMobile = useMediaQuery(`maxWidth: ${DeviceSize.mobile}`) - doesn't work
  const isMobile = useMediaQuery(`(max-width: 960px)`);

  const handleClick = () => {
    setToggleBtn(!toggleBtn);
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
          <button className="toggle-menu-button" onClick={handleClick}>
            {!toggleBtn ? <GiHamburgerMenu /> : <GoX />}
          </button>
        ) : null}
      </NavbarContainer>
      {toggleBtn && isMobile ? (
      
          <MobileMenu isMobile={isMobile}/>
      
      ) : null}
    </>
  );
};

export default Navbar;
