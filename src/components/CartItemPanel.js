import React from "react";
import { StyledCartItemPanel } from "./styles/CartItemPanel.styled";
import { useDispatch, useSelector } from "react-redux";
import { GoX } from "react-icons/go";
import {
  addItem,
  removeItem,
  removeItems,
} from "../features/cartSlice";


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
    <StyledCartItemPanel key={id}>
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
    </StyledCartItemPanel>
  );
};

export default CartItemPanel;
