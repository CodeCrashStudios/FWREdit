// the global world object
var world = 0;

// view cordinates
var x = 0;
var y = 0;
var z = 5;

//UI Object
var UI;
// runs on page load
function setup() {
    // creates the canvas object
    var canvas = createCanvas(windowHeight*0.7, windowHeight*0.7, WEBGL);
    canvas.parent('sketch');
    UI = createGraphics(width, width);
    // sets text type to center
    textAlign(CENTER);
    smooth(4);
    UI.textAlign(CENTER);
}

// runs every frame
function draw() {
    UI.clear();
    // checks if world has been loaded
    if(world == 0){
        background(0);
        // draws this when no world is loaded
        UI.fill(255);
        UI.textSize(width*0.1);
        UI.text("No World Loaded", width/2, height/2);
    }else{

        // renders world when one is present
        background(255);
        for(var i = 0; i < world.items.length; i++){
            noStroke();
            fill(255-(world.items[i].position.y*10), 0, 0);
            ellipse(x+(world.items[i].position.x*z), y+(world.items[i].position.z*z),z,z);
        }
        fill(0, 255, 0);
        ellipse(x+(world.player.spawnPosition.x*z), y+(world.player.spawnPosition.z*z), z, z);
        stroke(0, 0, 255);
        line(x,-height/2, x, height/2);
        stroke(255, 0, 0);
        line(-width/2, y, width/2, y);
    }
    image(UI, -width/2, -height/2, width, height);
    // runs input handler
    inputHandler();
}

// resizes the canvas when the window is resized
function windowResized() {
    resizeCanvas(windowHeight*0.7, windowHeight*0.7);
    UI = createGraphics(width, height);
    UI.textAlign(CENTER);
}

// runs when the fullscreen button is pressed
function toggleFullScreen(){
    let fs = fullscreen();
    fullscreen(!fs);
}

// handles inputs  -- No shit mate -Whip
function inputHandler(){
    if(keyIsDown(87)){
        y += 5;
    }
    if(keyIsDown(83)){
        y -= 5;
    }
    if(keyIsDown(65)){
        x += 5;
    }
    if(keyIsDown(68)){
        x -= 5;
    }
    if(keyIsDown(81)){
        z -= .5/z;
    }
    if(keyIsDown(69)){
        z += .5/z; // Do these work? (original value is 0.05) -Whip
    }
    if(z < 0) z = 0;
}

