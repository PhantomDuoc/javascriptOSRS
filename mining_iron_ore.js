// import the robotjs library
var robot = require('robotjs');

function main() {

}

function setup() {

}

function findOre() {

}

function colorGrabber() {
    var x = , y = , widht = , height = ;
    var img = robot.screen.capture(x, y, widht, height);

    var colors = [];
    for (var i = 0; i < 500; i++) {
        var random_x = getRandomInt(0, widht-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);
        var screen_x = random_x + x;
        var screen_y = random_y + y;
        console.log('Color encontrado >> '+sample_color+' en x >> '+screen_x+' y >> '+screen_y);
        if(!colors.includes(sample_color)){
           colors[i] = sample_color; 
        }
        
    }
    for(var i = 0; i < 500; i++) console.log('color >> '+colors[i]);
}

function confirmOre() {

}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fullInventory() {
    var inventory_x = 1732;
    var inventory_y = 915;
    var pixel_color = robot.getPixelColor(inventory_x, inventory_y);
    return pixel_color == "aa8850"
}

function isCutting() {
    var x = 94, y = 86, width = 172, height = 31;
    var img = robot.screen.capture(x, y, width, height);
    var check_colors = ["00f500","00d200","00d900","0ee007"
                        ,"00ff00","10d208","01ff00","01ff01"];
    for (var i = 0; i < 500; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (check_colors.includes(sample_color)) {
            return true;
        }
    }
    return false;
}

function dropInventory() {
    drop1();
    drop2();
    drop3();
    drop4();
    drop5();
    drop6();
    drop7();
    drop8();
    drop9();
    drop10();
    drop11();
    drop12();
    drop13();
    drop14();
    drop15();
    drop16();
    drop17();
    drop18();
    drop19();
    drop20();
    drop21();
    drop22();
    drop23();
    drop24();
    drop25();
    drop26();
    drop27();
    drop28();
}

function drop1() {
    var x = getRandomInt(1394, 1456);
    var y = getRandomInt(458, 515);
    robot.moveMouseSmooth(x, y, 1);
    robot.keyToggle('shift', 'down');
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop2() {
    var x = getRandomInt(1498, 1560);
    var y = getRandomInt(458, 515);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop3() {
    var x = getRandomInt(1598, 1660);
    var y = getRandomInt(458, 515);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop4() {
    var x = getRandomInt(1704, 1766);
    var y = getRandomInt(458, 515);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop5() {
    var x = getRandomInt(1394, 1456);
    var y = getRandomInt(530, 587);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop6() {
    var x = getRandomInt(1498, 1560);
    var y = getRandomInt(530, 587);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop7() {
    var x = getRandomInt(1598, 1660);
    var y = getRandomInt(530, 587);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop8() {
    var x = getRandomInt(1704, 1766);
    var y = getRandomInt(530, 587);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop9() {
    var x = getRandomInt(1394, 1456);
    var y = getRandomInt(630, 656);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop10() {
    var x = getRandomInt(1498, 1560);
    var y = getRandomInt(630, 656);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop11() {
    var x = getRandomInt(1598, 1660);
    var y = getRandomInt(630, 656);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop12() {
    var x = getRandomInt(1704, 1766);
    var y = getRandomInt(630, 656);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop13() {
    var x = getRandomInt(1394, 1456);
    var y = getRandomInt(675, 732);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop14() {
    var x = getRandomInt(1498, 1560);
    var y = getRandomInt(675, 732);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop15() {
    var x = getRandomInt(1598, 1660);
    var y = getRandomInt(675, 732);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop16() {
    var x = getRandomInt(1704, 1766);
    var y = getRandomInt(675, 732);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop17() {
    var x = getRandomInt(1394, 1456);
    var y = getRandomInt(744, 801);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop18() {
    var x = getRandomInt(1498, 1560);
    var y = getRandomInt(744, 801);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop19() {
    var x = getRandomInt(1598, 1660);
    var y = getRandomInt(744, 801);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop20() {
    var x = getRandomInt(1704, 1766);
    var y = getRandomInt(744, 801);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop21() {
    var x = getRandomInt(1400, 1450);
    var y = getRandomInt(830, 870);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop22() {
    var x = getRandomInt(1498, 1560);
    var y = getRandomInt(830, 870);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop23() {
    var x = getRandomInt(1598, 1660);
    var y = getRandomInt(819, 876);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop24() {
    var x = getRandomInt(1704, 1766);
    var y = getRandomInt(830, 870);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop25() {
    var x = getRandomInt(1394, 1456);
    var y = getRandomInt(910, 946);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop26() {
    var x = getRandomInt(1498, 1560);
    var y = getRandomInt(910, 946);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop27() {
    var x = getRandomInt(1598, 1660);
    var y = getRandomInt(910, 946);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
}

function drop28() {
    var x = getRandomInt(1704, 1766);
    var y = getRandomInt(910, 946);
    robot.moveMouseSmooth(x, y, 1);
    sleep(getRandomInt(50, 100));
    robot.mouseClick();
    sleep(getRandomInt(500, 600));
    robot.keyToggle('shift', 'up');
}