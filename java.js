const myRectangle = document.getElementById('rect')
const movingCircle = document.getElementById('moving_circle')

myRectangle.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {

    var xPosition = e.clientX;
    var yPosition = e.clientY;
    alert(xPosition + " " + yPosition);
    movingCircle.style.left = xPosition;
    movingCircle.style.top = yPosition;
}
