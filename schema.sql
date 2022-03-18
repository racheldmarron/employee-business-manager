DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments(
  id INTEGER(11) NOT NULL,
  department VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles(
  id INTEGER(11) NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary decimal(12, 2) NOT NULL,
  depId INTEGER (11) NOT NULL, 
  PRIMARY KEY (id) 
);

CREATE TABLE employees(
  id INTEGER(11) NOT NULL,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  roleId INTEGER (11) NOT NULL, 
  managerId INTEGER(11),
  PRIMARY KEY (id)
);