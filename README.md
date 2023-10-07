### Project notes for the team

## ChatGPT LLM prompting link
https://chat.openai.com/share/72cae400-c4a2-4b38-9277-f3c33f1bd595

## Setup database for the first time
1. Login to PostgreSQL through the CLI:
``
psql -U postgres
``

2. Create a database:
``
CREATE DATABASE ecommerce_db;
``

3. Connect to the newly created database:
``
\c ecommerce_db
``

4. Create the table
```
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);
```

5. Insert rows into the table
```
INSERT INTO products (name, price) VALUES ('Product 1', 19.99);
INSERT INTO products (name, price) VALUES ('Product 2', 29.99);
```

6. Show contents
```
-- List all tables in the database
\dt

-- Show the structure of the "products" table
\d products

-- Retrieve data from the "products" table
SELECT * FROM products;
```

## Setup application

1. If NPM packages has not been installed yet, run the following command first within the root directory as well as the my-ecommerce-backend directory:
``
npm install
``
2. Go into my-ecommerce-back-end directory, and start the webserver which contains the API
``
node app.js
``
2. Go back to the root directory, and start the React application:
``
npm start
``
