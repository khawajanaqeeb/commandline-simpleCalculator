#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter 1st number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumbr" },
  {
    message: "Select operator from the list",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Percentage",
    ],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumbr);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumbr);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumbr);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumbr);
} else if (answer.operator === "Percentage") {
  console.log((answer.firstNumber / answer.secondNumbr) * 100);
} else {
  console.log("Select Valid operator");
};

