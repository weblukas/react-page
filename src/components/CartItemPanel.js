import React from "react";
import { StyledCartItemPanel } from "./styles/CartItemPanel.styled";
import { useDispatch, useSelector } from "react-redux";
import { GoX } from "react-icons/go";
import useMediaQuery from "../helpers/hooks/useMediaQuery";
import { deviceSize } from "../helpers/responsive/deviceSize";
import {
  addItem,
  removeItem,
  removeItems,
} from "../features/cartSlice";


const findAllMatchingItems = (allItems, searchedItem) =>
  allItems.filter((item) => item.uid === searchedItem.uid).length;

const CartItemPanel = ({
  cartItem,
  uid,
  title,
  price,
  index,
  image,
  defaultImage,
}) => {

  const isMobile = useMediaQuery(`(max-width: ${deviceSize.mobile}px)`);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const sameItemCount = findAllMatchingItems(cartItems, cartItem);
  const handleAddSameItem = () => {
    dispatch(addItem(cartItem));
  };

  const handleRemoveSameItem = () => {
    dispatch(removeItem(cartItem));
    if (sameItemCount <= 0) {
      dispatch(removeItems(uid));
    }
  };
 
  const handleRemoveAllSameItems = (uid) => {
    dispatch(removeItems(uid));
  };

  return (
    <StyledCartItemPanel key={uid}>
      <div>
        <img
          src={defaultImage ? defaultImage : image}
          alt="thumbnail"
          className="thumbnail"
        />
      </div>
      <h3 className="item-name"> {isMobile ? `${title.replace(/^(.{40}[^\s]*).*/, "$1")}` : title}</h3>
      <div className="item-amount">
        <button onClick={handleRemoveSameItem}>-</button>
        <div>{sameItemCount}</div>
        <button onClick={handleAddSameItem}>+</button>
      </div>
      <div className="item-info">
        <h3> zł {price}</h3>
      </div>
      <GoX className="deleteBtn" onClick={()=> handleRemoveAllSameItems(uid)} />
    </StyledCartItemPanel>
  );
};

export default CartItemPanel;
