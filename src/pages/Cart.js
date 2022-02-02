import React from "react";
import styled from "styled-components";
import CartPanel from "../components/CartPanel";

const StyledCart = styled.section`
  margin: 4rem auto;
  border-radius: 8px;
  width: 60%;
  max-width: 700px;
  background: #fdfdfd;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    color: #000;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 1rem;
    border-bottom: 2px solid #aeaeae;
    
  }


`;

const Cart = () => {
  return (
    <StyledCart>
      <div className="header">
        <h1>My Cart</h1>
        <span>699 zł</span>
      </div>
      <CartPanel />
      
    </StyledCart>
  );
};

export default Cart;
