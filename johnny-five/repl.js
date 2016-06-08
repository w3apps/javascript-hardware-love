var five = require('johnny-five');
var board = new five.Board();

const ledPin = 12;

board.on('ready', function() {

    var led = new five.Led(ledPin);

    this.repl.inject({
        led: led,
        customMethod: () => {
            led.blink();
        }
    });

});
