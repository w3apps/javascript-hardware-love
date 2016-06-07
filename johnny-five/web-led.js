const five = require('johnny-five');
const board = new five.Board();
const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app)
const io = require('socket.io')(httpServer);

const projectRoot = process.cwd();
const appPort = 3000;

let led; // gets assigned a led after the board is connected

//  === Arduino board ===
board.on('ready', function() {
    led = new five.Led(13); // 13 = onboard led
});

// === HTTP server request ===
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/web-led.html');
});

app.get('*.js', function (req, res) {
    res.sendFile(path.join(projectRoot, 'node_modules', req.url));
    console.log(path.join(projectRoot, 'node_modules', req.url));
});

httpServer.listen(appPort, function () {
    console.log('Example app listening on port', appPort);
});

// === Socket connection ===
io.on('connection', function (socket) {
    socket.on('lightLed', function (data) {
        if (data === true) {
            led.on();
        }
        else {
            led.off();
        }
    });
});
