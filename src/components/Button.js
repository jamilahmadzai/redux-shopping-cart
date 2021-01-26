import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE } from "../actions";

function Button({ increase, decrease }) {
  const increaseButton = (
    <button
      type="button"
      className="button hollow circle"
      data-quantity="minus"
      data-field="quantity"
      onClick={decrease}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-dash-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </button>
  );
  const decreaseButton = (
    <button
      type="button"
      className="button hollow circle"
      data-quantity="plus"
      data-field="quantity"
      onClick={increase}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-plus-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </button>
  );

  let [width, setWidth] = useState(window.innerWidth);

  const resizeListener = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);
    let width = window.innerWidth;
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [window.innerWidth]);
  let plusButton = width > 500 ? Button.increaseButton : Button.decreaseButton;
  let minusButton = width > 500 ? Button.decreaseButton : Button.increaseButton;
  return <div>{(plusButton, minusButton)}</div>;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: () => dispatch({ type: INCREASE, payload: { id: ownProps.id } }),
    decrease: () =>
      dispatch({
        type: DECREASE,
        payload: { id: ownProps.id, amount: ownProps.amount },
      }),
  };
};

export default connect(mapDispatchToProps)(Button);
