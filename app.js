//asynchronous
const { log } = require('console');
const { readFile, writeFile } = require('fs')

readFile('./f1/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    const second = result;
    readFile('./f1/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result;

        writeFile('./f1/finalfile_async-fs.txt', `hey this is the generated file and the contents are ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });

    });

})