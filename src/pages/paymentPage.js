import React from "react";
import Navbar from "../components/Navbar";
import payingMethods from "../payment-methods";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function PaymentPage({ total }) {
  return (
    <div>
      <Navbar />

      <section className="payment">
        <header>
          <h2>Please select your payment option</h2>
        </header>
        <div className="payment-body">
          {payingMethods.map((method, index) => {
            return (
              <Link to="/address" key={index} className="paying-method-images">
                <img src={method} alt="paying method" />
              </Link>
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
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { total: state.total };
};

export default connect(mapStateToProps)(PaymentPage);
