import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { storeItemsApi } from "../helpers/api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [storeItemsApi.reducerPath]: storeItemsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeItemsApi.middleware),
});

setupListeners(store.dispatch);
