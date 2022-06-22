import { createSlice } from "@reduxjs/toolkit";

// get user from local storage
const cart = JSON.parse(localStorage.getItem("userCart"));

// our initial state
const initialState = cart
  ? cart
  : {
      cartItems: [],
      cartTotalQuantity: 0,
      cartTotalPrice: 0,
      cartTotalItems: 0,
    };

// our reducer
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { cartItem } = action.payload;
      const { cartItems } = state;
      const productIndex = cartItems.findIndex(
        (item) => item.id === cartItem.id
      );
      if (productIndex === -1) {
        state.cartItems.push(cartItem);
      } else {
        state.cartItems[productIndex].quantity = cartItem.quantity;
      }
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartTotalItems = state.cartItems.length;
      // save to localStrorage
      localStorage.setItem("userCart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const { cartItem } = action.payload;

      const { cartItems } = state;
      const productIndex = cartItems.findIndex(
        (item) => item.id === cartItem.id
      );
      if (productIndex !== -1) {
        state.cartItems.splice(productIndex, 1);
      }
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.cartTotalItems = state.cartItems.length;
      // save to localStrorage
      localStorage.setItem("userCart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, getCartItems } = cartSlice.actions;

export default cartSlice.reducer;
