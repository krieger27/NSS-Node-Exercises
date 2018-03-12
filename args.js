#!/usr/local/bin node 


//Instructions
// Create a JavaScript file to act as a Node.js program named args.js. This program should accept at least one number as a command-line argument. The arguments should be summed up into a single value.

// Don't worry about floating point rounding errors.

// Expected:
// $ ./args.js 1
// 1
// $ ./args.js -.42 0 3.14
// 2.72
// $ ./args.js .1 .2
// 0.30000000000000004



const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

let numSum = (num1, num2) => {
    sum = num1 + num2;
    console.log(sum);
}

numSum(num1, num2);

