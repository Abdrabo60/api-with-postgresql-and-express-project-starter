
-- create main tables
CREATE TABLE  IF NOT EXISTS categories(id SERIAL PRIMARY KEY,name VARCHAR(50));
CREATE TABLE  IF NOT EXISTS products(id SERIAL PRIMARY KEY,name VARCHAR(50),price FLOAT,category_id INTEGER REFERENCES categories(id));
CREATE TABLE  IF NOT EXISTS users(id SERIAL PRIMARY KEY,first_name VARCHAR(50),last_name VARCHAR(50),password TEXT);
CREATE TABLE  IF NOT EXISTS orders(id SERIAL PRIMARY KEY,product_id INTEGER  REFERENCES products(id),quantity INTEGER , user_id INTEGER REFERENCES users(id),status BOOLEAN);

--fill basic data
INSERT INTO users (first_name,last_name,password) VALUES('admin','admin','$2b$07$eamitvaGwsf7GTgACliyCOVY4yWqZ13QHI.Fg7y3vT09Pf4YHJAVu'),
('ahmed','abdrabo','$2b$07$k4YmjFwWy3lH.AV36WL9suggbhy2nlv1Au64iwflGip4fNXN6Yu3S');
INSERT INTO categories (name )VALUES ('clothes'),('electronics'),('computers'),('smart phones');
INSERT INTO products (name,price,category_id) VALUES
 ('pants',120,1),
 ('Led TV',1500,2),
 ('laptop',5000,3),
 ('apple mobile',10000,4)
 ;

 INSERT INTO orders (product_id,quantity,user_id,status) VALUES
 (1,5,1,true),
 (2,3,1,false),
 (3,7,2,true),
 (4,4,2,false);


