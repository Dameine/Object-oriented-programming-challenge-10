//file system
const fs = require('fs');

//inquirer
const inquirer = require('inquirer');

//import shapes from lib/shapes.js
const { Circle, Square, Triangle } = require('./lib/shapes');

// Function to prompt the user for input
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter up to three characters for the text:",
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter a color keyword or hexadecimal number for text color:",
        },
        {
            type: "list",
            name: "shape",
            message: "Which shape would you like to draw?",
            choices: ["Triangle", "Square", "Circle"],
        },
        {
            type: "input",
            name: "color",
            message: "Enter a color keyword or hexadecimal number for shape color:",
        },
    ]);
}

//function to write the SVG file
function writeToFile(data) {
    //create a new instance of the shape class based on the user input
    let shape;
    switch (data.shape) {
        case "Triangle":
            shape = new Triangle(data.color);
            break;
        case "Square":
            shape = new Square(data.color);
            break;
        case "Circle":
            shape = new Circle(data.color);
            break;
    }

    //create the SVG text based on the user input
    const svg = `
<svg height="200" width="200">
    ${shape.render()}
    <text x="50%" y="50%" fill="${data.textColor}" font-size="40" text-anchor="middle">${data.text}</text>
</svg>
    `;

    //write the SVG text to a file
    fs.writeFile('./examples/logo.svg', svg, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created successfully');
        }
    });
}

// Main function to execute the script
function main() {
    promptUser().then(writeToFile).catch(err => console.error(err));
}

main();