class Manager {
    constructor(name, id, email, office) {
      super(name, id, email)
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
  