const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// describe("getGithub", () => {
//     it("returns GitHub username", () => {
//         expect(new Engineer("t").getGitHub()).toBe("t");
//     })
// })
describe("Manager class extends Employee and includes office number", () => {
    const newManager = new Manager("Pam", 2, "pam@aol.com", 9196887686)
    it("The getOfficeNumber() should return newEmployee.office", () => {
        expect(newManager.getOfficeNumber()).toBe(9196887686);
    })

    it("The getRole() should return 'Manager'", () => {
        expect(newManager.getRole()).toBe("Manager");
    })
})