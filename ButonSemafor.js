let index = 1;

//in this function, on every click of the button or 10 seconds, we will change teh color of the button
function changeColor() {
    if (index == 1) {
        redLight.className= "btn btn-warning btn-lg";
    } else if (index == 2) {
        redLight.className= "btn btn-success btn-lg";
    } else {
        redLight.className= "btn btn-danger btn-lg";
    }
    if (index == 3) {
        index = 0;
    }
    ++index;
}
redLight.addEventListener("click", changeColor);
setInterval(changeColor, 10000);
