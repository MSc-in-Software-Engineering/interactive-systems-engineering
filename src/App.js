import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">ECOMMERCE</Link> {/* Updated logo text */}
            <ul className="navbar-nav ml-auto flex-row align-items-center">
            <li className="nav-item" style={{ marginRight: '10px' }}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item" style={{ marginRight: '10px' }}>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">Admin</Link>
            </li>
          </ul>
          </div>
        </nav>

        <div className="container mt-4">
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            {/* Add a route for product details */}
          <Route path="/products/:productId" component={ProductDetailPage} />
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
