// import the robotjs library
var robot = require('robotjs');

var x = 1732;
var y = 915

function main(){
    console.log('Comenzando...');
    sleep(getRandomInt(1000, 1250));
        var color = findColor();

        if (color == false){
            console.log('Couldnt find color, trying again');
        }
    console.log(color);
}

function findColor(){
    var color = robot.getPixelColor(x, y);

    return color;
}

// utility functions

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();