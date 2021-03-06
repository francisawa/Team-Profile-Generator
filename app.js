const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const fullTeam = []
function makeManager(){
    inquirer.prompt([
        {

            type: "input",
            name: "name",
            message: "What is the managers name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the managers id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the managers email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?"
        }

    ]).then(data => {
        const manager = new Manager(data.name,data.id,data.email,data.officeNumber)
 fullTeam.push(manager)
 addMembers()
    })
}
function makeEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Engineer office number?"
        }

    ]).then(data => {
        const manager = new Manager(data.name,data.id,data.email,data.officeNumber)
 fullTeam.push(manager)
 addMembers()
    })
}
function makeIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the intern office number?"
        }

    ]).then(data => {
        const manager = new Manager(data.name,data.id,data.email,data.officeNumber)
 fullTeam.push(manager)
 addMembers()
    })
}
function addMembers(){
    inquirer.prompt([
        {
            type: "list",
            name: "member",
            message: "What team member do want to add?",
            choices: [
                "Engineer","Intern","finished"
            ]
        }
    ]).then(data =>{
        if(data.member === "Engineer" ){
            addEngineer()
        }
        else if(data.member === "Intern"){
            addIntern()

        }
        else {
            renderTeam()
        }
    } )
}
function renderTeam(){
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,render(fullTeam), "utf8")
}
makeManager()
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
