const employeeQuestions = [
    {
        type: "input",
        name: "firstName",
        message: "Please enter employee's first name:"
    },

    {
        type: "input",
        name: "employeeID",
        message: "Please enter employee's ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter employee's email address:"
    },
    {
        type: "list",
        name: "job",
        message: "Please select team member's job title:",
        choices: ["Manager", "Engineer", "Intern"]
    },

]

// going to need functions for these things:
// name -- getName()
// id -- getId()
// email -- getEmail()
// getRole() - should return Employee
// ** THE OTHER THREE CLASSES WILL EXTEND EMPLOYEE
