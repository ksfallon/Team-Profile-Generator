// THIS IS THE PARENT CLASS

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
    return this.name;
    }
    getId() {
    return this.id;
    }
    getEmail() {
    return this.email;
    }
    getRole() {
    return 'Employee';
    }

}

module.exports = Employee;
// going to need functions for these things:
// name -- getName()
// id -- getId()
// email -- getEmail()
// getRole() - should return Employee
// ** THE OTHER THREE CLASSES WILL EXTEND EMPLOYEE
