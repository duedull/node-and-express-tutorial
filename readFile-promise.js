const { readFile } = require('fs');

function getting_promise(path) {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, result) => {
            if (err) {
                reject(err);
            } else {

                resolve(result);
            }
        })
    })
}

getting_promise('./f1/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err));