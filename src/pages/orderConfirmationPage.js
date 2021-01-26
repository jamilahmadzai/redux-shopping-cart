import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { EMPTY_CART } from "../actions";
import { connect } from "react-redux";

function OrderConfirmationPage({ emptyCart }) {
  return (
    <div>
      <Navbar />
      <section className="order">
        <div className="order-center">
          <header>
            <h2>Thank You</h2>
            <h4 className="order-confirm">
              Your order has been confirmed, we will inform you once we have
              dispatched it
            </h4>
          </header>
          <Link className="btn home-btn" to="/" onClick={emptyCart}>
            Back to Cart
          </Link>
        </div>
      </section>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch({ type: EMPTY_CART }),
  };
};

export default connect(null, mapDispatchToProps)(OrderConfirmationPage);
