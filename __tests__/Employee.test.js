const Employee = require("../lib/Employee");

describe("Employee class includes all methods", () => {
    const newEmployee = new Employee("Pam", 2, "pam@aol.com")
    it("The getName() should return newEmployee.name", () => {
    expect(getName()).toBe("Pam");
    })
    it("The getId() should return newEmployee.id", () => {
        expect(getName()).toBe(2);
    })
    it("The getEmail() should return newEmployee.email", () => {
        expect(getName()).toBe("pam@aol.com");
    })
    it("The getRole() should return 'Employee'", () => {
        expect(getRole()).toBe("Employee");
    })
})
