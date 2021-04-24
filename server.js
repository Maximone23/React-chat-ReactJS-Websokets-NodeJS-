//Connecting the ExpressJS Framework
const express = require('express');
//Create Express App
const app = express();
//Create Server
const server = require('http').Server(app);
//Connecting Socket.io
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms)
});


app.post('/rooms', (req, res) => {
    console.log('post');
});



io.on('connection', socket => {
    console.log('User connected', socket.id);
});

server.listen(5555, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log("Start server!");
});