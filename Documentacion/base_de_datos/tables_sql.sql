CREATE DATABASE delilah_resto;

USE delilah_resto;
----------------------------------------------
CREATE TABLE plates (
	id_plate INT NOT NULL AUTO_INCREMENT,
    name NVARCHAR(100) NOT NULL,
    description NVARCHAR(400) NOT NULL,
    price INT NOT NULL,
    category NVARCHAR(100) NOT NULL,
    PRIMARY KEY (id_plate)
);
---------------------------------------------
CREATE TABLE users (
	id_user INT NOT NULL AUTO_INCREMENT,
    name NVARCHAR(100) NOT NULL,
    lastname NVARCHAR(100) NOT NULL,
    email NVARCHAR(200) NOT NULL,
    phone INT NOT NULL,
    address NVARCHAR(200) NOT NULL,
    username NVARCHAR(100) NOT NULL,
    password NVARCHAR(100) NOT NULL,
    admin TINYINT(1) NOT NULL
    PRIMARY KEY (id_user)
);
----------------------------------------------
CREATE TABLE payment_method (
	id_payment INT NOT NULL AUTO_INCREMENT,
    method NVARCHAR(100) NOT NULL,
    PRIMARY KEY (id_payment)
);
---------------------------------------------
CREATE TABLE status (
	id_status INT NOT NULL AUTO_INCREMENT,
    description NVARCHAR(100) NOT NULL,
    PRIMARY KEY (id_status)
);
-----------------------------------------------
CREATE TABLE orders_Events (
	id_event INT NOT NULL AUTO_INCREMENT,
    id_user INT NOT NULL ,
    id_payment INT NOT NULL,
    id_status INT NOT NULL,
    address  VARCHAR(150) NOT NULL,
    event_hour datetime NOT NULL,
    is_active INT NOT NULL,
    PRIMARY KEY (id_event),
    FOREIGN KEY (id_user) REFERENCES users(id_user),
    FOREIGN KEY (id_payment) REFERENCES payment_method(id_payment),
    FOREIGN KEY (id_status) REFERENCES status(id_status)
);
-----------------------------------------------
CREATE TABLE order_plates (
	id_event INT NOT NULL,
    id_plate INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (id_event,id_plate)
);
-----------------------------------------------




