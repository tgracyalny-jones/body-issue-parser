"use strict";

const core = require("@actions/core");
const main = require("./parser");

// const outputs = main({
//   body: core.getInput("body"),
// });

// console.log(outputs);

// for (let i in outputs) {
//     console.log(i);
core.setOutput("item", "hi");
// }