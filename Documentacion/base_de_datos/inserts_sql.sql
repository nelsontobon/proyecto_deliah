INSERT INTO delilah_resto.status 
(description)
VALUES ('nuevo'),('confirmado'),('preparando'),('enviando'),('cancelado'),('entregado')
-----------------------------------------------
INSERT INTO delilah_resto.payment_method 
(method)
VALUES ('efectivo'),('tarjeta de credito')
-----------------------------------------------
INSERT INTO delilah_resto.plates 
(name, description, price, category) 
values ('sancocho','tipico completo',1500,'plato fuerte')
------------------------------------------------
INSERT INTO delilah_resto.users 
(name, lastname, email, phone, address, username, password, admin) 
values ('nombre','apellido','pru@pru','123','cra23','username','123a',1)
