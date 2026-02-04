let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let hero = document.getElementById("hero");

let steps = 80;

let x = 0;
let y = 0;

function moveRight() {
    x += steps;
    hero.style.left = `${x}px`;
    hero.style.transform = "scaleX(-1)";
}

rightButton.addEventListener("click", moveRight);

function moveLeft() {
    x -= steps;
    hero.style.left = `${x}px`;
    hero.style.transform = "scaleX(1)";
}

leftButton.addEventListener("click", moveLeft);

function moveUp() {
    y -= steps;
    hero.style.top = `${y}px`;
}

upButton.addEventListener("click", moveUp);

function moveDown() {
    y += steps;
    hero.style.top = `${y}px`;
}

downButton.addEventListener("click", moveDown);