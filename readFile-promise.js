const { readFile } = require('fs');

// function getting_promise(path) {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {

//                 resolve(result);
//             }
//         })
//     })
// }

// getting_promise('./f1/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));



//DOING THE SAME WITH ASYNC-AWAIT

async function getting_promise(path) {
    try {
        const first = await getText(path);
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

getting_promise('../f1/first.txt');