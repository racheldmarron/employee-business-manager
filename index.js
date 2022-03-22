const inquirer = require("inquirer");
const consoleTable = require("console.table");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Jonistevie59!",
    database: "employee_db",
}); 

connection.connect(function (err) {
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

function addEmployee() {
    inquirer
      .prompt([
        {
          name: "firstname",
          type: "input",
          message: "Enter the employee's first name",
        },
        {
          name: "lastname",
          type: "input",
          message: "Enter the employee's last name",
        },
        {
          name: "roles",
          type: "list",
          message: "What is the employee's role?",
          choices: selectRole(),
        },
        {
          name: "choice",
          type: "list",
          message: "What is name of the employee's manager?",
          choices: selectManager(),
        },
      ])
      .then(function (val) {
        let rolesId = selectRole().indexOf(val.roles) + 1;
        let managerId = selectManager().indexOf(val.choice) + 1;
        connection.query(
          "INSERT INTO employees SET firstName = ?, lastName = ?, managerId = ?, roleId = ?",
          [val.firstname, val.lastname, managerId, rolesId ],
  
          function (err) {
            if (err) throw err;
            console.table(val);
            init();
          }
        );
      });
  }
  
  let rolesArray = [];
  function selectRole() {
    connection.query("SELECT * FROM roles", function (err, res) {
      if (err) throw err;
      for (let i = 0; i < res.length; i++) {
        rolesArray.push(res[i].title);
      }
    });
    return rolesArray;
  }

  let managersArray = [];
  function selectManager() {
    connection.query(
      "SELECT firstName, lastName FROM employees WHERE managerId IS NULL",
      function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
          managersArray.push(res[i].first_name);
        }
      }
    );
    return managersArray;
  }
  

  function addRole() {
    connection.query(
      "SELECT roles.depId AS Department, roles.title AS Title, roles.salary AS Salary FROM roles",
      function (err, res) {
        inquirer
          .prompt([
            {
              name: "Department",
              type: "input",
              message: "What is the Department ID? [ 1 = Engineering, 2 = Product, 3 = Design, 4 = Data Research, 5 = Legal, 6 = HR]",
            },
            {
              name: "Title",
              type: "input",
              message: "What is this role's title",
            },
            {
              name: "Salary",
              type: "input",
              message: "What is this role's salary?",
            },
          ])
          .then(function (res) {
            connection.query(
              "INSERT INTO roles SET ?",
              {
                depId: res.Department,
                title: res.Title,
                salary: res.Salary,
              },
              function (err) {
                if (err) throw err;
                console.table(res);
                init();
              }
            );
          });
      }
    );
  }
  

  function addDepartment() {
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What department would you like to add?",
        },
      ])
      .then(function (res) {
        connection.query(
          "INSERT INTO department SET ? ",
          {
            name: res.name,
          },
          function (err) {
            if (err) throw err;
            console.table(res);
            init();
          }
        );
      });
  }
  

  function viewAllEmployees() {
    connection.query(
      "SELECT employees.roleId, employees.firstName, employees.lastName, roles.title, roles.salary, departments.department FROM employees INNER JOIN roles on roles.id = employees.roleId INNER JOIN departments on departments.id = roles.depId left join employee e on employees.manager = e.id;",
      function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
      }
    );
  }
  

  function viewAllRoles() {
    connection.query(
      "SELECT roles.id, roles.title, departments.deaprtment AS departments, roles.salary FROM roles LEFT JOIN departments on roles.depId = departments.id;",
      function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
      }
    );
  }
  
  function viewAllDepartments() {
    connection.query(
      "SELECT * FROM departments;",
      function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
      }
    );
  }
  
  function updateEmployee() {
    connection.query(
      "SELECT employees.lastName, roles.title FROM employees JOIN roles ON employees.roleId = roles.id;",
      function (err, res) {
        if (err) throw err;
        console.log(res);
        inquirer
          .prompt([
            {
              name: "lastname",
              type: "list",
              choices: function () {
                let lastname = [];
                for (let i = 0; i < res.length; i++) {
                  lastname.push(res[i].last_name);
                }
                return lastname;
              },
              message: "What is the Employee's last name? ",
            },
            {
              name: "roles",
              type: "list",
              message: "What is the Employees new role?",
              choices: selectRole(),
            },
          ])
          .then(function (val) {
            let rolesId = selectRole().indexOf(val.roles) + 1;
            connection.query(
              "UPDATE employees SET rolesId = ? WHERE lastName = ?",
              [rolesId, val.lastname],
              function (err) {
                if (err) throw err;
                console.table(val);
                init();
              }
            );
          });
      }
    );
  } 