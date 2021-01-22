import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";
import cartItems from "./cart-items";

const initailState = {
  cart: cartItems,
  total: 270,
  amount: 78,
};

export const reducer = (state = initailState, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], amount: 0 };
  }
  if (action.type === INCREASE) {
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === DECREASE) {
    let newCart = [];
    if (action.payload.amount === 1) {
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    } else {
      newCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => {
        return item.id !== action.payload.id;
      }),
    };
  }
  return state;
};
