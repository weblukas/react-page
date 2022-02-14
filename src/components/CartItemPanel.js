import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledCartPanel = styled.div`
  background-color: #fff;
  width: 40%;
  min-width: 500px;
  margin: 1rem auto;
  border: 1px solid grey;
  border-radius: 8px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .thumbnail {
    width: 100px;
    height: 100px;
    margin: 20px;
    background-color: aquamarine;
    border-radius: 7px;
  }

  .item-amount {
      display: flex;
      align-items: center;
      justify-content: center;

      & > * {
          padding: 10px;
      }

      & > button {
          background: transparent;
          border: none;
          font-size: 2rem;
          cursor: pointer;
      }
  }

  
`;

const CartItemPanel = ({id, name, description, price}) => {

  const item = useSelector((state) => state.cartItems)
  console.log(item);
  return (
    <StyledCartPanel key={id}>
      <div className="thumbnail"></div>
      <h2 className="item-name">Jbl flip 6</h2>
      <div className="item-amount">
        <button>+</button>
          <div>1</div>
        <button>-</button>
      </div>
      <div className="item-info">
       
        <p>price: 124 zł </p>
      </div>
    </StyledCartPanel>
  );
};

export default CartItemPanel;
