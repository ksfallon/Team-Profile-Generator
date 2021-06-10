
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

## Templates

## New Team Html


## Video of newTeam.html
[Demo for Tests and HTML generator with node js](https://youtu.be/0n3hnycPa3c)
[Demo of HTML generated with node js](https://youtu.be/RtfGkWZ-p5U)
