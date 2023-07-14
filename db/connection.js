require('dotenv').config();
const e = require('express');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.user,
        password: process.env.password,
        database: 'employee_db'
    }
);

db.connect(err => {if(err) throw err; console.log('connected as id ' + db.threadId)});

module.exports = db;