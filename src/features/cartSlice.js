import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  nrOfItemsInCart: 0,
};

const getTotalPrice = (cartItems) =>
  cartItems.reduce((acc, currItem) => acc + currItem.price, 0);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.total = getTotalPrice(state.cartItems);
      state.nrOfItemsInCart = state.cartItems.length;
    },
    removeItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      state.total = getTotalPrice(state.cartItems);
      state.nrOfItemsInCart = state.cartItems.length;
    },
    removeItems: (state, action) => {

     console.log(action.payload);// undefined
      state.cartItems = state.cartItems.filter((cartItem) => {
        const removedProductsId = action.payload;
        return removedProductsId !== cartItem.id;
      });
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
