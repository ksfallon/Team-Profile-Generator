// const fs = require('fs');
// const path = require('path')
// const inquirer = require('inquirer');
// const indexHtml = require('.././index');
const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')


function addManager (data) {
      console.log("Here is the const manager object", data);    
      return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Team Page!!</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      </head>
      <body>
          <nav class="navbar navbar-expand-lg navbar-white-50 bg-dark p-5 justify-content-center p5">
              <a class="navbar-brand text-white-50 text-center" href="#"><h1>My Team</h1></a>
          </nav>
          <div class="card-group p-5" id = "add-cards">
          
          <div class="card border border-dark shadow p-3 mb-5 bg-white rounded ml-2 mr-2" style="max-width: 25rem; min-width: 22rem">
          <div class="card-body">
            <div class="card-title bg-info text-white p-3">
              <h5>${data.getName()}</h5>
              <br>
              <h5><i class="fas fa-hat-wizard"></i> ${data.getRole()}</h5> 
            </div>
            <ul class="list-group list-group-flush text-center border border-dark">
              <li class="list-group-item">ID: '${data.getId()}'</li>
              <span>Email: <a href="${data.getEmail()}" target="_blank"class="card-link">${data.getEmail()}</a></span>
              <li class="list-group-item">Office #: ${data.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>`
}

module.exports = addManager;

        
        


      
    