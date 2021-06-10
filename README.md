
<h1 align ="center"> Team Profile Generator </h1>

### **TABLE OF CONTENTS:**
1. [Overview of Team Profile Generator](#overview)
2. [Constructor Classes](#classes)
3. [Tests for Classes](#tests)
4. [HTML.js Templates for Employees](#templates)
4. [newTeam.html created in project](#new-team-html)
3. [Video of creating the newTeam.html](#video-of-newTeam.html)

## Overview

- Our task is the create an application that builds a website with profiles of a software engineering team. We must use node.js to create it and we will use npm Inquirer to collect user input to build the site. We will use the module fs to create paths between js files, so functions from different pages can communicate. The path module is used to connect files and directory paths.
- We were not given starter code for this project. But we were given suggestions for folders to create to help us separate the different files we would need to create.


## Classes
Our classes were relatively straightforward, but we needed to make sure three of the classes extended the parent class Employee.
1. In order to do this I first created the class constructor **Employee** and it has 3 parameters: *fname*, *id* and *email*. And they are simply called *this.fname = fname*, etc, within the constructor. Since **Employee** is the parent function and the other three (**Engineer**, **Intern** and **Manager**) extend **Employee**, it has the functions *getName*, *getId* and *getEmail* which refer to the three parameters all of the classes use. These functions are used to help create the html and are within the temporal literals for the engineers, manager and interns created. **Employee** also has *getRole()* which returns the string ‘Employee’.
2. **Engineer**, **Intern** and **Manager** all must require Employee so they can actually extend Employee. This means that they can call to employee for the parameters *fname*, *id* and *email*. But all of these have an additional parameter that are unique to them. **Manager** has an office number, **Engineer** has a github username and **Intern** has a school name. In their constructors they show the *fname*, *id* and *email* and their own unique parameter. Below with *super()* the 3 parent parameters are listed and the unique parameters are established with *this* 

`this.phone = phone`<br>
`this.github = github`<br>
 `this.school = school`<br>

- **Engineer**, **Intern** and **Manager** all have the *getRole()* function that returns the string of their own name. They all also have a function that will get their unique parameter:

`getGitHub()` <br>
`getSchool()`<br>
`getOfficeNumber()`<br>

3. Finally, at the end of each JS file the class is exported so it can be used in the other JS files and also in the tests. *module.exports* can be used to export a class such as these four, but it can also be used to export specific functions which is what I did to create the temporal literals. Module.exports is set equal to the class names or the functions so they can be called on by other files.

## Tests
The tests, like the classes, are straightforward but are necessary to make sure the functions within the classes are working properly.

1.	I created the tests first for the **Employee** class. I needed to require the Employee class js file to be able to run the files within it.
2.	Since the functions are all within the class I’m going to use the *describe(name,fn)* to create a block with functions within it. All of the functions are based off of the class parameters so it makes sense to encase the tests withing a main test block. In the describe section the main test states “Employee class includes all methods” to explain that all of the tests are within the class **Employee**. 
3.	Within the Describe the first thing is I call a newEmployee const which equals new Employee with (name = “Pam” , id = 2, email = “pam@aol.com”). By calling it at the beginning I can reference it in the four methods/functions I’m using to test the functions within **Employee** class. 
4.	Three of the four methods I created call on the *newEmployee* const and test the function that is connected to that parameter. Here is an example:

`it(“The getName() should return newEmployee.name”, () => {
	expect(newEmployee.getName()).toBe(“Pam”); })`

- *it* is declaring the method/test of “The getName() should return newEmployee.name” and when I run the test *newEmployee* through the *getName* function I **expect** the response **To Be** “Pam”.
- the next two tests are set up the same way just using *id* and *getId* to expect 2, and *email* and *getEmail* to expect pam@aol.com.
- The last method calls on the newEmployee const, but no matter what const is called *getRole* will always return *Employee* every time it runs.

`it(“The getRole() should return ‘Employee’”, () => {
	expect(newEmployee.getRole()).toBe(“Employee’”); })`

5.	**Engineer**, **Intern** and **Manager** tests all have a very similar setup. 
    a.	They all require the class javascript they are running tests for at the top of their page.
    b.	They all have a describe to block out their functions.
    c.	Since they all extend **Employee** they only need to run tests for the functions *getRole()* and then tests for their unique parameters: *getOfficeNumber()*, *getGitHub()* and *getSchool()*.
## Templates
1.	Const are created for each type of employee, so that specific information can be placed in the correct temporal literal. 

- The const managerQuestions is the first one and is called on in the first function called *pushManager()* the answers (managerAnswers) const is the put into a new const called *manager*. Using **fs.writeFile** a new html file is created called *newTeam.html*, pushes the *manager* into the *addManager()* function in the *manHtml.js* file.
- In this file it returns the beginning of the HTML file and the card for manager. It is set in a temporal literal and calls on the class js file for Manager and uses those functions to give the parameter input. Here is an example (the const manager runs through as data):

 `<h5>${data.getName()}</h5>`

- I included links for bootstrap and font awesome in the head section of the HTML for styling. I use common bootstrap classes such as cards and use bootstrap code to change font color, margins, padding, background color, etc.
- At the bottom of the file I use module.exports again to make sure the addManager function is called in index.js. The key is within the index.js file when you require the manhtml file the const name equals addManager. It looks like this is the only way to read the specific function you want to call on.

2.	 After the top of the html and the manager card are used to create the beginning of the HTML then another function is called **chooseTeamMember()** . 

- This function has the next question for the inquirer which gives three choices [“Engineer”, “Intern”, “I don’t want to add anymore team members”] and *then* put the choice/*chooseAnswers* through a switch case which either sends the user to the Engineer questions, Intern questions and the default sends it to the *finalHTML()* function.
- To add the engineer or intern cards to the HTML I have a function called *writeToFile(filename, data)* and it uses fs to append a file, and uses path to join the new *data* -- either the engineer temporal literal file or the intern temporal literal file to *filename* – here it is *newTeam.html*. 
- The *pushEngineer()* and *pushIntern()* are very similar to *pushManager()*. They use inquirer.prompt to call on their const questions, and then use those answers for create new const (newEngineer or newIntern) which are connected to their perspective class files. But they call on *writeToFile()* to call on the *addEngineer()* or *addIntern()* temperal literal functions.
- And finally the *finalHTML()* appends the end of the html with the final parts of the bootstrap script and console.logs “Your team HTML file is ready!”

## New Team Html
- Here is a screen shot of the newTeam.html that is produced with this app. The email links open a mail app with the team members email in the to: area and the github link(s) for the engineer(s) are linked to open in another webpage to their specific GitHub page.

![NewTeam]()
## Video of newTeam.html

[Demo for Tests and HTML generator with node js](https://youtu.be/0n3hnycPa3c)

[Demo of HTML generated with node js](https://youtu.be/RtfGkWZ-p5U)
