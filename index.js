// light/dark mode switch
const modeSwitch = document.getElementById("dayNight");
const container = document.getElementById("container");
const dayNight = document.getElementById("dayNight");

modeSwitch.addEventListener("click", swapMode);


function swapMode() {
    darkMode();
    darkMode1();
}
function darkMode() {
    if(dayNight.classList.contains("night")) {
        dayNight.classList.remove("night");
        dayNight.classList.add("day");
    } else {
        dayNight.classList.remove("day");
        dayNight.classList.add("night");
}

}
function darkMode1() {
    if(container.classList.contains("containerNight")) {
        container.classList.remove("containerNight");
        container.classList.add("containerDay");
    } else {
        container.classList.remove("containerDay");
        container.classList.add("containerNight");
    }
}
// light/dark mode switch

// eventlisteners on images
let playerMove;
for (let i = 0; i<document.querySelectorAll(".image").length; i++) {
    document.querySelectorAll(".image")[i].addEventListener("click", function() {
        playerMove = this.classList[1];
        return playerMove;
    });
}
// eventlisteners on images

// game functionality
const cpuSelection = cpuMove();

function playRound(playerMove, cpuSelection) {
    if(playerMove!==undefined) {
        if(playerMove==='rock' && cpuSelection==='scissors') {
            console.log('Player won!');
        } else if(playerMove==='rock' && cpuSelection==='rock') {
            console.log("Draw");
        } else if(playerMove==='rock' && cpuSelection==='paper') {
            console.log("You lost!");
        }
        console.log(playerMove, cpuSelection);
    }
}

function cpuMove() {
    const attacks = ['rock', 'paper', 'scissors'];
    let number = Math.floor(Math.random()*3);
    let move = attacks[number];

    return move;
}


// game functionality