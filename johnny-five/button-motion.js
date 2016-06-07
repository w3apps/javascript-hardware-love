var five = require('johnny-five');
var board = new five.Board();

const motionPin = 4;
let motionCount = 0;

board.on('ready', () => {

    var button = new five.Button({
        pin: motionPin,
        isPullup: true
    });

    button.on('down', () => {
        console.log('Movement detected!!!!', motionCount++);
    });

    button.on('up', () => {
        console.log('Movement detected!!!!', motionCount++);
    })

});
