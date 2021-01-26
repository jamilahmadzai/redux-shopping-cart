import React from "react";
import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  EMPTY_CART,
} from "./actions";
import cartItems from "./cart-items";
import PaymentPage from "./pages/paymentPage";

const initailState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const reducer = (state = initailState, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], amount: 0 };
  }

  if (action.type === EMPTY_CART) {
    return { ...state, cart: cartItems, amount: 0, total: 0 };
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

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
};
