import React, { useEffect, useState } from "react";
import Image from "./Image";
import Button from "./Button";
import Input from "./Input";
import { StyledProductsSlider } from "./styles/ProductsSlider.styled";
import { StyledRadioContainer } from "./styles/ProductsSlider.styled";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import useMediaQuery from "../helpers/hooks/useMediaQuery";
import { deviceSize } from "../helpers/responsive/deviceSize";
import { logDOM } from "@testing-library/react";

const ProductSlider = ({
  product,
  title,
  description,
  images,
  defaultImage,
  price,
  uid,
  colors
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [checked, setChecked] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${deviceSize.mobile}px)`);

  const handleChange = (index, color) => {
    setImgIndex(index);
    console.log(color)
  };

  useEffect(() => {
    setChecked(true);
  }, [checked]);

  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <StyledProductsSlider>
      <div className="grid-container">
        <div className="img-container">
          <Image
            src={!images ? defaultImage : images[imgIndex]}
            // isSelected={isSelected}
            className={` gallery-img ${"fade-in"}`}
          />

          <StyledRadioContainer>
            {colors &&
              colors.map((color, index) => {
                
                return (
                  <Input
                    key={index}
                    // checked={isSelected("black")}
                    value={color}
                    handleChange={() => handleChange(index, checked, color)}
                  />
                );
              })}
          </StyledRadioContainer>
        </div>

        <h1 className="title">{isMobile? `${title.replace(/^(.{40}[^\s]*).*/, "$1")}` : title}</h1>

        <Button addToCart={() => addToCart(product)} />
        <h3 className="price">{price} zł</h3>
        <p className="description">
          {isMobile
            ? `${description.replace(/^(.{150}[^\s]*).*/, "$1")} ...`
            : description}
        </p>
      </div>
    </StyledProductsSlider>
  );
};

export default ProductSlider;
