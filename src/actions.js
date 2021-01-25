export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const CHECKOUT = "CHECKOUT";

// export const remove = () => {
//   return {
//     type: REMOVE,
//     payload: 1,
//   };
// };

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

// export const increase = () => {
//   return {
//     type: INCREASE,
//   };
// };

// export const decrease = () => {
//   return {
//     type: DECREASE,
//   };
// };
