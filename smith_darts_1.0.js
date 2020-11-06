// import the robotjs library
var robot = require('robotjs');

function main() {
    console.log("Starting...");
    // infinite loop. use ctrl+c in terminal to stop the program
    while (true) {
        // find a tree to click on
        var anvil = findAnvil();
        // if we couldn't find a tree, try rotating the camera and
        // return to the start of the loop
        if (anvil == false) {
            //console.log('Couldnt find anvil')
            continue;
        }

        // chop down the tree we found
        //console.log('Anvil found at >> '+ anvil.x, ', '+anvil.y);
        sleep(300);
        robot.moveMouseSmooth(anvil.x, anvil.y, 1);
        robot.mouseClick();
        // wait for walking and chopping to complete.
        // dropLogs() will wait for longer if needed
        while(true){
            if(waitMenu()){
                clickDart();
                //console.log('haciendo dardos...')
                break;
            }else{
                //console.log('esperando a llegar al anvil')
                sleep(500);
            }
        }
        
        while(true){
            if(ironBarInventory()){
                //console.log('esperando a que se acaben las bars...')
                sleep(1000);
            }else{
                //console.log('No quedan iron bars');
                break;
            }          
        }
        break;
        
    }
    bank();
}
function bank(){
    console.log("Banking...");
    sleep(1500);
    while(true){
        var bank = findBank();
        if (bank == false) {
            continue;
        }

        //console.log('Bank found at >> '+ bank.x, ', '+bank.y);
        sleep(300);
        robot.moveMouseSmooth(bank.x, bank.y, 1);
        robot.mouseClick();
        break;
    }
    while(true){
        if(waitBank()){
            clickIronBar();
            sleep(500);
            robot.keyTap('escape');
            break;
        }else{
            sleep(500);
        }
    }
}

function clickIronBar(){
    var random_x = getRandomInt(558, 590)
    var random_y = getRandomInt(213, 235)
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
}

function waitBank(){
    var check_x = 147, check_y = 70;
    var pixel_color = robot.getPixelColor(check_x, check_y);
    confirm_colors = ["ff991f","ff9b1e","ff9c1e","ff9a1f",""];
    if (confirm_colors.includes(pixel_color)){
        return true;
    }else{
        return false;
    }

}

function findBank(){
    var x = 280, y = 410, width = 40, height = 40;
    var img = robot.screen.capture(x, y, width, height);

    var bank_colors = ["231f1f","1f1b1b","211d1d","221f1f","31270d","2f250c","2b230b","2f2a1f"
                    ,"2f2711"];

    for (var i = 0; i < 500; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (bank_colors.includes(sample_color)){
            var screen_x = random_x + x;
            var screen_y = random_y + y;

            if(confirmBank(screen_x, screen_y)){
                console.log("Found bank at >> " + screen_x + ", " + screen_y + " color " + sample_color);
                return {x: screen_x, y: screen_y};
            }else{
                console.log("Unconfirmed bank at >> " + screen_x + ", " + screen_y + " color " + sample_color);
            }
        }
    }
    return false;
}

function confirmBank(screen_x, screen_y){
    var x = 290, y = 470, width = 230, height = 50;
    var img = robot.screen.capture(x, y, width, height);
    robot.moveMouseSmooth(screen_x, screen_y,1);
    var confirm_colors = ["00ffff","02ffff","06edeb","01ffff","04fafa"
                        ,"03fbfb","07f2f1","04f9f9","00f7f7","00d6d6"];
    
    for (var i = 0; i < 400; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);
        //console.log('Color para confirmar >> '+ sample_color);
        if(confirm_colors.includes(sample_color)){
            return true;
        }
    }
    return false;
}

function waitMenu(){
    var check_x = 857, check_y = 120;
    var pixel_color = robot.getPixelColor(check_x, check_y);

    return pixel_color == "ffff00";
}

function ironBarInventory(){
    var check_x = 1737;
    var check_y = 920;
    var pixel_color = robot.getPixelColor(check_x, check_y);

    return pixel_color == "494241";
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
    robot.keyToggle('left', 'down');
    sleep(800)
    robot.keyToggle('left', 'up');
    //
    //girar camara hacia arriba
    //
    robot.keyToggle('up', 'down');
    sleep(1000);
    robot.keyToggle('up', 'down');
    //alejar camara
    
    
    //click en display
    var random_x = getRandomInt(1369, 1369+84);
    var random_y = getRandomInt(445, 445+69);
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();

    sleep(getRandomInt(100, 400));

    //click en 241/1004
    
    robot.moveMouseSmooth(1608, 575, 1);
    robot.mouseClick();

    sleep(getRandomInt(200, 500));

    robot.keyTap('escape');

    console.log('Camera setup done');   
}

function testScreenCapture() {
    // taking a screenshot
    var img = robot.screen.capture(0, 0, 1920, 1080);

    // testing: the pixel at 30, 18 when I screen capture VSCode should be that bright blue:
    // RBG of 35, 170, 242 which we convert into hex color #23aaf2
    var pixel_color = img.colorAt(30, 18);
    console.log(pixel_color);
    // when I test this I get 23a9f2, which is very close to what we expect.
}

function findAnvil() {
    // take a screenshot from just the middle of our screen.
    // I have the upper left corner of the image starting at x = 300, y = 300, and size of
    // the image at width = 1300, height = 400.
    // you should adjust this to your own screen size. you might also try reducing the size
    // if this is running slow for you.
    //var x = 10, y = 100, ancho = 1245, alto = 545;
    var x = 890, y = 160, width = 170, height = 360;
    var img = robot.screen.capture(x, y, width, height);

    // make an array that contains colors of the trees we want to click on.
    // I'm targeting the brown colors of the trunks.
    var anvil_colors = ["1f1e1e", "0a0a09", "0e0d0d", "121010", "161414"
                    , "1c1a1a", "231f1f", "292626", "100e0e", "141212"
                    , "171514", "181616", "1a1717", "1b1818", "1e1b1b"
                    ,"1f1c1c", "211e1e", "221f1f", "232020", "252222"
                    , "272323", "272424", "292625", "2b2727", "2c2828"
                    , "2e2929", "2f2b2b", "252221", "201d1d", "312d2d"
                    , "2a2626", "322d2d", "494444", ""];
    // sample up to 500 random pixels inside our screenshot until we find one that matches
    // a tree color.
    for (var i = 0; i < 50; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (anvil_colors.includes(sample_color)) {
            // because we took a cropped screenshot, and we want to return the pixel position
            // on the entire screen, we can account for that by adding the relative crop x and y
            // to the pixel position found in the screenshot;
            var screen_x = random_x + x;
            var screen_y = random_y + y;
            //return {x: screen_x, y: screen_y};
            // if we don't confirm that this coordinate is a tree, the loop will continue
            if (confirmAnvil(screen_x, screen_y)) {
                console.log("Found an anvil at >> " + screen_x + ", " + screen_y + " color " + sample_color);
                return {x: screen_x, y: screen_y};
            } else {
                // this just helps us debug the script
                console.log("Unconfirmed anvil at >> " + screen_x + ", " + screen_y + " color " + sample_color);
            }
        }
    }
    
    // did not find the color in our screenshot
    return false;
}


function confirmAnvil(screen_x, screen_y) {
    var x = 930, y = 290, width = 190, height = 100;
    var img = robot.screen.capture(x, y, width, height);
    robot.moveMouseSmooth(screen_x, screen_y, 1);
    var confirm_colors = ["00ffff","02ffff","06edeb","01ffff","04fafa"
                        ,"03fbfb","07f2f1","04f9f9","00f7f7","00d6d6"];

    for (var i = 0; i < 2000; i++){
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);
        //console.log('Color para confirmar >> '+ sample_color);
        if(confirm_colors.includes(sample_color)){
            return true;
        }
    }
    return false;
}

function clickDart(){
    var random_x = getRandomInt(880, 900)
    var random_y = getRandomInt(135, 165)
    robot.moveMouseSmooth(random_x, random_y, 1);
    robot.mouseClick();
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

setup();
var ironbars = 9536
for (var j= 0; j < ironbars / 26; j++){
    main(); 
}
