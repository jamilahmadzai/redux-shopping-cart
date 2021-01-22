import { DECREASE, INCREASE } from "./actions";
import cartItems from "./cart-items";

const initailState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const reducer = (state = initailState, action) => {
  switch (action.type) {
  }
  return state;
};
