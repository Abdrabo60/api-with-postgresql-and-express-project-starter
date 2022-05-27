--fill some random data for testing
INSERT INTO users (first_name,last_name,password) VALUES('admin','admin','$2b$07$eamitvaGwsf7GTgACliyCOVY4yWqZ13QHI.Fg7y3vT09Pf4YHJAVu'),
('ahmed','abdrabo','$2b$07$k4YmjFwWy3lH.AV36WL9suggbhy2nlv1Au64iwflGip4fNXN6Yu3S');
INSERT INTO categories (name )VALUES ('clothes'),('electronics'),('computers'),('smart phones');
INSERT INTO products (name,price,category_id) VALUES
 ('pants',120,1),
 ('Led TV',1500,2),
 ('laptop',5000,3),
 ('apple mobile',10000,4)
 ;



 INSERT INTO orders (user_id,status) VALUES
 (1,true),
 (1,false),
 (2,true),
 (2,false);
 INSERT INTO order_products(order_id,product_id,quantity) VALUES
 (1,1,3),(1,2,7),
 (2,3,5),(2,1,6),
 (3,4,3),
 (4,2,2),(4,1,1);
