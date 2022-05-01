/* GLOBAL VARIABLES */
// HTML elements
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");
// Questions & Answers object
var quizMaterial = {
    "What does the acronym JSON mean?":"Javascript Object Notation",
    "What does the acronym HTML mean?":"Hypertext Markup Language",
    "What does the acronym  CSS mean?":"Cascading Style Sheet"
}
// Function: Begin Countdown
var countdownTimer = function () {
    // default start time in seconds
    var defaulTimeLeft = 60;
    // deduct 1 sec from time left every second 
    setInterval(function () {
        if (defaulTimeLeft > 1) {
            defaulTimeLeft--;
            timer.textContent = `Time Remaining: ${defaulTimeLeft} seconds`;
        } else {
            timer.textContent = `Time's Up!`;
        }
    }, 1000)
};
// Function: Ask Quiz Questions
var cycleQuestions = () => {
    var quizArea = document.querySelector("#quizArea");

    for (var question in quizMaterial) {
        var currentQuestion = document.createElement("p").textContent = question;

        quizArea.prepend(currentQuestion);
    }
};
// Function: Execute application
var startQuiz = function () {
    // begin the timer
    countdownTimer();
    // ask user questions
    cycleQuestions();
}

// Start quiz when click event triggered
startBtn.addEventListener("click", startQuiz);