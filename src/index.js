"use strict";

const core = require("@actions/core");
const main = require("./parser");

const outputs = main({
  body: core.getInput("body"),
});

for (let i in outputs) {
  core.setOutput(i, i);
}