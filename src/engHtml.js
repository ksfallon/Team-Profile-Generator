const fs = require('fs');
const inquirer = require('inquirer');
const indexHtml = require('.././index');
const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')


function addEngineer (value) {
const newEngineer = `<div class="card border border-dark shadow p-3 mb-5 bg-white rounded">
<div class="card-body">
  <div class="card-title bg-info text-white p-3">
    <h5>${newEngineer.getName()}</h5>
    <br>
    <h5><i class="fas fa-brain"></i> ${newEngineer.getRole()}</h5> 
  </div>
  <ul class="list-group list-group-flush text-center border border-dark">
    <li class="list-group-item">ID: ${newEngineer.getId()}</li>
    <li class="list-group-item">
        <span>Email: <a href="${newEngineer.getEmail()}" target="_blank"class="card-link">${newEngineer.getEmail()}</a></span>
    </li>
    <li class="list-group-item">
        <span>Github: <a href="https://github.com/${newEngineer.getGithub()}" target="_blank"class="card-link">${newEngineer.getGithub()}</a></span>
    </li>
  </ul>
</div>
</div>`
fs.appendFile('../dist/newTeam.html', newEngineer,
(err => console.error(err))
)
}

module.exports = addEngineer;