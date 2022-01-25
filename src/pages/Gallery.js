import React from "react";
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

const StyledList = styled.li`
     position: relative;
  padding: 10px;
  padding-left: 40px;
  height: 30px;
  list-style: none;
  
`

const StyledLabel = styled.label`
    list-style: none;

`;

const StyledInput = styled.input`
 
  display: inline-block;
  vertical-align: middle;
  z-index: 100;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 30px;
  position: absolute;
  left: -100px;
  top: calc(50% - 15px);
  cursor: pointer;

`;

const StyledDiv = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  left: -3px;
  top: 2px;
  border: 5px solid rgb(20, 33, 218);
  opacity: 0;
  border-radius: 5%;
`

const Gallery = () => {
  return (
    <StyledGallery>
      <h1>Jbl speaker</h1>
      <div className="flex-container">
        <div className="img-container">
          <img src="images/photo1.png" alt="speaker" className="gallery-img" />
        </div>
        <div className="description-panel">
          <h1>Jbl Flip 6</h1>
          <div class="form-element">
            <StyledList>
              <StyledInput checked type="radio" name="color" value="color-1"/>
              <StyledLabel></StyledLabel>
              <div class="bullet">
                <div class="line zero"></div>
              </div>
            </StyledList>
            <StyledList>
              <StyledInput type="radio" name="color" value="color-1"/>
              <StyledLabel></StyledLabel>
              <StyledDiv>
                <div class="line zero"></div>
              </StyledDiv>
            </StyledList>
    
          </div>
        </div>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
