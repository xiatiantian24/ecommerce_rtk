import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
const store = configureStore({
  reducer: { //The reducer property is specified as an object where each key represents a slice of state, and each value represents the corresponding reducer function.
    cart: cartReducer, //In this case, the cartReducer is associated with the cart slice of state. This means that the state managed by the cartReducer will be stored under the cart key in the Redux store.
  },
});

export default store;