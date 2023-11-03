  import React, { useEffect, useState } from 'react';
  import { useParams } from 'react-router-dom';
  import { getProducts } from '../api';
  import SoldModal from '../components/SoldModal'; // Import the modal component

  function ProductDetailPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [buttonText, setButtonText] = useState('Buy');
    const [buttonColor, setButtonColor] = useState('btn-primary');
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

    const placeholderImageURL = `https://picsum.photos/600/400?random=${productId}`;
    const placeholderDescription =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nunc vel turpis bibendum vestibulum vel nec felis.";

    useEffect(() => {
      getProducts()
        .then((data) => {
          const selectedProduct = data.find((p) => p.id === parseInt(productId));
          setProduct(selectedProduct);

          // Check if the product is marked as "Sold" in localStorage
          if (localStorage.getItem(`product-${productId}`) === 'sold') {
            setButtonText('Sold');
            setButtonColor('btn-danger');
          }
        })
        .catch((error) => console.error('Error fetching product details:', error));
    }, [productId]);

    // Function to handle the button click
    const handleButtonClick = () => {
      if (buttonText === 'Buy') {
        setButtonText('Sold');
        setButtonColor('btn-danger');
        localStorage.setItem(`product-${productId}`, 'sold');

        // Open the modal
        setIsModalOpen(true);
      }
    };

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
                <p className="mb-4">
                  Description: {product.description || placeholderDescription}
                </p>
                <button
                  className={`btn ${buttonColor}`}
                  onClick={handleButtonClick}
                >
                  {buttonText}
                </button>
                {/* Additional product details can be displayed here */}
              </div>
            ) : (
              <p className="mt-3">Loading product details...</p>
            )}
          </div>
        </div>
        {/* Render the SoldModal when isModalOpen is true */}
        <SoldModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
      </div>
    );
  }

  export default ProductDetailPage;