    // 
    const managerQuestions = [
    
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name:"
        },
    
        {
            type: "input",
            name: "employeeID",
            message: "What is the team manager's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email address:"
        },
        {
            type: "input",
            name: "office",
            message: "What is the team manager's office number:"
        },
        {
            type: "list",
            name: "job",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        },

    ]

    // officeNumber
    // getRole() - overriden to return 'Manager'