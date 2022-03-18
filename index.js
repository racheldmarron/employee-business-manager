const inquirer = require("inquirer");
const consoleTable = require("console.table");
const mysql = require("mysql2");
const { tmpNameSync } = require("tmp");
// const { SSL_OP_EPHEMERAL_RSA } = require("constants");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3001",
    user: "root",
    password: "Jonistevie59!",
    database: "employee_db",
}); 

connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connecteed successfully");
    init();
}); 

function init() {
    inquirer.prompt([
        {
           type: "list",
           name: "options",
           message: "What would you like to do?",

           choices: [
            "View All Employees",
            "View All Roles",
            "View All Departments",
            "Add An Employee",
            "Add A Role",
            "Add A Department",
            "Update An Existing Employee",
           ],
        },
    ])

    .then(function(res) {
        switch (res.options) {
            case "View All Employees":
                viewAllEmployees();
                break; 
            case "View All Roles":
                viewAllRoles();
                break; 
            case "View All Deparments":
                viewAllDepartments();
                break; 
            case "Add An Employee":
                addEmployee();
                break; 
            case "Add A Role":
                addRole();
                break; 
            case "Add A Department":
                addDepartment();
                break; 
            case "Update An Existing Employee":
                updateEmployee();
                break; 
        }
    }); 
}

