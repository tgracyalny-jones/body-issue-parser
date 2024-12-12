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
        for (let j = 0; j < actions[i].close; j++) {
            core.debug("DEBUG: ", actions[i].close[i].action, " | ", actions[i].close[i].issue);
            if (actions[i].close[i] != "") {
                output.push(actions[i].close[i].issue);
            }
        }
    }

    return output.join(",");
  };
  
  module.exports = parser;