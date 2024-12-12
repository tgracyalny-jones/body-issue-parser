"use strict";

const core = require("@actions/core");
const main = require("./parser");

const outputs = main({
  body: core.getInput("body"),
});

core.setOutput("item", JSON.stringify(outputs));