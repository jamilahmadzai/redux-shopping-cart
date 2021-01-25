import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../actions";

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          <button className="remove-btn" onClick={remove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>

        <div className="input-group plus-minus-input">
          <div className="input-group-button">
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
          </div>
          <input type="number" value={amount} className="input-group-field" />

          <div className="input-group-button">
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
          </div>
        </div>
      </div>
      <hr />
    </div>

    //  <div>
    //     <button className="amount-btn" onClick={increase}>
    //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    //         <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
    //       </svg>
    //     </button>

    //     <p className="amount">{amount}</p>

    //     <button className="amount-btn" onClick={decrease}>
    //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    //         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    //       </svg>
    //     </button>
    //   </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id: ownProps.id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id: ownProps.id } }),
    decrease: () =>
      dispatch({
        type: DECREASE,
        payload: { id: ownProps.id, amount: ownProps.amount },
      }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
