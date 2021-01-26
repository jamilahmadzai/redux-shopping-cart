import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AddressPage() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    window.location.reload();
  };

  const requiredFields =
    state.firstName &&
    state.lastName &&
    state.address1 &&
    state.city &&
    state.state &&
    state.postalCode &&
    state.country;
  return (
    <div>
      <Navbar />
      <section className="address">
        <h4>
          <span>fields with * are mandotary</span>
        </h4>
        <form className="address-center">
          <h4>Billing address</h4>
          <br />
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            required
            placeholder="First Name *"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            required
            placeholder="Last Name *"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address1"
            value={state.address1}
            required
            placeholder="Address Line 1 *"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address2"
            value={state.address2}
            placeholder="Address Line 2 "
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            value={state.city}
            required
            placeholder="City *"
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            value={state.state}
            required
            placeholder="State *"
            onChange={handleChange}
          />
          <input
            type="number"
            name="postalCode"
            value={state.postalCode}
            required
            placeholder="Postal Code *"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            value={state.country}
            required
            placeholder="Country *"
            onChange={handleChange}
          />
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
          <Link
            to={requiredFields ? "/order" : "/address"}
            className="btn confirm-btn"
          >
            confirm order
          </Link>
        </form>
        <hr />
        <footer className="footer">
          <div className="btns">
            <Link className="btn home-btn" to="/">
              Back to Cart
            </Link>
            <Link to="/payment" className="btn payment-btn">
              payment method
            </Link>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default AddressPage;
