import React, { useState } from "react";
import styled from "styled-components";
import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";

// const StyledCart = styled.section`
//   margin: 4rem auto;
//   border-radius: 8px;
//   width: 60%;
//   max-width: 700px;
//   background: #fdfdfd;

//   .header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background-color: #fff;
//     color: #000;
//     border-top-left-radius: 6px;
//     border-top-right-radius: 6px;
//     padding: 1rem;
//     border-bottom: 2px solid #aeaeae;
//   }
// `;

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems, "to wyświetl");
  
  // const [isItemInCart, setIsItemInCart] = useState(false);


 
  return (
    <>
      <h1>cart</h1>
     
        { cartItems.length > 0 && cartItems.map((item) => {
          return <div  key={item.id}>
          <h4>{item.name}l</h4>
          <p>{item.description}description</p>
          <p>{item.price}cena</p>
          {/* <img src={image} alt="speaker" /> */}
          {/* <h1>{cartItems[0].name}</h1> */}
          </div>;
        })}

        <CartItemPanel />
    </>
  );
};

export default Cart;
