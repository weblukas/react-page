import React from "react";
import styled from "styled-components";

const StyledCartPanel = styled.div`
  background-color: #fff;
  width: 80%;
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

const CartItemPanel = ({name}) => {
  return (
    <StyledCartPanel>
      <div className="thumbnail"></div>
      <h2 className="item-name">{name}</h2>
      <div className="item-info">
        <p>color: </p>
        <p>price: </p>
      </div>
      <div className="item-amount">
        <button>+</button>
        <div>1</div>
        <button>-</button>
      </div>
    </StyledCartPanel>
  );
};

export default CartItemPanel;
