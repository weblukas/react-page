import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Image from "../components/Image";

const StyledDescriptionPanel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #c4d2d6;
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

const StyledGallery = styled.section`
  margin-top: 5rem;
  display: grid;
  align-items: center;
  justify-items: center;

  .flex-container {
    display: flex;
    position: relative;
  }

  .img-container {
    width: 400px;
    height: 630px;
    background-color: #d9d9d9;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 5px 5px 40px #c4d2d6;
  }
  .gallery-img {
    width: 400px;
    position: absolute;
    top: 70px;
    left: 200px;
  }

  .fade-in {
    animation: 0.5s ease 0.5s normal forwards 1 appear;
    opacity: 0;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
`;

const StyledRadioContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

const StyledInput = styled.input`
  margin: 1rem;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 1;
    transform: translate(-4px, -34px);
    z-index: 10;
  }

  &:nth-child(1)::after {
    background-color: black;
  }

  &:nth-child(2)::after {
    background-color: #e33a3f;
  }

  &:nth-child(3)::after {
    background-color: #90ae9e;
  }

  &:nth-child(4)::after {
    background-color: #3d5367;
  }
  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    background-color: white;
    opacity: 0;
    border-radius: 50%;
    transform: translate(-9px, -9px);
    z-index: 5;
  }

  &:checked::before {
    opacity: 1;
  }
`;

const Gallery = () => {
  const [radioValue, setRadio] = useState("black");
  const [img, setImg] = useState(`images/${radioValue}.png`);
  const [isSelected, setIsSelected] = useState(false);
  // const isSelected = (radioValue) => true;

  // setting image according to checked radioValue btn
  useEffect(() => {
    setImg(`images/${radioValue}.png`);

    // if (radioValue === "red") {
    //   setImg("images/red.png")... possible approach
  }, [radioValue]);
  // wrzucasz radioValue jako dependecy bo odpalasz to kiedy się zmienia radioValue

  const handleChange = (e) => {
    setRadio(e.target.value);
    setIsSelected(true);
    // dodaj klasę z animacją w momencie handle change
  };

  return (
    <StyledGallery>
      <h1>Jbl speaker</h1>
      <div className="flex-container">
        <div className="img-container">
        <Image 
          src={img}
          isSelected={isSelected}
          className={` gallery-img ${isSelected && "fade-in"}`}
         />
          {/* <img
            src={img}
            alt="speaker"
            className={` gallery-img ${isSelected && "fade-in"}`}
          /> */}
          <StyledRadioContainer>
            <StyledInput
              type="radio"
              name="color"
              value="black"
              defaultChecked="true"
              // checked={isSelected("black")}
              onChange={handleChange}
            />

            <StyledInput
              type="radio"
              name="color"
              value="red"
              // checked={isSelected("color2")}
              onChange={handleChange}
            />

            <StyledInput
              type="radio"
              name="color"
              value="green"
              // checked={isSelected("color3")}
              onChange={handleChange}
            />
            <StyledInput
              type="radio"
              name="color"
              value="blue"
              // checked={isSelected("color3")}
              onChange={handleChange}
            />
          </StyledRadioContainer>
        </div>
        <StyledDescriptionPanel>
          <h1>Jbl Flip 6</h1>
          <div className="btn-container">
            <Button />
            <span>Jbl Flip 6 {radioValue} color</span>
            <h3>Price 699 zł</h3>
          </div>
        </StyledDescriptionPanel>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
