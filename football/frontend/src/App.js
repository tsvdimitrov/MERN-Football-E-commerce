import React from 'react';
import data from './data';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/" >Football-fanshop.com</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar" >
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            {/* <Route path="/products/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} /> */}
            <ul className="products">
              {
                data.products.map(product =>
                  <li>
                    <div className="product">
                      <Link to={'/product/' + product._id}>
                        <img className="product-image"
                          src={product.image}
                          alt="product" />
                      </Link>
                      <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link>
                      </div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">{product.price}</div>
                      <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                    </div>
                  </li>)
              }

            </ul>
          </div>
        </main>
        <footer className="footer">
          Tsvetomir Dimitrov © All rights reserved.
        </footer>
      </div >
    </BrowserRouter >
  );
}
export default App;
