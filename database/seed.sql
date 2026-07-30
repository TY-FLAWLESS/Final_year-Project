USE unimart;

INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@unimart.com', '$2a$10$.xg4PdyjeLPdpp9/lR3hs.MPBFLdTkrGNltK0nZr/EmwW4JMQvZea', 'admin'),
('Vendor User', 'vendor@unimart.com', '$2a$10$.xg4PdyjeLPdpp9/lR3hs.MPBFLdTkrGNltK0nZr/EmwW4JMQvZea', 'vendor'),
('Customer User', 'customer@unimart.com', '$2a$10$.xg4PdyjeLPdpp9/lR3hs.MPBFLdTkrGNltK0nZr/EmwW4JMQvZea', 'customer');

INSERT INTO vendors (user_id, shop_name, phone, location, status) VALUES
(2, 'Fresh Hub', '0240000000', 'KsTU Main Gate', 'approved');

INSERT INTO categories (name) VALUES
('Food'),
('Books'),
('Clothing'),
('Services');

INSERT INTO products (vendor_id, category_id, name, description, price, stock) VALUES
(1, 1, 'Fufu and Light Soup', 'Popular campus meal', 18.00, 10),
(1, 2, 'Computer Science Textbook', 'Used but good condition', 45.00, 5);
