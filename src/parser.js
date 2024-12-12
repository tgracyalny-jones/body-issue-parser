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
    
    for (let i = 0; i < actions.length; i++) {
        core.debug(actions[i].close);
        output.push(actions[i].close.action);
    }

    return output.join(",");
  };
  
  module.exports = parser;