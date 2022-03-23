use employees;

INSERT INTO department
    (name)
VALUES
    ('Engineering'),
    ('Product'),
    ('Design'),
    ('Data Research'),
    ('Legal'),
    ('HR');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Engineering Manager', 110000, 1),
    ('Full Stack Developer', 82000, 1),
    ('Product Manager', 130000, 2),
    ('Product Marketing', 68000, 2),
    ('UX Researcher', 85000, 3),
    ('UX Designer', 78000, 3),
    ('Data Decision Scientist', 95000, 4),
    ('Sr. Legal Counsel', 240000, 5),
    ('Director of HR', 140000, 6);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Alice', 'Cooper', 1, NULL),
    ('Joni', 'Mitchell', 2, 1),
    ('Rachel', 'Marron', 3, NULL),
    ('Alex', 'Turner', 4, 3),
    ('Kevin', 'Parker', 5, 3),
    ('Stevie', 'Nicks', 6, 3),
    ('George', 'Harrison', 7, NULL),
    ('Paul', 'McCartney', 8, NULL),
    ('Alexandra', 'Savior', 9, NULL);