// now creating a variable that gives three choices and based on that choice i am given a different list of questions
    // { "Would you like to add another team member? Y or N "}
    // {
    //     type: "list",
    //     name: "job",
    //     message: "Please select team member's job title:",
    //     choices: ["Manager", "Engineer", "Intern"]
    // },
    
    // if they choose Engineer: name, ID, email, and github usuername
    const engineerQuestions = [
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name:"
        },
    
        {
            type: "input",
            name: "employeeID",
            message: "What is your engineer's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username:"
        },
        {
            type: "list",
            name: "job",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        },
    ]

    // github --- getGitHub()
    // getRole() - overriden to return 'Engineer'