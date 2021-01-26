import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { clearCart, GET_TOTALS, CHECKOUT } from "../actions";
import PaymentPage from "../pages/paymentPage";
import { Link } from "react-router-dom";

const CartContainer = ({ cart = [], total, clearCart, getTotals }) => {
  useEffect(() => {
    return getTotals;
  });

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  const checkout = () => {
    return <Link to="/PaymentPage"></Link>;
  };

  return (
    <section className="cart">
      <header>
        <h2>Your cart</h2>
      </header>

      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>

      <footer>
        <div className="cart-total">
          <h4>
            total <span>€{total}</span>
          </h4>
        </div>
        <div className="btns">
          <button className="btn clear-btn" onClick={clearCart}>
            clear cart
          </button>
          <Link className="btn checkout-btn" to="/payment" onClick={checkout}>
            checkout
          </Link>
        </div>
      </footer>
    </section>
  );
};

const mapStateToProps = (state, dispatch) => {
  return { cart: state.cart, total: state.total };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
    getTotals: () => dispatch({ type: GET_TOTALS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
