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

// game functionality
function cpuMove() {
    const attacks = ['rock', 'paper', 'scissors'];
    let number = Math.floor(Math.random()*3);
    let move = attacks[number];

    return move;
}


// game functionality