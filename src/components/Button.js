import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import GalleryContext from "../app/galleryContex";
import { useGetStoreItemsQuery } from "../helpers/api";

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  margin: 1rem;
  border: none;
  background-color: #df82d2;
  border-radius: 7px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;

const Button = ({handleAddItem, productId}) => {
  
  // const { data } =
  // useGetStoreItemsQuery();
  
  // console.log(data);
  
//const ctx = useContext(GalleryContext)
 // console.log(ctx.handleAddItem)
  //ctx.handleAddItem(ctx.productId) nie działą
 
 
  const handleClick = ()=>{
    handleAddItem(productId)
  }
  return (
    <StyledButton
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      id={productId}
      
      // ref={addItemBtn}
    >
      Add to cart
    </StyledButton>
  );
};

export default Button;
