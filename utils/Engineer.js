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
            name: "office",
            message: "Please enter Engineers's GitHub username:"
        },
    ]