// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your backend URL

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/products/${productId}`,
      productData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
