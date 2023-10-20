// ProductList.js

import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ProductList() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    // Fetch products when the component mounts
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleCreateProduct = async () => {
    try {
      const createdProduct = await createProduct(newProduct);
      setProducts([...products, createdProduct]);
      setNewProduct({ name: '', price: '' });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleStartEdit = (productId) => {
    // Set the product to be edited by its ID
    const productToEdit = products.find((product) => product.id === productId);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, isEditing: true } : product
      )
    );
    setNewProduct(productToEdit); // Populate the input fields with existing data
  };

  const handleCancelEdit = (productId) => {
    // Cancel editing by resetting the isEditing flag
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, isEditing: false } : product
      )
    );
    setNewProduct({ name: '', price: '' }); // Clear input fields
  };

  const handleUpdateProduct = async (productId) => {
    try {
      // Find the edited product
      const editedProduct = products.find((product) => product.id === productId);

      // Update the product's data
      const updatedProduct = await updateProduct(productId, {
        name: newProduct.name,
        price: newProduct.price,
      });

      // Update the product in the list
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...updatedProduct, isEditing: false } // Stop editing
            : product
        )
      );

      // Clear input fields
      setNewProduct({ name: '', price: '' });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      // Delete the product by ID
      await deleteProduct(productId);

      // Remove the deleted product from the list
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Product List</h1>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            {product.isEditing ? ( // Check if the product is in edit mode
              <div>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Product Price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdateProduct(product.id)}
                >
                  Save
                </button>
                <button className="btn btn-secondary" onClick={() => handleCancelEdit(product.id)}>
                  Cancel
                </button>
              </div>
            ) : (
              // Render product details and edit/delete buttons
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{product.name}</h5>
                  <p>${product.price}</p>
                </div>
                <div>
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => handleStartEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h2>Add New Product</h2>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button className="btn btn-success" onClick={handleCreateProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default ProductList;
