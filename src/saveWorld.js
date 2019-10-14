
// runs when the save world button is pressed
function download(filename, text) {
    if(world != 0){
    //creates an element to attach file to
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    }else{
        alert("Sorry, you can't download nothing silly!");
    }
}