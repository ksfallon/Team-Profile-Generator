const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe("getGithub", () => {
    it("returns GitHub username", () => {
        expect(new Engineer("t").getGitHub()).toBe("t");
    })
})