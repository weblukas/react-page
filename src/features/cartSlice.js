import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // allItems: data,
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
      // const uid = action.payload;

      state.cartItems.push(action.payload);
      state.total = getTotalPrice(state.cartItems);

      // state.total += action.payload.price; // to bedzie problematyczne
    },
    removeItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      state.total = getTotalPrice(state.cartItems);
      // state.total -= action.payload.price; // to bedzie problematyczne
    },
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => {
        const removedProductsId = action.payload;
        return removedProductsId !== cartItem.uid;
      });
    },
    updateTotal: (state, action) => {
      const updatedTotal = getTotalPrice(state.cartItems);
      state.total = updatedTotal;
    },
    updateCartQuantity: (state, action) => {
      const updatedQuantity = state.cartItems.length;
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
