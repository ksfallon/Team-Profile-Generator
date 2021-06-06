    const Employee = require('./Employee');

    class Intern extends Employee {
        constructor(name, id, email, school) {
    
        super(name, id, email); //the ones that already exist
        this.school = school
    }
        getRole() {
            return 'Intern'
        }
        getSchool() {
            return this.school
        }    
    }  

    module.exports = Intern;