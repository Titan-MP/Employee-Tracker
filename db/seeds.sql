
INSERT INTO department (name) 
VALUES 
    ('HR'),
    ('Engineering'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
    ('HR Manager', 100000, 1),
    ('Engineer', 90000, 2),
    ('Sales Lead', 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jhon', 'Doe', '1', NULL),
    ('Jane', 'Doe', '2', '1'),
    ('Jane', 'Smith', '3', '2');    
