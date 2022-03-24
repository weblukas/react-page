import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GoX } from "react-icons/go";
import {
  addItem,
  removeItem,
  removeItems,
} from "../features/cartSlice";

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
    max-height: 120px;
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

const findAllMatchingItems = (allItems, searchedItem) =>
  allItems.filter((item) => item.id === searchedItem.id).length;

const CartItemPanel = ({
  cartItem,
  id,
  title,
  price,
  index,
  image,
  defaultImage,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const sameItemCount = findAllMatchingItems(cartItems, cartItem);
  const handleAddSameItem = () => {
    dispatch(addItem(cartItem));
  };

  const handleRemoveSameItem = () => {
    dispatch(removeItem(cartItem));
    if (sameItemCount <= 0) {
      dispatch(removeItems(id));
    }
  };
  // usunięcie wszyskich produktów o tym samym ItemId
  const handleRemoveAllSameItems = (id) => {
    // const sameItems = fetchSameItems(ItemId);
    console.log("remove same items", );
    dispatch(removeItems(id));
  };

  return (
    <StyledCartPanel key={id}>
      <div>
        <img
          src={defaultImage ? defaultImage : image}
          alt="thumbnail"
          className="thumbnail"
        />
      </div>
      <p>gdzie jest{id}</p>
      <h4 className="item-name">{title}</h4>
      <div className="item-amount">
        <button onClick={handleRemoveSameItem}>-</button>
        <div>{sameItemCount}</div>
        <button onClick={handleAddSameItem}>+</button>
      </div>
      <div className="item-info">
        <p> zł {price}</p>
      </div>
      <GoX className="deleteBtn" onClick={()=> handleRemoveAllSameItems(id)} />
    </StyledCartPanel>
  );
};

export default CartItemPanel;
