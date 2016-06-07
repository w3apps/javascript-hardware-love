const five = require('johnny-five');
const board = new five.Board();

const motionPin = 2;
let motionCount = 0;

board.on('ready', () => {

    const motion = new five.Motion(motionPin);

    // 'calibrated' occurs once, at the beginning of a session
    motion.on('calibrated', () => {
        console.log('calibrated');
    });

    // 'change' event is triggered when there's motion detected OR if the sensor calibration status changes
    motion.on("change", (data) => {
        // only print if the sensor si calibrated
        if (data.isCalibrated === true) {
            console.log('Movement detected!!!!', motionCount++);
        }
    });

});
