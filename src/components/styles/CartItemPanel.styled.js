import styled from "styled-components";

export const StyledCartItemPanel = styled.div`
  height: 160px;
  max-width: 600px;
  margin: 2rem auto;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
  border-radius: 8px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  @media screen and (max-width: 600px) {
    height: 300px;
    padding-right: 1.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 150px;
  }

  .thumbnail {
    width: 100px;
    max-height: 120px;
    margin: 20px;
  }

  .item-amount {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
      padding: 10px;
    }

    & > button {
      background: transparent;
      border: none;
      font-size: 2rem;
      cursor: pointer;
    }
  }

  .item-price {
    font-size: 1.3rem;
  }

  .deleteBtn {
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
