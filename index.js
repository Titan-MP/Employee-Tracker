const DB = require('./db/DB');
const { prompt } = require('inquirer');
const questions = require('./questions');

const init = () =>
    prompt(questions).then(ans => {
        const { action } = ans;
        
        switch (action) {
            case 'view all departments': return DB.viewDeparts().then(init);
            case 'view all roles': return DB.viewRoles().then(init);
            case 'view all employees': return DB.viewEmps().then(init);
    
        
        }
    });

init();