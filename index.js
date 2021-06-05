const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const Generate = require('./generateHtml');

// create const for employee array - where all the functions will push to
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}
const managerQuestions = [

    {
        type: "input",
        name: "name",
        message: "What is the team manager's name:"
    },

    {
        type: "input",
        name: "id",
        message: "What is the team manager's ID:"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email address:"
    },
    {
        type: "input",
        name: "office",
        message: "What is the team manager's office number:"
    }

]
function buildManager () {
        inquirer.prompt(managerQuestions).then(managerAnswers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        chooseTeamMember();
        // use manager class to make manager based on managerAnswers
    })
}

function chooseTeamMember () {
    inquirer.prompt([

    {
        type: "list",
        name: "job",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    }
    ]).then(chooseAnswers => {

    })
}


// TODO: Create a function to initialize app
function init() {
//     inquirer
//     .prompt(
// function buildManager () {
//     [
    
//         {
//             type: "input",
//             name: "name",
//             message: "What is the team manager's name:"
//         },
    
//         {
//             type: "input",
//             name: "id",
//             message: "What is the team manager's ID:"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is the team manager's email address:"
//         },
//         {
//             type: "input",
//             name: "office",
//             message: "What is the team manager's office number:"
//         },
//         {
//             type: "list",
//             name: "job",
//             message: "Which type of team member would you like to add?",
//             choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
//         },
    
//     ]},

function buildEngineer () {
    [{
            type: "input",
            name: "name",
            message: "What is your engineer's name:"
        },
    
        {
            type: "input",
            name: "id",
            message: "What is your engineer's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username:"
        },
        {
            type: "list",
            name: "job",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        },
    ]},

function buildIntern () {
    [
        {
            type: "input",
            name: "name",
            message: "What is your intern's name:"
        },
    
        {
            type: "input",
            name: "id",
            message: "What is your intern's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school name:"
        },
        {
            type: "list",
            name: "job",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        },
    ]
    
}

) 
.then(answers =>  {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    
    writeToFile ('index.html', generateHtml({
        // uses spread operator to concat answers hash
        ...answers
    }))
    console.log("You've successfully created your team page!")
})
}

// init()

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

