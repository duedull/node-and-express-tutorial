const path = require('path');

console.log(path.sep);


const filePath = path.join('./f1', 'f2', 'file1.txt');

console.log(filePath);

const absolute_path = path.resolve(__dirname, 'f1', 'f2', 'file1.txt');

console.log(absolute_path);