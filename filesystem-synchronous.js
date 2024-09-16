//fs 


const { readFileSync, writeFileSync, } = require('fs');
//to read an already existing file
const first = readFileSync('./f1/first.txt', 'utf8');
const second = readFileSync('./f1/second.txt', 'utf8');
console.log(first + ' ' + second);


//to write or create a new file with some data in it
// writeFileSync('./f1/f2/generated-file', `hey this is the generated file and the contents are ${first} and ${second}`);


// this {flag: 'a'} at the end is used to append the contents of the existing file
writeFileSync('./f1/f2/generated-file', `hey this is the generated file and the contents are ${first} and ${second}`, { flag: 'a' });
