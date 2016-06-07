var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

    var led = new five.Led(13); // 13 = onboard led

    this.repl.inject({
        led: led,
        customMethod: () => {
            led.blink();
        }
    });

});
