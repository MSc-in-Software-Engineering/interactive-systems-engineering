import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([]);

  const handleBuyClick = (product) => {
    console.log(`Bought ${product.name}`);
  };

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Function to generate a random image URL using Picsum
  const getRandomImageURL = () => {
    const randomImageId = Math.floor(Math.random() * 100); // Generate a random image ID
    return `https://picsum.photos/300/200?image=${randomImageId}`;
  };

  const placeholderDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nunc vel turpis bibendum vestibulum vel nec felis.";

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => {
          // Check if the product is marked as "Sold" in localStorage
          const isSold = localStorage.getItem(`product-${product.id}`) === 'sold';

          return (
            <div className="col-md-4 mb-4" key={product.id}>
              <Link
                to={{
                  pathname: `/products/${product.id}`,
                  state: { placeholderImageURL: getRandomImageURL(), placeholderDescription },
                }}
              >
                <div className="card">
                  <img
                    src={getRandomImageURL()} // Generate a random image URL
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{placeholderDescription}</p>
                    <p className="card-text">${product.price}</p>
                    <button
                      className={`btn ${isSold ? 'btn-danger' : 'btn-primary'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (!isSold) {
                          handleBuyClick(product);
                          // Store the "Sold" state in localStorage
                          localStorage.setItem(`product-${product.id}`, 'sold');
                        }
                      }}
                    >
                      {isSold ? 'Sold' : 'Buy'}
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
