const fs = require('fs');
const inquirer = require('inquirer');
const indexHtml = require('.././index');
const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')


function addManager (manager) {
      console.log("Here is the const manager object", manager);    
      const newMan = `<div class="card border border-dark shadow p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <div class="card-title bg-info text-white p-3">
              <h5>${manager.getName()}</h5>
              <br>
              <h5>${manager.getRole()}</h5> 
            </div>
            <ul class="list-group list-group-flush text-center border border-dark">
              <li class="list-group-item">ID: '${manager.getId()}'</li>
              <span>Email: <a href="${manager.getEmail()}" target="_blank"class="card-link">${manager.getEmail()}</a></span>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>`
        fs.appendFile('../dist/index.html', newMan,
        (err => console.error(err))
        )
}

addManager()

        
        


      
    