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
    
    for (let j = 0; j < actions[i].close.length; j++) {
        core.debug("DEBUG: ", actions.close[j].action, " | ", actions.close[j].issue);
        output.push(actions.close[j].action, " | ", actions.close[j].issue);
    }

    return output.join(",");
  };
  
  module.exports = parser;