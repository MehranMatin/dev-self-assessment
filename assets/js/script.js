/* GLOBAL VARIABLES */
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
var countdownTimer = function () {
    var defaulTimeLeft = 60;
    var everySecond = setInterval(function () {
        if (defaulTimeLeft > 1) {
            defaulTimeLeft--;
            timer.textContent = `Time Remaining: ${defaulTimeLeft} seconds`;
        } else {
            timer.textContent = `Time's Up!`;
        }
    }, 1000)
}
var startCountdown = function () {
    countdownTimer();
}

// Start quiz when click event triggered
startBtn.addEventListener("click", startCountdown);