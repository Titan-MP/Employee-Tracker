const { prompt } = require('inquirer');

const init = () =>
    prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['view all departments', 'view all roles', "view all employees", 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }
    ]).then(({ action }) => {
        console.log(action);
    });

init();