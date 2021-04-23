//Connecting the ExpressJS Framework
const express = require('express');
//Connecting Socket.io
const ws = require('socket.io');

const app = express();

const rooms = new Map();

app.get('/rooms', (req, res) => {
    rooms.set()
    res.json(rooms)
});

app.listen(5555, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log("Start server!");
});