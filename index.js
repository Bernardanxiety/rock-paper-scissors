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