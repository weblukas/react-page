import styled from "styled-components";

export const StyledProductsSlide = styled.section`
  margin-top: 5rem;

  @media screen and (max-width: 450px){
    margin-top: 1.5rem;
  }

  .grid-container {
    width: 50vw;
    height: auto;
    margin: 10px auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 5px 100px 50px 200px;

    border-radius: 10px;
    background: #ecf0f3;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;

    @media screen and (max-width: 1150px) {
      width: 65vw;
      grid-template-columns: 1fr;
      grid-template-rows: 150px 200px 100px 50px 200px;
    }

    @media screen and (max-width: 1450px) {
      width: 75vw;
    }

    @media screen and (max-width: 450px) {
      width: 100vw;
      height: auto;
      grid-template-rows: 100px 200px 100px 50px 200px;
      box-shadow: none;
    }
  }

  .img-container {
    grid-column: 1;
    grid-row: 1/-1;
    display: grid;
    align-items: center;
    justify-content: end;

    position: relative;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    @media screen and (max-width: 1150px) {
      grid-row: 2;
      grid-column: span 2;
      justify-content: center;
    }
  }

  .title {
    grid-column: 2;
    grid-row: 1;
    align-self: end;
    padding: 0 40px;

    @media screen and (max-width: 1150px) {
      grid-column: span 2;
    }
  }

  .price {
    grid-column: 2;
    grid-row: 4;
    @media screen and (max-width: 1150px) {
      grid-column: span 2;
    }
  }

  .description {
    grid-column: 2;
    grid-row: 5;
    padding: 0 40px;
    font-size: 18px;

    @media screen and (max-width: 1150px) {
      grid-column: span 2;
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

  .btn-container {
    padding: 2rem;
  }
`;
