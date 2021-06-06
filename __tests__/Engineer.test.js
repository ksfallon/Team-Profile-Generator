const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe("Engineer class extends Employee and includes GitHub Username", () => {
    const newEngineer = new Engineer("Pam", 2, "pam@aol.com", "pam4567")
    it("The getOfficeNumber() should return newEmployee.office", () => {
        expect(newEngineer.getGitHub()).toBe("pam4567");
    })

    it("The getRole() should return 'Manager'", () => {
        expect(newEngineer.getRole()).toBe("Engineer");
    })
})