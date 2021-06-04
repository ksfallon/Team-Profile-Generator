// now creating a variable that gives three choices and based on that choice i am given a different list of questions
    // { "Would you like to add another team member? Y or N "}
    // {
    //     type: "list",
    //     name: "job",
    //     message: "Please select team member's job title:",
    //     choices: ["Manager", "Engineer", "Intern"]
    // },
    
    // if they choose Intern: name, ID, email, and school
    const internQuestions = [
        {
            type: "input",
            name: "name",
            message: "What is your intern's name:"
        },
    
        {
            type: "input",
            name: "id",
            message: "What is your intern's ID:"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school name:"
        },
        {
            type: "list",
            name: "job",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        },
    ]

    // school --- getSchool()
    // getRole() - overriden to return 'Intern'