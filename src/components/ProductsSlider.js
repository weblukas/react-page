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

const ProductSlider = ({
  product,
  title,
  description,
  images,
  defaultImage,
  price,
  uid,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [checked, setChecked] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${deviceSize.mobile}px)`);

  const handleChange = (index) => {
    setImgIndex(index);
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
            {images &&
              images.map((image, index) => {
                return (
                  <Input
                    key={index}
                    // checked={isSelected("black")}
                    // value={index}
                    handleChange={() => handleChange(index, checked)}
                  />
                );
              })}
          </StyledRadioContainer>
        </div>

        <h1 className="title">{title}</h1>

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
