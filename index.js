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

