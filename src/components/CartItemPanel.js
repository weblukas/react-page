import React, {useState} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GoX } from "react-icons/go";
import { addItem, removeItem } from "../features/cartSlice";
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

const CartItemPanel = ({ id, name, price, index, images }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [sameItemCount, setSameItemCount] = useState(1)
  
  const fetchSameProduct = (id) => cartItems.find((item) => item.id === id);
  
  const handleAddSameItem = () => {
    const sameProduct = fetchSameProduct(id)
    console.log(sameProduct, cartItems.length);
    dispatch(addItem(sameProduct))
     
      setSameItemCount(sameItemCount + 1) 
  };

  const handleRemoveSameItem = () => {
      const sameProduct = fetchSameProduct(id)
    console.log(sameProduct, cartItems.length);
    dispatch(addItem(sameProduct))
     
      setSameItemCount(sameItemCount + 1) 

  };

  const handleRemoveItem = () => {
    dispatch(removeItem(index));
    
  };

  const thumbnail = images[0];
  return (
    <StyledCartPanel key={id}>
      <div>
      <img src={thumbnail} alt='thumbnail' className="thumbnail" />
      </div>
      <h2 className="item-name">{name}</h2>
      <div className="item-amount">
        <button onClick={handleRemoveSameItem}>-</button>
        <div>{sameItemCount}</div>
        <button onClick={handleAddSameItem}>+</button>
      </div>
      <div className="item-info">
        <p> zł {price}</p>
      </div>
      <GoX className="deleteBtn" onClick={handleRemoveItem} />
    </StyledCartPanel>
  );
};

export default CartItemPanel;
