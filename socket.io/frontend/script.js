const socket = io('http://localhost:5135');

socket.on('connect', (res) => {
    console.log(res);
});

socket.on("message", (data) => {
    console.log(data)
    socket.emit('message', 'hello there');
});