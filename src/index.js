"use strict";

const core = require("@actions/core");
const main = require("./parser");

const outputs = main({
  body: core.getInput("body"),
});

function replaceLast(str, find, replace) {
    const lastIndex = str.lastIndexOf(find);
  
    if (lastIndex === -1) {
      return str;
    }
  
    return str.slice(0, lastIndex) + replace + str.slice(lastIndex + 1);
}

// console.log(outputs);

// for (let i in outputs) {
//     console.log(i);

let issues = JSON.stringify(outputs);
issues = issues.replace("[", "[ ");
let issues2 = replaceLast(issues, "]", " ]");
core.setOutput("item", issues2);
// }