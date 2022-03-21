import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  nrOfItemsInCart: 0

};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.cartItems.push(action.payload);
      state.total += action.payload.price;
      state.nrOfItemsInCart ++;
    },
    removeItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      state.total -= action.payload.price;
      state.nrOfItemsInCart --;
    },
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => {
        const removedProductsId = action.payload;
        return removedProductsId !== cartItem.uid;
      });
      
    },
  },
});

export const { addItem, removeItem, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
