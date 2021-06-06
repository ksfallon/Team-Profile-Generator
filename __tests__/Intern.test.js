const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

describe("Intern class extends Employee and includes School name", () => {
    const newIntern = new Intern("Pam", 2, "pam@aol.com", "UVA")
    it("The getSchool() should return newEmployee.office", () => {
        expect(newIntern.getSchool()).toBe("UVA");
    })

    it("The getRole() should return 'Intern'", () => {
        expect(newIntern.getRole()).toBe("Intern");
    })
})