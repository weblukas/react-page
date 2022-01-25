import React, { useState } from "react";
import styled from "styled-components";

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
    width: 700px;
    position: absolute;
    top: 70px;
    left: 20px;
  }

  .description-panel {
    background-color: #c4d2d6;
    color: #fff;
    width: 550px;
    height: 590px;
    margin-top: 20px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 5px 40px #c4d2d6;
    
  }
`;

const Gallery = () => {
  const [radio, setRadio] = useState("color1");
  return (
    <StyledGallery>
      <h1>Jbl speaker</h1>
      <div className="flex-container">
        <div className="img-container">
          <img src="images/photo1.png" alt="speaker" className="gallery-img" />
          <div>
          <input
            type="radio"
            name="color"
            value="color1"
            checked={radio === "color1"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />

          <input
            type="radio"
            name="color"
            value="color2"
            checked={radio === "color2"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />

          <input
            type="radio"
            name="color"
            value="color3"
            checked={radio === "color3"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
          </div>
        </div>
        <div className="description-panel">
          <h1>Jbl Flip 6</h1>

        
        </div>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
