const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const questions = [
    {
        type: "input",
        name: "firstName",
        message: "Please enter team member's first name:"
    },
    {
        type: "list",
        name: "job",
        message: "Please select team member's job title:",
        choices: ["Manager", "Engineer", "Intern"]
    },
    

]