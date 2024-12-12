"use strict";

const issueParser = require("issue-parser");
const parse = issueParser("github");

const parser = ({ body }) => {
    const parsed = parse(body);
    const refs = parsed.refs;
    const actions = parsed.actions;

    let output = [];
    
    for (let i = 0; i < actions.length; i++) {
        output.push(actions[i].close.action);
    }

    return output.join(",");
  };
  
  module.exports = parser;