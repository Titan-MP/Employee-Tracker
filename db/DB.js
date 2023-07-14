const cTable = require('console.table');
const conneciton = require('./connection');
class DB {
    constructor(connection) {
        this.db = connection;
    }

    viewDeparts = async () =>
        this.db.promise().query('SELECT * FROM department').then(([data]) => {
            console.table(data)
        });

    viewRoles = async () =>
        this.db.promise().query(`
            SELECT 
                r.id,
                r.title,
                r.salary,
                d.name department
            FROM role r
            JOIN department d
            ON r.department_id = d.id
        `).then(([data]) => {
            console.table(data)
        });

    viewEmps = async () =>
        this.db.promise().query(`
            SELECT 
                e.id,
                e.first_name,
                e.last_name,
                r.title,
                d.name department,
                r.salary,
                CONCAT(e2.first_name, ' ', e2.last_name) manager
            FROM employee e
            JOIN role r
            ON e.role_id = r.id
            JOIN department d
            ON r.department_id = d.id
            LEFT JOIN employee e2
            ON e.manager_id = e2.id
        `).then(([data]) => {
            console.table(data)
        });

}

module.exports = new DB(conneciton);