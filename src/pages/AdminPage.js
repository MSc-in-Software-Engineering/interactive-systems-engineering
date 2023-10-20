// src/pages/AdminPage.js

import React from 'react';
import ProductList from '../components/ProductList';

function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <ProductList />
      {/* You can include any admin-specific content or functionality here */}
    </div>
  );
}

export default AdminPage;
