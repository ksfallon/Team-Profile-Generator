const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const indexHtml = require('.././index');
const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')


function addIntern (value) {
      console.log("Here is the const intern object", value);    
      const newIntern =`<div class="card border border-dark shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <div class="card-title bg-info text-white p-3">
          <h5>${value.getName()}</h5>
          <br>
          <h5><i class="fas fa-award"></i> ${value.getRole()}</h5> 
        </div>
        <ul class="list-group list-group-flush text-center border border-dark">
          <li class="list-group-item">ID: ${value.getId()}</li>
          <li class="list-group-item">
              <span>Email: <a href="${value.getEmail()}" target="_blank"class="card-link">${value.getEmail()}</a></span>
          </li>
          <li class="list-group-item"> School: ${value.getSchool()}</li>
        </ul>
      </div>
    </div>`
        fs.appendFile('../dist/newTeam.html', newIntern,
        (err => console.error(err))
        )
}

module.exports = addIntern