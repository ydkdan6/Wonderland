import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbars/Navbar';
import Advert from './Advert/Advert';
import CheckoutForm from "./component/CheckoutForm";
import AddToCart from "./component/Addtocart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Navbar />
          <Advert />
          <Switch>
            <Route path='/addtocart' component={AddToCart} />
            <Route path="/checkout" component={CheckoutForm} />
            <Route path='/' component={Home} />
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
