const Employee = require("../lib/Employee");

describe("Employee class includes all methods", () => {
    const newEmployee = new Employee("Pam", 2, "pam@aol.com")
    it("The getName() should return newEmployee.name", () => {
        expect(newEmployee.getName()).toBe("Pam");
    })
    it("The getId() should return newEmployee.id", () => {
        expect(newEmployee.getId()).toBe(2);
    })
    it("The getEmail() should return newEmployee.email", () => {
        expect(newEmployee.getEmail()).toBe("pam@aol.com");
    })
    it("The getRole() should return 'Employee'", () => {
        expect(newEmployee.getRole()).toBe("Employee");
    })
})
