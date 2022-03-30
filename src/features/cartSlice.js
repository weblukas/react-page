import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  nrOfItemsInCart: 0,
};

const getTotalPrice = (cartItems) =>
  cartItems.reduce((acc, currItem) => acc + currItem.price, 0).toFixed(2);

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
      // console.log(action.payload.uid);
      const foundedItem = state.cartItems
        .map(({ uid }) => uid)
        .lastIndexOf(action.payload.uid);
  
      state.cartItems.splice(foundedItem, 1);
      state.total = getTotalPrice(state.cartItems);
      state.nrOfItemsInCart = state.cartItems.length;
    },
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => {
        const removedProductsId = action.payload;
        console.log(removedProductsId);
        return removedProductsId !== cartItem.uid;
      });
      state.nrOfItemsInCart = state.cartItems.length;
      state.total = getTotalPrice(state.cartItems);
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
