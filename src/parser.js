"use strict";

const issueParser = require("issue-parser");
const core = require("@actions/core");
const parse = issueParser("github");

const parser = ({ body }) => {
    const parsed = parse(body);
    const refs = parsed.refs;
    const actions = parsed.actions;

    core.debug(actions);
    let output = [];
    
    for (let j = 0; j < actions.close.length; j++) {
        output.push(actions.close[j].issue);
    }

    return output;
  };
  
  module.exports = parser;