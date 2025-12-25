let x = 8;
let y = 8;
let gamewidth = 16;
let gameheight = 16;


onload = function() {
    updatepostion();
    apple();
}



document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {

        updatepostion();
        checkapplecollision();
        lastbutton = 'up';
        checkgameover()
    } else if (event.key === 'ArrowLeft') {

        updatepostion();
        lastbutton = 'left';
        checkapplecollision();
        checkgameover()
    } else if (event.key === 'ArrowRight') {

        updatepostion();
        checkapplecollision();
        lastbutton = 'right';
        checkgameover()
    } else if (event.key === 'ArrowDown') {

        updatepostion();
        checkapplecollision();
        lastbutton = 'down';
        checkgameover()
    }
});

function updatepostion() {
    const snake = document.getElementById("snake");
    snake.style.left = x*32 + "px";
    snake.style.top = y*32 + "px";
}
function checkgameover() {
if (gamewidth < x || x < 0 || gameheight < y || y < 0) {
    alert("Game Over!");
    x = 8;
    y = 8;
    updatepostion();
    lastbutton = null;
}
}

function apple() {
    let mathrandomx = Math.floor(Math.random() * 16);
    let mathrandomy = Math.floor(Math.random() * 16);
    
    if (mathrandomx === x && mathrandomy === y) {
        apple();
        return;
    }

    if (mathrandomx === 0 || mathrandomy === 0 || mathrandomx === 15 || mathrandomy === 15) {
        apple();
        return;
    }

    const appleElement = document.getElementById("apple");
    appleElement.style.left = mathrandomx*32 + "px";
    appleElement.style.top = mathrandomy*32 + "px";

    console.log(mathrandomx);
}


function checkapplecollision() {
    const applefel = document.getElementById("apple");
    if (x*32 + "px" === applefel.style.left && y*32 + "px" === applefel.style.top) {
        apple();
        addparticle();
        addpart();
        console.log("Apple eaten!");
    }

    console.log("checking apple collision");
}

function moveautomatic() {
    if (lastbutton === 'up') {
        y = y - 1;
        updatepostion();
        checkapplecollision();
        checkgameover()
    } else if (lastbutton === 'left') {
        x = x - 1;
        updatepostion();
        checkapplecollision();
        checkgameover()
    } else if (lastbutton === 'right') {
        x = x + 1;
        updatepostion();
        checkapplecollision();
        checkgameover()
    } else if (lastbutton === 'down') {
        y = y + 1;
        updatepostion();
        checkapplecollision();
        checkgameover()
    } else if (lastbutton === null) {
        return;
    }
}
setInterval(moveautomatic, 350);

function addparticle() {
    const game = document.getElementById("game");
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = (mathrandomx * 32) + "px";
    particle.style.top = (mathrandomy * 32) + "px";
    game.appendChild(particle);
    setTimeout(() => {
        game.removeChild(particle);
    }, 1000);
}

let parts = 0;

function addpart() {
    parts = parts + 1;
    const partElement = document.getElementById("parts");
    for (let i = 0; i < parts; i++) {
        const part = document.createElement("div");
        part.classList.add("part");
        partElement.appendChild(part);
    }
}
