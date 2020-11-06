var robot = require('robotjs');

function main() {
    console.clear();
    console.log('Comenzando a hacer curse splashing');
    sleep(3000);
    robot.keyTap('f3');
    var x = getRandomInt(1693, 1693+33);
    var y= getRandomInt(595, 595+25);
    outer_loop:
    while(true) {
        robot.moveMouseSmooth(x, y, 1);
        robot.mouseClick();
        sleep(getRandomInt(1500, 1000));

    }
}

function findMonk() {
    var x = 797, y = 37, width = 471, height = 611;
    var img = robot.screen.capture(x, y, width, height);
    var monk_colors = ["3c1210","631e1a","4a1613","982e28",
    "b9845b","320f0d","962d27","7e2621","8b2a24","77241f",
    "7e2620", "ab7951","805b3d"
    ]
    for (var i = 0; i < 5000; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if(monk_colors.includes(sample_color)){
            var screen_x = random_x + x;
            var screen_y = random_y + y;
            return {x: screen_x, y: screen_y};
        }
    }
    return false;
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();