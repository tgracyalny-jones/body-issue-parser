"use strict";

const issueParser = require("issue-parser");
const parse = issueParser("github");

const parser = ({ body }) => {
    const parsed = parse(body);
    const refs = parsed.refs;
    const actions = parsed.actions;

    return refs;
    
    let output = [];

    for (i = 0; i < refs.length; i++) {
        // output[i] = {
        //     key: refs[i].issue,
        //     value: 
        //         actions.filter()
        // }
    }


    return outputs;
  };
  
  module.exports = parser;