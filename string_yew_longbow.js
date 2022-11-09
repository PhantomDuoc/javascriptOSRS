// import the robotjs library
var robot = require('robotjs');

var cantidadBows = 1155;

function main(){
    console.log('Comenzando...');
    sleep(4000);
    console.clear();
    setup();
    
    var cantidadInventarios = cantidadBows/14;
    var inventariosHechos = 0;  
    var bowsHechos = 0;     
    cantidadInventarios = Math.ceil(cantidadInventarios);
    outer_loop:
    while (inventariosHechos<cantidadInventarios){

        var banker = findBanker();

        if (banker == false){
            console.log('Couldnt find any banker, trying again');
            continue;
        }
        sleep(getRandomInt(300, 500));
        robot.moveMouseSmooth(banker.x, banker.y, 1);
        robot.mouseClick();
        sleep(getRandomInt(1500,2000));
        depositBows();
        sleep(getRandomInt(500,1500));
        withdrawMaterials();
        startFletching();

        while (true){
            if (lvlUpCheck()){
                //console.log('debug');
                //otro inventario si se sube de lvl (solucion parche)
                inventariosHechos++;
                continue outer_loop;
            }else{
                if (bowInventory()){
                    sleep(getRandomInt(200, 700));
                }else{
                    break;
                }
            }  
        }
        inventariosHechos++;
        bowsHechos+=14;
        console.clear();
        console.log('Bows hechos >> '+bowsHechos);
        console.log('Inventarios Restantes >> '+(cantidadInventarios-inventariosHechos));
    }
}
//reutilizadas del archivo smith_darts_1.0.js

function bowInventory(){
    var check_x = 1732;
    var check_y = 903;
    var pixel_color = robot.getPixelColor(check_x, check_y);

    return pixel_color == "a48907";
}

function clickSegundo(){
    var random_x = getRandomInt(1598, 1659);
    var random_y = getRandomInt(675, 732);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
}

function clickPrimero(){
    var random_x = getRandomInt(1499, 1560);
    var random_y = getRandomInt(675, 732);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
}

function startFletching(){
    clickPrimero();
    sleep(getRandomInt(500, 1000));
    clickSegundo();
    while (true) {
        if (checkCraft()){
            sleep(getRandomInt(50,200));
            robot.keyTap('space');
            break;
        } else {
            sleep(getRandomInt(50, 200));
        }
    }
    
}

function checkCraft() {
    var check_x = 629, check_y = 846;
    var sample_color = robot.getPixelColor(check_x, check_y);
    //console.log('debug >> '+ sample_color);
    return sample_color == '978022';
}

function withdrawMaterials(){
    var random_x = getRandomInt(1013, 1075);
    var random_y = getRandomInt(269, 326);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
    sleep(getRandomInt(500, 700));
    random_x = getRandomInt(1013, 1075);
    random_y = getRandomInt(192, 250);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
    sleep(getRandomInt(700, 1000));
    robot.keyTap('escape');
    sleep(getRandomInt(1000, 1500));
}

function depositBows(){
    var random_x = getRandomInt(1060, 1122);
    var random_y = getRandomInt(628,685 );
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
}

function findBanker(){
    var x = 20, y = 70, width = 230, height = 600;
    var img = robot.screen.capture(x, y, width, height);

    var banker_colors = ["6a605f","6f6565","6a6060","675e5d"
                        ,"484141","524b4b","635a5a","292525"
                        ,"645b5a","524b4a","4c4545","5a5251"
                        ,"524a4a","4a4343","554d4d","574f4f"];

    for (var i = 0; i < 100; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (banker_colors.includes(sample_color)){
            var screen_x = random_x + x;
            var screen_y = random_y + y;

            //if (confirmBanker(screen_x, screen_y)){
                //console.log('Found banker at >> '+ screen_x, ', '+screen_y, ' color >> '+sample_color);
                return {x: screen_x, y: screen_y};
            //}else{
            //    console.log('Unconfirmed banker at >> '+ screen_x, ', '+screen_y, ' color >> '+sample_color);
            //}
        }
    }
    return false;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
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
    robot.keyTap('f10');
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
    var random_x = getRandomInt(1369, 1369+84);
    var random_y = getRandomInt(445, 445+69);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();

    sleep(getRandomInt(100, 400));

    //click en 241/1004
    
    robot.moveMouseSmooth(1754, 575, 1);
    robot.mouseClick();

    sleep(getRandomInt(200, 500));

    robot.keyTap('escape');

    console.log('Camera setup done');   
}

function lvlUpCheck(){
    var x = 275, y = 788, width = 866, height = 36;
    var img = robot.screen.capture(x, y, width, height);

    var check_colors = ["312d83","090881","00007e","040480"
                        ,"000080","080880","1d1b82","010180"
                        ,"0a0980","00007e","060580","090981"
                        ,"020280","090881","060681","0b0a81"
                        ,"00007d","070681","0a0a81","050481"
                        ,"131181","111081","00007f","030380"];

    for (var i = 0; i < 2000; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if(check_colors.includes(sample_color)){
            console.log('Leveled up!, continuando...');
            return true;
        }
    }
    return false;
}
//console.log('Haciendo >> '+cantidadBows+' yew longbows.');
main();