var robot = require('robotjs');
var max = 6032;

/*Comenzar con el item a trabajar en el recuadro 4.3 del inventario*/
function main() {
    console.clear();
    console.log('Comenzando a hacer >> ' + max, ' High Alchs');
    sleep(4000);
    var cycle_runs = 0;
    /* Primero se abre el libro de magia */
    robot.keyTap('f3');
    while (cycle_runs < max) {
        console.clear();
        console.log('High Alchs \t\t>> ' + cycle_runs);
        console.log('High Alchs Restantes \t>> ' + (max - cycle_runs));
        while (true) {
            /* se verifica si esta correctamente abierto el libro */
            if (checkHA()) {
                //console.log('Libro correctamente abierto');
                break;
            } else {
                /* si no, espera */
                //console.log('Aun no se abre el libro');
                sleep(200);
            }
        }
        /* Luego se hace click en el pixel X:1760 Y: 660 */
        sleep(getRandomInt(100, 400));
        robot.moveMouseSmooth(1760, 660, 1);
        robot.mouseClick();
        while (true) {
            /* se verifica si esta correctamente abierto el libro */
            if (checkHA()) {
                //console.log('Libro incorrectamente abierto');
                sleep(200);
            } else {
                //console.log('Inventario correctamente abierto');
                break;
            }
        }
        sleep(getRandomInt(50, 200));
        robot.moveMouseSmooth(1760, 660, 1);
        robot.mouseClick();
        cycle_runs++;
    }
}

function checkHA() {
    var check_x = 1760,
        check_y = 660;
    var sample_color = robot.getPixelColor(check_x, check_y);

    //console.log('Color encontrado en '+check_x,', '+check_y,' es >> '+sample_color);
    return sample_color == '918f07'
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