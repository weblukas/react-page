import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GoX } from "react-icons/go";
import { addItem, removeItem, removeItems } from "../features/cartSlice";

const StyledCartPanel = styled.div`
  background-color: #fff;
  width: 40%;
  height: 150px;
  min-width: 500px;
  margin: 2rem auto;
  box-shadow: 3px 3px 10px #333;
  border-radius: 8px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  .thumbnail {
    width: 100px;
    /* height: 100px; */
    margin: 20px;
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

  .deleteBtn {
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;

const CartItemPanel = ({ uid, title, price, index, image, defaultImage }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [sameItemCount, setSameItemCount] = useState(1);

  const fetchSameProduct = (uid) =>
    cartItems.find((item) => item.uid === uid);

  const handleAddSameItem = () => {
    const sameProduct = fetchSameProduct(uid);
    dispatch(addItem(sameProduct));

    setSameItemCount(sameItemCount + 1);
  };

  const handleRemoveSameItem = () => {
    const sameProduct = fetchSameProduct(uid);

    dispatch(removeItem(sameProduct));

    setSameItemCount(sameItemCount - 1);
    if (sameItemCount <= 0) {
      dispatch(removeItems(uid));
    }
  };
  // usunięcie wszyskich produktów o tym samym ItemId
  const handleRemoveAllSameItems = () => {
    // const sameItems = fetchSameItems(ItemId);

    dispatch(removeItems(uid));
  };

  
  return (
    <StyledCartPanel key={uid}>
      <div>
        <img src={defaultImage ? defaultImage : image } alt="thumbnail" className="thumbnail" />
      </div>
      <h2 className="item-name">{title}</h2>
      <div className="item-amount">
        <button onClick={handleRemoveSameItem}>-</button>
        <div>{sameItemCount}</div>
        <button onClick={handleAddSameItem}>+</button>
      </div>
      <div className="item-info">
        <p> zł {price}</p>
      </div>
      <GoX className="deleteBtn" onClick={handleRemoveAllSameItems} />
    </StyledCartPanel>
  );
};

export default CartItemPanel;
