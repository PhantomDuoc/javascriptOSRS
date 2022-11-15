// import the robotjs library
var robot = require('robotjs');
var cycle_max = 1000;

function main(){
    console.log('Comenzando...');
    sleep(getRandomInt(1000, 1250));
    // setup();
    var cycles_done = 0;
    // cycle_max /= 14;
    var colores = [];
    outer_loop:
    while (cycles_done < cycle_max){
        var color = findColor();

        if (color == false){
            console.log('Couldnt find color, trying again');
            continue;
        }
/*         sleep(getRandomInt(300, 500)); */
        colores.push(color);
        cycles_done++;
    }
    console.log(cycle_max," colores almacenados.")
    console.log(colores.toString());
}

function findColor(){
    var color = robot.getPixelColor(robot.getMousePos().x, robot.getMousePos().y);

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