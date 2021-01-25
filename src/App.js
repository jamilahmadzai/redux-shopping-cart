import React from "react";
// components
import CartPage from "./pages/cartPage";
import PaymentPage from "./pages/paymentPage";
import { createStore } from "redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { reducer } from "./reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);

// console.log(store.getState());

function App() {
  // cart setup

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={CartPage} />
          <Route path="/payment" component={PaymentPage} />
          {/* <CartPage /> */}
          {/* <PaymentPage /> */}
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
