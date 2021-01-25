import React from "react";
import Navbar from "../components/Navbar";
import payingMethods from "../payment-methods";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function PaymentPage({ total }) {
  return (
    <div>
      <Navbar />

      <div className="payment">
        <header>
          <h2>Please select your payment option</h2>
        </header>
        <div className="payment-body">
          {payingMethods.map((method, index) => {
            return (
              <a key={index} className="paying-method-images">
                <img src={method} alt="paying method" />
              </a>
            );
          })}
        </div>
        <Link className="btn home-btn" to="/">
          Back to Cart
        </Link>
        <footer>
          <div className="cart-total">
            <h4>
              total <span>€{total}</span>
            </h4>
          </div>
        </footer>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.total };
};

export default connect(mapStateToProps)(PaymentPage);
