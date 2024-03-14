"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        type: 'number',
        name: 'numberOne',
        message: 'Enter the first number',
    },
    {
        type: 'number',
        name: 'numberTwo',
        message: 'Enter the second number',
    },
    {
        type: 'list',
        name: 'operator',
        choices: ["+", "-", "*", "/"],
        message: 'Select operator',
    },
]);
var numberOne = answers.numberOne, numberTwo = answers.numberTwo, operator = answers.operator;
if (numberOne && numberTwo && operator) {
    var result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("your result is : ", result);
}
else {
    console.log("Please enter valid input");
}
