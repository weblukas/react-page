import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  nrOfItemsInCart: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      state.total -= action.payload.price;
    },
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => {
        const removedProductsId = action.payload;
        return removedProductsId !== cartItem.uid;
      });
    },
    updateTotal: (state, action) => {
      let updatedTotal = state.cartItems.reduce((acc, currItem) => {
        return acc + currItem.price;
      }, 0);
      state.total = updatedTotal;
    },
    updateCartQuantity: (state, action) => {
      let updatedQuantity = state.cartItems.length;
      state.nrOfItemsInCart = updatedQuantity;
    },
  },
});

export const {
  addItem,
  removeItem,
  removeItems,
  updateTotal,
  updateCartQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
