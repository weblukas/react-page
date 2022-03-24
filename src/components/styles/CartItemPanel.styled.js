import styled from "styled-components";

export const StyledCartItemPanel = styled.div`
  background-color: #fff;
  width: 40%;
  height: 150px;
  min-width: 500px;
  margin: 2rem auto;
  box-shadow: 3px 3px 10px #333;
  border-radius: 8px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

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

  .deleteBtn {
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
