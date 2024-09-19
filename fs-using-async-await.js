const { readFile, writeFile } = require('fs').promises;

let first = './f1/first.txt';
let second = './f1/second.txt';

const funAppend = async () => {
    try {
        const first = await readFile('./f1/first.txt', 'utf8')
        const second = await readFile('./f1/second.txt', 'utf8')
        console.log(first, second);
        await writeFile('./f1/new-file.txt', `this is the new file made with the contents of first.txt and second.txt: ${first}  ${second}`, { flag: 'a' });

        // console.log(third); 
    }
    catch (error) {
        console.log(error);
    }
}

funAppend();