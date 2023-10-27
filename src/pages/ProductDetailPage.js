import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api';

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const placeholderImageURL = `https://picsum.photos/600/400?random=${productId}`;
  const placeholderDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nunc vel turpis bibendum vestibulum vel nec felis.";

  useEffect(() => {
    getProducts()
      .then((data) => {
        const selectedProduct = data.find((p) => p.id === parseInt(productId));
        setProduct(selectedProduct);
      })
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={placeholderImageURL}
            className="img-fluid rounded"
            alt={product ? product.name : 'Loading...'}
          />
        </div>
        <div className="col-md-6">
          {product ? (
            <div>
              <h2 className="mt-4">{product.name}</h2>
              <p className="text-muted mb-3">Price: ${product.price}</p>
              <p className="mb-4">Description: {product.description || placeholderDescription}</p>
              <button className="btn btn-primary">Add to Cart</button>
              {/* Additional product details can be displayed here */}
            </div>
          ) : (
            <p className="mt-3">Loading product details...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
