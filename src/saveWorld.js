
// runs when the save world button is pressed. CURRENTLY DOESN'T WORK
function downloadFile() {
    var a = document.getElementById("a");
    var file = new Blob(world, {type: "text/plain"});
    a.href = URL.createObjectURL(file);
    a.download = "name.fwr";
}