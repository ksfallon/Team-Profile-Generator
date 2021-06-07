const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(fname, id, email, github) {

    super(fname, id, email); //the ones that already exist
    this.github = github
}
    getRole() {
        return 'Engineer'
    }
    getGitHub() {
        return this.github
    }    
}

module.exports = Engineer;