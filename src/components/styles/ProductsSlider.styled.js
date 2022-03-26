import styled from "styled-components";

export const StyledProductsSlider = styled.section`
  margin-top: 5rem;
  display: grid;
  align-items: center;
  justify-items: center;


    /* @media screen and (max-width: 850px) {
      width: 200px;
      background-color: black;
    } */

  .flex-container {
    display: flex;
    position: relative;

    @media screen and (max-width: 1550px) {
      width: 800px;
    }

    @media screen and (max-width: 1150px) {
      width: 600px;
    }

    @media screen and (max-width: 850px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .img-container {
    width: 400px;
    height: 630px;
    /* background-color: #d9d9d9; */
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 5px 5px 40px #c4d2d6;

    @media screen and (max-width: 850px) {
      height: 0px;
      position: absolute;
      top: 50px
      
    }
  }
`;

export const StyledRadioContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  @media screen and (max-width: 850px) {
      height: 0px;
      position: absolute;
      top: 180px;
      
    }
`;

export const StyledDescriptionPanel = styled.section`
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

  @media screen and (max-width: 850px) {
      width: 70%;
      
    }

  .btn-container {
    padding: 2rem;
  }
`;
