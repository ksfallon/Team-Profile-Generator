// const fs = require('fs');
// const path = require('path')
// const inquirer = require('inquirer');
// const indexHtml = require('.././index');
const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')


function addManager (data) {
      console.log("Here is the const manager object", data);    
      return `<div class="card border border-dark shadow p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <div class="card-title bg-info text-white p-3">
              <h5>${data.getName()}</h5>
              <br>
              <h5>${data.getRole()}</h5> 
            </div>
            <ul class="list-group list-group-flush text-center border border-dark">
              <li class="list-group-item">ID: '${data.getId()}'</li>
              <span>Email: <a href="${data.getEmail()}" target="_blank"class="card-link">${data.getEmail()}</a></span>
              <li class="list-group-item">Office number: ${data.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>`
}

module.exports = addManager;

        
        


      
    