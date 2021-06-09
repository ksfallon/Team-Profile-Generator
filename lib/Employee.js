// THIS IS THE PARENT CLASS

class Employee {

    constructor(fname, id, email) {
        this.fname = fname;
        this.id = id;
        this.email = email;
    }

    getName() {
    return this.fname;
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

