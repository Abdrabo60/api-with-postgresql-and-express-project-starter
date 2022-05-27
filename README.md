# Storefront Backend Project

## Install Dependencies

npm install

## Create Database

    CREATE USER store_user WITH PASSWORD 'store1234';

    CREATE DATABASE store_db;
    CREATE DATABASE store_db_test;

    \c store_db;

    GRANT ALL PRIVILEGES ON DATABASE store_db TO store_user;

    \q
    \c store_db_test;

    GRANT ALL PRIVILEGES ON DATABASE store_db_test TO store_user;

## Enviroment variables

    DATABASE_HOST=127.0.0.1
    DATABASE_NAME=store_db
    DATABASE_NAME_TEST=store_db_test
    DATABASE_USER=store_user
    DATABASE_PASSWORD=store1234
    ENV=dev
    BCRYPT_PASSWORD=afnan
    SALT_ROUNDS=7
    JWT_SECRET=ryan

## App Scripts

- start: for start type script server [development mode].
- watch: for start server in watch mode.
- test: test jamine specs with database.
- deploy: complie ts files to js files in dist folder for deployment mode.

# Endpoints

## Note

    - You must give token as bearer token in authotizatition headers.
    -You must give Post method data as x-www-form-urlencoded.

## Users

- Get method
  - /users => arary of users.**[token required]**
  - /users/:id => user of id.**[token required]**
- Post method.
  - /users => takes user object to create => returns token.
  - /users/login => takes user object => returns token .

## Categories

- Get method
  - /categories => arary of categories.
  - /categories/:id => category of id.
- Post method.
  - /categories => takes category object => returns created category object

## Products

- Get method
  - /products => arary of products.
  - /products/:id => product of id.
  - /products/category/:category_id => takes category id => returns products with this category id.
- Post method.
  - /products => takes product object => returns created product object. **[token required]**

## Orders

- Get method
  - /orders/completed => takes user_id => returns arary of completed orders.**[token required]**
  - /orders/current => takes user_id => returns arary of completed orders.**[token required]**
