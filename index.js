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
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office)
        manager.role = new Manager().getRole();
        addmanager(manager);
        chooseTeamMember();
        // use manager class to make manager based on managerAnswers
        // now send that information to engHTML.js
        // need to call on function that places this information into the html from engHTML.js
    })
}
buildManager ()

function chooseTeamMember () {
    inquirer.prompt([
    {
        type: "list",
        name: "job",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    }
    ]).then(chooseAnswers => {
        // if (chooseAnswers === 'Engineer') {
        //     return buildEngineer()
        // } else if (chooseAnswers === 'Intern') {
        //     return buildIntern();
        // } else {
        // // here is where i need to call on the function that writes the file
        // // writeToFile ('index.html', whichFUNCTIONhere({ WHAT DO I PUT HERE??}))
        // console.log("You've successfully created your team page!")
        // }
        switch (chooseAnswers.job) {
            case "Engineer": buildEngineer(); break;
            case "Intern": buildIntern(); break;
            default: buildTeam();
            // need make a build team that puts all of the HTML created into the index.html file
        }
    })
}

const engineerQuestions = [
    {
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
]
function buildEngineer () {
    inquirer.prompt(engineerQuestions).then(engineerAnswers => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
        chooseTeamMember();
    
    })
}

const interQuestions = [
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
]
function buildIntern () {
    inquirer.prompt(interQuestions).then(internAnswers => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
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

