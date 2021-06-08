const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerHtml = require('./src/manHtml');
const internHtml = require('./src/intHtml');
const engineerHtml = require('./src/engHtml');
const startHtml = require('./src/startHtml');
const endHtml = require('./src/endHtml');
const employeeList = [];

const managerQuestions = [

    {
        type: "input",
        name: "fname",
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
function pushManager () {
        inquirer.prompt(managerQuestions).then(managerAnswers => {
        const manager = new Manager(managerAnswers.fname, managerAnswers.id, managerAnswers.email, managerAnswers.office)
        console.log("This is the manager const", manager);
        employeeList.push(manager);
        console.log("Here is the employee list", employeeList);
    })
    .then (() => {
        fs.writeToFile("./dist/newTeam.html", indexHtml)
    })
    // .then (() => {
    // managerHtml.addManager(manager);
    //fs.appendFile('./dist/team.html', mHTML, (err) => err ? console.log(err) : '')
    // })
    .then (() => {
        chooseTeamMember();
    }).catch((err) => console.error(err));
    // now send that information to engHTML.js
    // need to call on function that places this information into the html from engHTML.js
}

pushManager ()

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
            case "Engineer": pushEngineer(); break;
            case "Intern": pushIntern(); break;
            default: "thank you!"
            // default: buildTeam();
            // need make a build team that puts all of the HTML created into the index.html file
        }
    })
}

function buildTeam() {
    employeeList
    for (const value of employeeList) {
        if (value === manager) {
            managerHtml.addManager(value);   
        } else if (value === newEngineer) {
            engineerHtml.addEngineer(value);
        } else if (value === newIntern) {
            internHtml.addIntern(value);
        } else {
            fs.appendFile("./dist/newTeam.html", )
            console.log("Your team HTML file is ready!")
        }
    }
    // writeToFile("./dist/indexTeam.html", addManager())
    // return fs.writeFileSync(path.join("./dist/indexTeam.html"), addManager(), 
    // ((err) => console.error(err)));
}


const engineerQuestions = [
    {
        type: "input",
        name: "fname",
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
function pushEngineer () {
    inquirer.prompt(engineerQuestions).then(engineerAnswers => {
        const newEngineer = new Engineer(engineerAnswers.fname, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
        console.log("This is the new engineer", newEngineer);

        employeeList.push(newEngineer);
        console.log("Here is the updated Employee List", employeeList);
   
    }).then (() => {
        chooseTeamMember();
    }).catch((err) => console.error(err));
}


const interQuestions = [
    {
        type: "input",
        name: "fname",
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
function pushIntern () {
    inquirer.prompt(interQuestions).then(internAnswers => {
        const newIntern = new Intern(internAnswers.fname, internAnswers.id, internAnswers.email, internAnswers.school)
        console.log("This is the new Intern", newIntern);

        employeeList.push(newIntern);
        console.log("Here is the updated Employee List", employeeList);

    }).then (() => {
        chooseTeamMember();
    }).catch((err) => console.error(err));
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
