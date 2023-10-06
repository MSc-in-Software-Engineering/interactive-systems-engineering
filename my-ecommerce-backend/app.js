const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = process.env.PORT || 3001;

// Configure PostgreSQL connection
const pool = new Pool( {
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce_db',
  password: 'admin',
  port: 5432,
});

app.use(cors()); 

app.use(express.json());

// Create a product
app.post('/products', async (req, res) => {
  try {
    const { name, price } = req.body;
    const result = await pool.query(
      'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
      [name, price]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Read all products
app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a product by ID
app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *',
      [name, price, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a product by ID
app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
