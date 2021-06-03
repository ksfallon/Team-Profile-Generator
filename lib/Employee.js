// THIS IS THE PARENT CLASS
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const employeeQuestions = [
    {
        type: "input",
        name: "firstName",
        message: "What is your employee's first name:"
    },

    {
        type: "input",
        name: "employeeID",
        message: "What is your  employee's ID:"
    },
    {
        type: "input",
        name: "email",
        message: "What is your  employee's email address:"
    },
    {
        type: "list",
        name: "job",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    },

]

// going to need functions for these things:
// name -- getName()
// id -- getId()
// email -- getEmail()
// getRole() - should return Employee
// ** THE OTHER THREE CLASSES WILL EXTEND EMPLOYEE
