// const fs = require('fs');
// const path = require('path')
// const inquirer = require('inquirer');
// const indexHtml = require('.././index');
const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')


function addEngineer (data) {
  console.log("Here is the const newEngineer object", data);   
  return `<div class="card border border-dark shadow p-3 mb-5 bg-white rounded ml-2 mr-2" style="max-width: 25rem; min-width: 22rem">
<div class="card-body">
  <div class="card-title bg-info text-white p-3">
    <h5>${data.getName()}</h5>
    <br>
    <h5><i class="fas fa-brain"></i> ${data.getRole()}</h5> 
  </div>
  <ul class="list-group list-group-flush text-center border border-dark">
    <li class="list-group-item">ID: ${data.getId()}</li>
    <li class="list-group-item">
        <span>Email: <a href="${data.getEmail()}" target="_blank"class="card-link">${data.getEmail()}</a></span>
    </li>
    <li class="list-group-item">
        <span>Github: <a href="https://github.com/${data.getGitHub()}" target="_blank"class="card-link">${data.getGitHub()}</a></span>
    </li>
  </ul>
</div>
</div>`
}

module.exports = addEngineer;