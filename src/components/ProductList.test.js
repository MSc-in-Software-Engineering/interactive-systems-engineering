import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';

// Mock the API functions
jest.mock('../api', () => ({
  getProducts: jest.fn(() => Promise.resolve([])),
  createProduct: jest.fn(() => Promise.resolve({ id: 1, name: 'Test Product', price: 19.99 })),
  updateProduct: jest.fn(() => Promise.resolve({ id: 1, name: 'Updated Product', price: 29.99 })),
  deleteProduct: jest.fn(() => Promise.resolve()),
}));

describe('ProductList Component', () => {
  test('displays product details and buttons', async () => {
    // Mock products data
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 19.99 },
      { id: 2, name: 'Product 2', price: 29.99 },
    ];
    
    // Mock the getProducts API function to return the mock data
    jest.spyOn(require('../api'), 'getProducts').mockImplementation(() => Promise.resolve(mockProducts));

    render(<ProductList />);

    // Wait for the component to finish rendering
    await screen.findByText('Product List');

    // Assertions
    expect(screen.getAllByText(/Product \d/)).toHaveLength(2);
    expect(screen.getAllByText('Edit')).toHaveLength(2);
    expect(screen.getAllByText('Delete')).toHaveLength(2);
  });
});
