import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMobileMenu = styled.div`
  width: 80vw;
  background-color: #fff;
  margin: 0;
  border-radius: 8px;
  position: relative;
  z-index: 20;
`;

export const MobileNavList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const NavLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  color: #343360;
  font-size: 1.3rem;
  color: #343360;
`;

export const ModalBtn = styled.button`
  color: #343360;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: absolute;
  top: 30px;
  right: 30px;
`;
