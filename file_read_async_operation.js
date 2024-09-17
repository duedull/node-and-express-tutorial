//this code is done in order to understand the event-loop in node js

const { readFile } = require('fs');

console.log('started the task');
readFile('./f1/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
    }

    console.log(result);
    console.log('task is done');
});

console.log('ended the code');  