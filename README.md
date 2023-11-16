### Project notes for the team

## ChatGPT LLM prompting link
- First session: https://chat.openai.com/share/72cae400-c4a2-4b38-9277-f3c33f1bd595
- Second session: https://chat.openai.com/share/7e5efe2a-ad2e-4a22-b632-f8830df15c3e
- Third session: https://chat.openai.com/share/dc9377e5-50a9-46c1-9560-ddba51e356e7
- Fourth session: https://chat.openai.com/share/1573e0be-3905-4870-8ba4-f98f1dd109e7
- Fifth session: https://chat.openai.com/share/9aca3148-8996-4b62-9de1-6e8c6754a48a
- Sixth session: https://chat.openai.com/share/3d33bfad-fa84-4dd9-a40b-b83e3f186168
- Seventh session: https://chat.openai.com/share/0ba10cd6-a375-4d19-8a19-3554ee8bef5d

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

## Unit test

1. Go to the source directory /src, and run:
``
npm test
``
2. Unit test(s) should now be running.

##  GUI testing
1. To initialize GUI testing, run cypress with the following:
``
npx cypress open
``
2. Cypress GUI should now open on the following address:
``
127.0.0.1:59501
``