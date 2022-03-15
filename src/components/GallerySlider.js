import React, { useState } from "react";
import styled from "styled-components";
import Image from "./Image";
import Button from "./Button";
import Input from "./Input";

const StyledGallery = styled.section`
  margin-top: 5rem;
  display: grid;
  align-items: center;
  justify-items: center;

  .flex-container {
    display: flex;
    position: relative;

    @media screen and (max-width: 1550px) {
      width: 800px;
    }

    @media screen and (max-width: 1150px) {
      width: 600px;
    }
  }

  .img-container {
    width: 400px;
    height: 630px;
    /* background-color: #d9d9d9; */
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 5px 5px 40px #c4d2d6;
  }
`;

const StyledRadioContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

const StyledDescriptionPanel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e5e9e8;
  color: #000;
  font-size: 1.3rem;
  width: 550px;
  height: 590px;
  margin-top: 20px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 5px 40px #c4d2d6;

  .btn-container {
    padding: 2rem;
  }
`;

const ProductSlider = ({
  title,
  description,
  images,
  defaultImage,
  price,
  id,
  handleAddItem,
}) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleChange = (index) => {
    setImgIndex(index);
  };

  // if I have input index I can setimgIndex to index
  // const index = 2;

  const handleClick = (event) => {
    const {
      target: { id },
    } = event;
    handleAddItem(id);
    // console.log('klik home');
  };

  return (
    <StyledGallery>
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
            <Button onClick={handleClick} id={id} />
            <h3>{price} zł</h3>
            <p>{description}</p>
          </div>
        </StyledDescriptionPanel>
      </div>
    </StyledGallery>
  );
};

export default ProductSlider;
