USE employee_db;

INSERT INTO departments (id, department) VALUES ("1", "Engineering");
INSERT INTO departments (id, department) VALUES ("2", "Product");
INSERT INTO departments (id, department) VALUES ("3", "Design");
INSERT INTO departments (id, department) VALUES ("4", "Data Research");
INSERT INTO departments (id, department) VALUES ("5", "Legal");
INSERT INTO departments (id, department) VALUES ("6", "HR");


INSERT INTO roles (id, title, salary, depId) VALUES ("1", "Enginering Manager", "110000", "1");
INSERT INTO roles (id, title, salary, depId) VALUES ("2", "Full Stack Developer", "82000", "1");
INSERT INTO roles (id, title, salary, depId) VALUES ("3", "Product Manager", "130000", "2");
INSERT INTO roles (id, title, salary, depId) VALUES ("4", "Product Marketing", "68000", "2");
INSERT INTO roles (id, title, salary, depId) VALUES ("5", "UX Researcher", "85000", "3");
INSERT INTO roles (id, title, salary, depId) VALUES ("6", "UX Designer", "78000", "3");
INSERT INTO roles (id, title, salary, depId) VALUES ("7", "Data Decision Scientist", "95000", "4");
INSERT INTO roles (id, title, salary, depId) VALUES ("8", "Sr. Legal Counsel", "240000", "5");
INSERT INTO roles (id, title, salary, depId) VALUES ("9", "Director of HR", "140000", "6");



INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("1", "Alice", "Cooper", "1", NULL);
INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("2", "Joni", "Mitchell", "2", "1");
INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("3", "Rachel", "Marron", "3", NULL);
INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("4", "Alex", "Turner", "4", "3");
INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("5", "Kevin", "Parker", "5", "3");
INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("6", "Stevie", "Nicks", "6", "3");
INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("7", "George", "Harrison", "7", NULL);
INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("8", "Paul", "McCartney", "8", NULL);
INSERT INTO employees (id, firstName, lastName, roleId, managerId) VALUES ("9", "Alexandra", "Savior", "9", NULL);
