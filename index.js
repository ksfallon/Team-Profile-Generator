const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const addManager = require('./src/manHtml');
// const beginHtml = require("./src/startHtml")
const addIntern = require('./src/intHtml');
const addEngineer = require('./src/engHtml');
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

function writeToFile(fileName, data) {
    return fs.appendFileSync(path.join(fileName), data)
}

function beginHtml() {
const beginHtml =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Team Page!!</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-white-50 bg-dark p-5 justify-content-center p5">
        <a class="navbar-brand text-white-50 text-center" href="#"><h1>My Team</h1></a>
    </nav>
    <div class="card-group p-5" id = "add-cards">`
    fs.writeFile("./dist/newTeam.html", beginHtml, (err) => console.error(err))

}

function pushManager () {
        inquirer.prompt(managerQuestions).then(managerAnswers => {
        const manager = new Manager(managerAnswers.fname, managerAnswers.id, managerAnswers.email, managerAnswers.office)
        console.log("This is the manager const", manager);
        // employeeList.push(manager);
        // console.log("Here is the employee list", employeeList);
        writeToFile ("./dist/newTeam.html", addManager(manager));
    //  wmanagerHtml.addManager(manager);
    //fs.appendFile('./dist/team.html', mHTML, (err) => err ? console.log(err) : '')
    })
    .then (() => {
        chooseTeamMember();
    }).catch((err) => console.error(err));
    // now send that information to engHTML.js
    // need to call on function that places this information into the html from engHTML.js
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

        switch (chooseAnswers.job) {
            case "Engineer": pushEngineer(); break;
            case "Intern": pushIntern(); break;
            // default: "thank you!"
            default: finalHTML();
            // need make a build team that puts all of the HTML created into the index.html file
        }
    })
}

function finalHTML() {
    const finishHtml =
`</div>
    
</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</html>`
fs.appendFile("./dist/newTeam.html", finishHtml, (err) => console.error(err))
console.log("Your team HTML file is ready!")
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
    const newEngineer = new Engineer (engineerAnswers.fname, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
    console.log("This is the newEngineer const", newEngineer);

    writeToFile ("./dist/newTeam.html", addEngineer(newEngineer));
})
.then (() => {
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

        // employeeList.push(newIntern);
        // console.log("Here is the updated Employee List", employeeList);
        
        writeToFile ("./dist/newTeam.html", addIntern(newIntern));
    }).then (() => {
        chooseTeamMember();
    }).catch((err) => console.error(err));
}

beginHtml()
pushManager ()