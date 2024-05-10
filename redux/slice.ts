import { createSlice } from '@reduxjs/toolkit';


interface Product {
  _id: string;
  image: string;
  title: string;
  details: string;
  price: number;
  quantity: number; 
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.items.find((item) => item._id === action.payload._id);
  
        if (existingItem) {
          
          existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
          
          state.items.push({ ...action.payload, quantity: 1 });
        }
      },
      removeFromCart: (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload._id);
      },
      updateQuantity: (state, action) => {
        const item = state.items.find((item) => item._id === action.payload._id);
        if (item && action.payload.quantity > 0) {
          item.quantity = action.payload.quantity;
        } else {
          state.items = state.items.filter((item) => item._id !== action.payload._id);
        }
      },
    },
  });
  

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
