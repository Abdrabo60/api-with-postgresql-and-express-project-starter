DELETE FROM  order_products;
ALTER SEQUENCE order_products_id_seq RESTART WITH 1;
DELETE FROM  orders;
ALTER SEQUENCE orders_id_seq RESTART WITH 1;
DELETE FROM  products;
ALTER SEQUENCE products_id_seq RESTART WITH 1;
DELETE FROM  categories;
ALTER SEQUENCE categories_id_seq RESTART WITH 1;
DELETE FROM  users;
ALTER SEQUENCE users_id_seq RESTART WITH 1;







