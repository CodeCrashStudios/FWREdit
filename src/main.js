// the global world object
var world = 0;

// veiw cordinates
var x = 0;
var y = 0;
var z = 5;

// runs on page load
function setup() {
    // creates the canvas object
    createCanvas(windowHeight*0.8, windowHeight*0.8);
    // sets text type to center
    textAlign(CENTER);
}

// runs every frame
function draw() {

    // checks if world has been loaded
    if(world == 0){

        // draws this when no world is loaded
        background(0);
        fill(255);
        textSize(width*0.1);
        text("No World Loaded", width/2, height/2);
    }else{

        // renders world when one is present
        background(255);
        for(var i = 0; i < world.items.length; i++){
            noStroke();
            fill(255-(world.items[i].position.y*10), 0, 0);
            ellipse(x+(world.items[i].position.x*z), y+(world.items[i].position.z*z),z,z);
        }
        fill(0, 255, 0);
        ellipse(x+(world.player.spawnPosition.x*z), y+(world.player.spawnPosition.x*z), z, z);
        stroke(0, 0, 255);
        line(x,0, x, height);
        stroke(255, 0, 0);
        line(0, y, width, y);
    }


    // runs input handler
    inputHandler();
}

// resizes the canvas when the window is resized
function windowResized() {
    resizeCanvas(windowHeight*0.8, windowHeight*0.8);
}

// runs when the fullscreen button is pressed
function toggleFullScreen(){
    let fs = fullscreen();
    fullscreen(!fs);
}

// handles inputs
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
        z -= .05;
    }
    if(keyIsDown(69)){
        z += .05;
    }
    if(z < 0) z = 0;
}

