const express = require('express')
const app = express()
const http = require('http')
const { Server, Socket } = require('socket.io');

const http_server = http.createServer(app);
const io = Socket(http_server, {
    cors: {
        origin: 'http://127.0.0.1:5500'
    },
});

socket_server.on('connection', (socket) => {
    console.log(socket);

    socket.emit("message", "hello");

    socket.on("message", (data) => {
        console.log(data)
    })
});

http_server.listen(5135, () => { console.log(`server is started at this port`); })