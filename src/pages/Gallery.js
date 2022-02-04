import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import Image from "../components/Image";
import Input from "../components/Input";
import { addItems } from "../features/cartSlice";
import storeItems from "../helpers/data";

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
`;

const StyledRadioContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
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

  const dispatch = useDispatch();

  const addItem = ()=>{
    console.log('doddaj');
    dispatch(addItems(radioValue))
  }

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
        
          <StyledRadioContainer>
            <Input
              type="radio"
              name="color"
              value="black"
              defaultChecked="true"
              // checked={isSelected("black")}
              onChange={handleChange}
            />

            <Input
              type="radio"
              name="color"
              value="red"
              // checked={isSelected("color2")}
              onChange={handleChange}
            />

            <Input
              type="radio"
              name="color"
              value="green"
              // checked={isSelected("color3")}
              onChange={handleChange}
            />
            <Input
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
            <Button addItem={addItem}/>
            {/* czy lepiej onClick={addItem} */}
            <span>Jbl Flip 6 {radioValue} color</span>
            <h3>Price 699 zł</h3>
          </div>
        </StyledDescriptionPanel>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
