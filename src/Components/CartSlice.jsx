import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
  };

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) { //two parameters: state (current state of the slice, typically includes the data relevant to the application.) and action (the dispatched action containing the payload).
            const existingItem = state.cartItems.find(item => item.id === action.payload.id); //checks if the item already exists in the cart by searching for its ID within state.cartItems.
            if (existingItem) {
              existingItem.quantity += 1; //if exists, increases the quantity of the existing item in the cart by 1.
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 }); //if not, adds the item to the cartItems array with a quantity of 1.
            }
          },
          removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload); //updates the cartItems array by filtering out the item with the ID provided in the action payload.
          },
          clearCart(state) {
            state.cartItems = []; //sets the cartItems array to an empty array, effectively clearing all items from the cart.
          },
          increaseItemQuantity(state, action) { //In this case, action.payload likely contains the identifier (id) of the item whose quantity needs to be increased.
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
          },
          decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
              itemToDecrease.quantity -= 1;
            }
          },
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;
  export default CartSlice.reducer;

