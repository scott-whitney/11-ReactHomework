DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;
CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
    salary INTEGER(10),
    department_id INTEGER(10),
	PRIMARY KEY (id)
);

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10),
    PRIMARY KEY (id)
);

INSERT INTO role (title, salary, department_id)
VALUES("warehouse manager", 60000, 1),
		("shipper", 36000, 1),
        ("accountant", 65000, 4),
        ("clerk", 45000, 3),
        ("CFO", 90000, 4),
        ("Advertising", 45000, 3);
        
INSERT INTO department (name)
VALUES("Warehouse"),
("Front Office"),
("Fab Four");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("John", "Sakkis", 1, 1),
("Shawn", "El", 2, 2),
("Andrew", "timmy", 3, 1),
("Johnn", "Hernandez", 4, 1),
("Brent", "Cunningham", 5, 1),
("Trisha", "Shur", 6, 1);