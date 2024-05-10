import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
