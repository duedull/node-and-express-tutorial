const express = require('express');
const fs = require('fs');
const date = new Date();
const app = express();

app.get('/', (req, res) => {
    fs.mkdir('./practise', (err, res) => {
        console.log('folder is created');
    })
    fs.writeFile(`./practise/${date.getMilliseconds()}.txt`, `so this file is created at ${date.getHours()} - ${date.getMinutes()} - ${date.getSeconds()}`, (err, result) => { if (err) { console.log(err) } console.log('file has been writtned') })
    res.send('hey this is the server responce')
});

app.listen(5135, () => { console.log('server has been started at this port') })