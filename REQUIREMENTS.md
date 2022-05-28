# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index done
- Show done
- Create [token required] done
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category) done

#### Users

- Index [token required]
- Show [token required]
- Create [token required]

#### Orders

- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Categories

- id:integer
- name:varchar(50)

#### Products

- id:integer
- name:varchar(50)
- price:double
- category_id:integer

#### Users

- id:integer
- firstName:varchar(50)
- lastName:varchar(50)
- password:text

#### Orders

- id:integer
- user_id:integer
- status:boolean

#### Order_Products

- id:integer
- order_id:integer
- product_id:integer
- quantity:integer
