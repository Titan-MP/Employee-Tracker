

module.exports = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', "view all employees", 'add a department', 'add a role', 'add an employee', 'update an employee role']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?',
        when: ({ action }) => action === 'add a department'
    }
]