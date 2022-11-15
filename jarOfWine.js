// import the robotjs library
var robot = require('robotjs');
var cycle_max = 14157;

function main(){
    console.log('Comenzando...');
    setup();
    var cycles_done = 0;
    cycle_max /= 14;
    outer_loop:
    while (cycles_done < cycle_max){
        var banker = findBanker();

        if (banker == false){
            console.log('Couldnt find banker, trying again');
            continue;
        }
        sleep(getRandomInt(100, 200));
        robot.moveMouseSmooth(banker.x, banker.y, 1);
        robot.mouseClick();
        sleep(getRandomInt(1500, 2000));
        depositInventory();        
        sleep(getRandomInt(500,1500));
        withdrawJugsAndGrapes();
        startMixing();
        
        while (true){
            if (lvlUpCheck()){
                //console.log('debug');
                //otro inventario si se sube de lvl (solucion parche)
                continue outer_loop;
            }else{
                if (JugLeft()){
                    sleep(getRandomInt(200, 700));
                }else{
                    break;
                }
            }  
        }
        cycles_done++;
    }
}

function lvlUpCheck(){
    var x = 275, y = 789, width = 868, height = 24;
    var img = robot.screen.capture(x, y, width, height);

    var check_colors = ["00007f","090881","00007e","040480"
                        ,"000080","080880","1d1b82","010180"
                        ,"0a0980","00007e","060580","090981"
                        ,"020280","090881","060681","0b0a81"
                        ,"00007d","070681","0a0a81","050481"];

    for (var i = 0; i < 2000; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if(check_colors.includes(sample_color)){
            console.log('Leveled up!, starting to fletch again...');
            return true;
        }
    }
    return false;
}

function depositInventory(){
    var random_x = getRandomInt(1055, 1125);
    var random_y = getRandomInt(630, 680);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
}

function startMixing(){
    var random_x = getRandomInt(1510, 1540);
    var random_y = getRandomInt(690, 720);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
    sleep(getRandomInt(500, 700));
    random_x = getRandomInt(1615, 1645);
    random_y = getRandomInt(690, 720);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
    sleep(getRandomInt(1500, 2500));
    robot.keyTap('space');
}

function withdrawJugsAndGrapes(){
    var random_x = getRandomInt(905, 945);
    var random_y = getRandomInt(210, 230);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
    sleep(getRandomInt(500, 700));
    random_x = getRandomInt(1020, 1060);
    random_y = getRandomInt(210, 230);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
    sleep(getRandomInt(500, 700));
    robot.keyTap('escape');
}

function JugLeft(){
    var check_x = 1740;
    var check_y = 920;
    var pixel_color = robot.getPixelColor(check_x, check_y);
    return pixel_color == "625959";
}

function findBanker(){
    var x = 20, y = 70, width = 150, height = 600;
    var img = robot.screen.capture(x, y, width, height);

    var banker_colors = ["6a605f","6f6565","6a6060","675e5d"
                        ,"484141","524b4b","635a5a","292525"
                        ,"645b5a","524b4a","4c4545","5a5251"
                        ,"524a4a","4a4343","554d4d","574f4f"];
    for (var i = 0; i < 1000; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (banker_colors.includes(sample_color)){
            var screen_x = random_x + x;
            var screen_y = random_y + y;

            //if (confirmBanker(screen_x, screen_y)){
                console.log('Found banker at >> '+ screen_x, ', '+screen_y, ' color >> '+sample_color);
                return {x: screen_x, y: screen_y};
            //}else{
            //    console.log('Unconfirmed banker at >> '+ screen_x, ', '+screen_y, ' color >> '+sample_color);
            //}
        }
    }
    return false;
}

function confirmBanker(screen_x, screen_y){
    var x = 20, y = 70, width = 380, height = 630;
    var img = robot.screen.capture(x, y, width, height);

    robot.moveMouseSmooth(screen_x, screen_y, 1);
    var confirm_colors = ["f9f903","fdfc03","fbfa08","f5f404"
                        ,"ffff00","ffff01","fefe00","fdfd03"];

    for (var i = 0; i < 1000; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (confirm_colors.includes(sample_color)){
            return true;
        }
    }
    return false;
}

function setup(){
    sleep(4000);
    var brujula_min_x = 1355;
    var brujula_max_x = 1405;
    var brujula_min_y = 40;
    var brujula_max_y = 90;
    //
    //clickeando la brujula
    //
    robot.moveMouseSmooth(getRandomInt(brujula_min_x, brujula_max_x),getRandomInt(brujula_min_y, brujula_max_y), 1);
    robot.mouseClick();
    sleep(getRandomInt(500, 1000));
    
    //abrir settings
    //robot.keyTap('f10');
    //
    //girar camara
    //
    //robot.keyToggle('left', 'down');
    //sleep(800)
    //robot.keyToggle('left', 'up');
    //
    //girar camara hacia arriba
    //
    //robot.keyToggle('up', 'down');
    //sleep(1000);
    //robot.keyToggle('up', 'down');
    //alejar camara
    
    
    //click en display
    /* var random_x = getRandomInt(1369, 1369+84);
    var random_y = getRandomInt(445, 445+69);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();

    sleep(getRandomInt(100, 400)); */

    //click en 241/1004
    
    /* robot.moveMouseSmooth(1754, 575, 1);
    robot.mouseClick();

    sleep(getRandomInt(200, 500));

    robot.keyTap('escape');

    console.log('Camera setup done');    */
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