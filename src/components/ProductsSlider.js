import React, { useState } from "react";
import Image from "./Image";
import Button from "./Button";
import Input from "./Input";
import { StyledProductsSlider } from "./styles/ProductsSlider.styled";
import { StyledRadioContainer } from "./styles/ProductsSlider.styled";
import { StyledDescriptionPanel } from "./styles/ProductsSlider.styled";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

const ProductSlider = ({
  product,
  title,
  description,
  images,
  defaultImage,
  price,
  id,
}) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleChange = (index) => {
    setImgIndex(index);
  };

  // if I have input index I can setimgIndex to index
  // const index = 2;
  const dispatch = useDispatch();

  const addToCart = (product) => {
    console.log("klik home");
    dispatch(addItem(product));
  };

  return (
    <StyledProductsSlider>
      <div className="flex-container">
        <div className="img-container">
          <Image
            src={!images ? defaultImage : images[imgIndex]}
            // isSelected={isSelected}
            className={` gallery-img ${"fade-in"}`}
          />

          <StyledRadioContainer>
            {images &&
              images.map((image, index) => {
                return (
                  <Input
                    key={index}
                    // checked={isSelected("black")}
                    // value={index}
                    handleChange={() => handleChange(index)}
                  />
                );
              })}
          </StyledRadioContainer>
        </div>
        <StyledDescriptionPanel>
          <h1>{title}</h1>
          <div className="btn-container">
            <Button addToCart={() => addToCart(product)} />
            <h3>{price} zł</h3>
            <p>{description}</p>
          </div>
        </StyledDescriptionPanel>
      </div>
    </StyledProductsSlider>
  );
};

export default ProductSlider;
