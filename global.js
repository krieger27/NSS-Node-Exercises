#!/usr/bin/env node

//Create a JavaScript file to act as a Node.js program named global.js. The file should contain JavaScript code to output detailed version information of Node.js and the underlying V8 JavaScript engine to the terminal using the process global object. In addition, the program should be able to directly execute.

// Expected:

// $ ./global.js
// Node.js version: v6.3.1
// V8 version: 5.0.71.57

const nodeVersion = process.versions.node;


const { versions: {v8, node} } = process;

console.log(`Node.js version: ${node} \n V8 version: ${v8}`);