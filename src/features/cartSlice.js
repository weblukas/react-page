import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: 0,
      name: "",
      description: "",
      price: 0,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      // biblioteka immer działa under the hood i można mutować stan
      // tu trochę więcej na ten temat: https://redux-toolkit.js.org/usage/immer-reducers
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {},
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
