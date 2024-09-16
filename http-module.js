const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('this is the homepage');
    }

    if (req.url === '/about') {
        res.end('this is the about page');
    }

    // res.end(`<h1>OOPS</h1> <br> we can't find the page you looking for
    //     <a href="/">Back to home page </a> 
    //     `);
});

server.listen(5135);