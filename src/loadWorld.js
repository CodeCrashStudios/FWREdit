
// runs when open world is pressed
function loadFile() {

    // creates the file explorer 
    var input = document.createElement('input');
    input.type = 'file';

    // runs when the file is selected
    input.onchange = e => {

        // getting a hold of the file reference
        var file = e.target.files[0];

        // setting up the reader
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');

        // here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
            var content = readerEvent.target.result; // this is the content!
            console.log(JSON.parse(content));
            world = JSON.parse(content);
            document.getElementById("worldName").innerHTML = world.worldName;
            document.getElementById("itemAmount").innerHTML = "Items: "+world.items.length;
            document.getElementById("spawnPos").innerHTML = "Spawn Position: "+world.player.spawnPosition.x+", "+world.player.spawnPosition.y+", "+world.player.spawnPosition.z;
        }

    }

    input.click();
}