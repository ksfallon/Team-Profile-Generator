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
// const finishHtml = require('./src/endHtml');

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



function pushManager () {
        inquirer.prompt(managerQuestions).then(managerAnswers => {
        const manager = new Manager(managerAnswers.fname, managerAnswers.id, managerAnswers.email, managerAnswers.office)
        console.log("This is the manager const", manager);
        fs.writeFile("./dist/newTeam.html", addManager(manager), (err) => console.error(err))
        // writeToFile ("./dist/newTeam.html", addManager(manager));

    })
    .then (() => {
        chooseTeamMember();
    }).catch((err) => console.error(err));

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

        writeToFile ("./dist/newTeam.html", addIntern(newIntern));
    }).then (() => {
        chooseTeamMember();
    }).catch((err) => console.error(err));
}


pushManager()