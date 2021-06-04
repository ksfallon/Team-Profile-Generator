const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions)
.then(answers =>  {
    writeToFile ('index.html', generateMarkdown({
        // uses spread operator to concat answers hash
        ...answers
    }))
    console.log("You've successfully created your team page!")
})
}

// const employeeQuestions = [
//     {
//         type: "input",
//         name: "firstName",
//         message: "What is your employee's first name:"
//     },

//     {
//         type: "input",
//         name: "id",
//         message: "What is your  employee's ID:"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is your  employee's email address:"
//     },
//     {
//         type: "list",
//         name: "job",
//         message: "Which type of team member would you like to add?",
//         choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
//     },

// ]

// const engineerQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is your engineer's name:"
//     },

//     {
//         type: "input",
//         name: "id",
//         message: "What is your engineer's ID:"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is your engineer's email address:"
//     },
//     {
//         type: "input",
//         name: "github",
//         message: "What is your engineer's GitHub username:"
//     },
//     {
//         type: "list",
//         name: "job",
//         message: "Which type of team member would you like to add?",
//         choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
//     },
// ]
