const Employee = require('./Employee');

class Manager extends Employee {
    constructor(fname, id, email, office) {
      super(fname, id, email)
      this.office = office;
  
    }
    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.office
    }
  }
  
// default start function
    

    // officeNumber
    // getRole() - overriden to return 'Manager'

module.exports = Manager;
  