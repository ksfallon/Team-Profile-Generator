const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

// Manager questions are:
const managerQuestions = [
    {
        type: "input",
        name: "firstName",
        message: "Please enter team Manager's first name:"
    },

    {
        type: "input",
        name: "employeeID",
        message: "Please enter team Manager's Employee ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter team Manager's email address:"
    },
    {
        type: "input",
        name: "office",
        message: "Please enter team Manager's office number:"
    },
]

// now creating a variable that gives three choices and based on that choice i am given a different list of questions
    // { "Would you like to add another team member? Y or N "}
    // {
    //     type: "list",
    //     name: "job",
    //     message: "Please select team member's job title:",
    //     choices: ["Manager", "Engineer", "Intern"]
    // },
    
    // if they choose Engineer: name, ID, email, and github usuername
    const engineerQuestions = [
        {
            type: "input",
            name: "firstName",
            message: "Please enter Engineers's first name:"
        },
    
        {
            type: "input",
            name: "employeeID",
            message: "Please enter Engineers's Employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Engineers's email address:"
        },
        {
            type: "input",
            name: "office",
            message: "Please enter Engineers's GitHub username:"
        },
    ]
    // if they choose Intern: name, ID, email, and school
    const internQuestions = [
        {
            type: "input",
            name: "firstName",
            message: "Please enter Intern's first name:"
        },
    
        {
            type: "input",
            name: "employeeID",
            message: "Please enter Intern's Employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Engineers's email address:"
        },
        {
            type: "input",
            name: "office",
            message: "Please enter InternIntern's school name:"
        },
    ]

    // then you return to "Add more team members?"

