import React, { useState } from "react";
import Image from "./Image";
import Button from "./Button";
import Input from "./Input";
import { StyledProductsSlide } from "./styles/ProductsSlide.styled";
import { StyledRadioContainer } from "./styles/ProductsSlide.styled";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import useMediaQuery from "../helpers/hooks/useMediaQuery";
import { deviceSize } from "../helpers/responsive/deviceSize";

const ProductSlide = ({
  product,
  title,
  description,
  images,
  defaultImage,
  price,
  uid,
  colors,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [checkedIndex, setCheckedIndex] = useState(null);

  const isMobile = useMediaQuery(`(max-width: ${deviceSize.mobile}px)`);
  const isLaptop = useMediaQuery(`(max-width: ${deviceSize.laptop}px)`);

  const handleChange = (index, color) => {
    setImgIndex(index);
    setCheckedIndex(index);
  };

  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <StyledProductsSlide>
      <div className="grid-container">
        <div className="img-container">
          <Image
            src={!images ? defaultImage : images[imgIndex]}
            className="fade-in"
          />
          <StyledRadioContainer>
            {colors &&
              colors.map((color, index) => {
                const isSomeChecked = checkedIndex != null;
                const isCurrentChecked =
                  isSomeChecked && checkedIndex === index;
                return (
                  <Input
                    key={index}
                    name={uid}
                    checked={isCurrentChecked}
                    value={color}
                    handleChange={() => handleChange(index, color)}
                  />
                );
              })}
          </StyledRadioContainer>
        </div>

        <h1 className="title">
          {isMobile ? `${title.replace(/^(.{40}[^\s]*).*/, "$1")}` : title}
        </h1>

        <Button addToCart={() => addToCart(product)} />
        <h3 className="price">{price} zł</h3>
        <p className="description">
          {isMobile || isLaptop
            ? `${description.replace(/^(.{150}[^\s]*).*/, "$1")} ...`
            : description}
        </p>
      </div>
    </StyledProductsSlide>
  );
};

export default ProductSlide;
