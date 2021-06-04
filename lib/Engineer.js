const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

    super(name, id, email); //the ones that already exist
    this.github = github
}
    getRole() {
        return 'Engineer'
    }
    getGitHub() {
        return this.github
    }    
}
// now creating a variable that gives three choices and based on that choice i am given a different list of questions
    // { "Would you like to add another team member? Y or N "}
    // {
    //     type: "list",
    //     name: "job",
    //     message: "Please select team member's job title:",
    //     choices: ["Manager", "Engineer", "Intern"]
    // },
    
    // if they choose Engineer: name, ID, email, and github usuername

    // github --- getGitHub()
    // getRole() - overriden to return 'Engineer'

module.exports = Engineer;