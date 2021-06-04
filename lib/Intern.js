// now creating a variable that gives three choices and based on that choice i am given a different list of questions
    // { "Would you like to add another team member? Y or N "}
    // {
    //     type: "list",
    //     name: "job",
    //     message: "Please select team member's job title:",
    //     choices: ["Manager", "Engineer", "Intern"]
    // },
    
    // if they choose Intern: name, ID, email, and school
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

    // school --- getSchool()
    // getRole() - overriden to return 'Intern'