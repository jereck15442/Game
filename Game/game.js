
function getCoordinatesDisplay() {
    return document.querySelector('#Positions');
}


function getMouseCoordinates(event) {
    return {
        x: event.clientX,
        y: event.clientY
    };
}


function updateCoordinatesText(element, x, y) {
    element.textContent = `X: ${x}, Y: ${y}`;
}


const coordinatesDisplay = getCoordinatesDisplay();

function handleMouseMove(event) {
    const { x, y } = getMouseCoordinates(event);
    updateCoordinatesText(coordinatesDisplay, x, y);
    updateCSSVariables(x, y);
}


window.addEventListener('mousemove', handleMouseMove);

let output = document.getElementById("output");

function clicked() {
      document.getElementById("clickme").textContent =
        "you clicked the button!";
    }

    function hovered() {
      document.getElementById("clickme").textContent =
        "you hovered the button!";
    }

    function resetText() {
      document.getElementById("clickme").textContent = "";
    }

    document.addEventListener("keydown", function (event) {
        output.innerHTML = "Pressed: <strong>" + event.key + "</strong>"
    })