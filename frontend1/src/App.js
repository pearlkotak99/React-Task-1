import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
              <header className="header">
                  <div className="brand">
                      <Link to="/" >Shopping Cart</Link>
                  </div>
                  <div className="header-links">
                      <a href="cart.html">Cart</a>
                  </div>
              </header>
              <main className="main">
                  <div className="content">
                      <Route path="/products/:id" component={ProductScreen} />
                      <Route path="/" exact={true} component={HomeScreen} />
                      <Route path="/cart/:id?" component={CartScreen}/>
                  </div>
              </main>
              <footer className="footer">
                  Innovate
              </footer>
          </div>
        </BrowserRouter> 
  );
}

export default App;
