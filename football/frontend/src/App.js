import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector('sidebar').classList.remove("open");

  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">Football-fanshop.com</a>
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
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image"
                  src="https://cdn.shopify.com/s/files/1/1055/5166/products/ADIDAMANUNITEDJERSEYH31447SHOPIFY_3_2400x.png?v=1628489228"
                  alt="product" />
                <div className="product-name">
                  <a href="product.html">Manchester United men home shirt 2021/2022</a>
                </div>
                <div className="product-brand">Adidas</div>
                <div className="product-price">79.99 лв.</div>
                <div className="product-rating">5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"
                  src="https://cdn.shopify.com/s/files/1/1055/5166/products/ADIDAMANUNITEDJERSEYH31447SHOPIFY_3_2400x.png?v=1628489228"
                  alt="product" />
                <div className="product-name">
                  <a href="product.html">Manchester United men home shirt 2021/2022</a>
                </div>
                <div className="product-brand">Adidas</div>
                <div className="product-price">79.99 лв.</div>
                <div className="product-rating">5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"
                  src="https://cdn.shopify.com/s/files/1/1055/5166/products/ADIDAMANUNITEDJERSEYH31447SHOPIFY_3_2400x.png?v=1628489228"
                  alt="product" />
                <div className="product-name">
                  <a href="product.html">Manchester United men home shirt 2021/2022</a>
                </div>
                <div className="product-brand">Adidas</div>
                <div className="product-price">79.99 лв.</div>
                <div className="product-rating">5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"
                  src="https://cdn.shopify.com/s/files/1/1055/5166/products/ADIDAMANUNITEDJERSEYH31447SHOPIFY_3_2400x.png?v=1628489228"
                  alt="product" />
                <div className="product-name">
                  <a href="product.html">Manchester United men home shirt 2021/2022</a>
                </div>
                <div className="product-brand">Adidas</div>
                <div className="product-price">79.99 лв.</div>
                <div className="product-rating">5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"
                  src="https://cdn.shopify.com/s/files/1/1055/5166/products/ADIDAMANUNITEDJERSEYH31447SHOPIFY_3_2400x.png?v=1628489228"
                  alt="product" />
                <div className="product-name">
                  <a href="product.html">Manchester United men home shirt 2021/2022</a>
                </div>
                <div className="product-brand">Adidas</div>
                <div className="product-price">79.99 лв.</div>
                <div className="product-rating">5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"
                  src="https://cdn.shopify.com/s/files/1/1055/5166/products/ADIDAMANUNITEDJERSEYH31447SHOPIFY_3_2400x.png?v=1628489228"
                  alt="product" />
                <div className="product-name">
                  <a href="product.html">Manchester United men home shirt 2021/2022</a>
                </div>
                <div className="product-brand">Adidas</div>
                <div className="product-price">79.99 лв.</div>
                <div className="product-rating">5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image"
                  src="https://cdn.shopify.com/s/files/1/1055/5166/products/ADIDAMANUNITEDJERSEYH31447SHOPIFY_3_2400x.png?v=1628489228"
                  alt="product" />
                <div className="product-name">
                  <a href="product.html">Manchester United men home shirt 2021/2022</a>
                </div>
                <div className="product-brand">Adidas</div>
                <div className="product-price">79.99 лв.</div>
                <div className="product-rating">5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        Tsvetomir Dimitrov © All rights reserved.
      </footer>
    </div>
  );
}

export default App;
