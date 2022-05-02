var quizObj = {
    questionData: {
        1: {
            question: "What does the acronym JSON mean?",
            answers: {
                "Javascript Object Notation": true,
                "Javascript Oriented Node": false,
                "Javascript Object Node": false,
                "Javascript Oriented Notation": false
            },
        },
        2: {
            question: "What does the acronym HTML mean?",
            answers: {
                "Host Token Medial Layer": false,
                "Hypertext Model Linux": false,
                "Hypertext Markup Language": true,
                "HTTP Messenge Length": false
            },
        },
        3: {
            question: "What does the acronym CSS mean?",
            answers: {
                "Computing Screen Selector": false,
                "Community Styling Standards": false,
                "Complete Style Source": false,
                "Cascading Style Sheet": true
            },
        },
    },
    // Ask Quiz Questions function
    cycleQuestions: (quizArea) => {
        // for every property in object run display for...in
        for (var questionNo in quizObj["questionData"]) {
            // question string being asked
            var currentQuestion = quizObj["questionData"][questionNo]["question"];
            
            // display question in the quiz area
            quizArea.append(document.createElement("p").textContent = currentQuestion);
            // debugger;

            // display multiple choice answers
            quizArea.append(document.createElement("select").textContent = "** Area for multiple choice answers **");
        }
    }
}

var quizBox = function (currentQuestion, currentRightAnswer, option1, option2, option3) {
    
}

/* GLOBAL VARIABLES */
var timer = document.querySelector("#timer");
var quizArea = document.querySelector("#quizArea");
var startBtn = document.querySelector("#startBtn");

// Questions & Answers object
var quizMaterial = {
    "What does the acronym JSON mean?":"Javascript Object Notation",
    "What does the acronym HTML mean?":"Hypertext Markup Language",
    "What does the acronym  CSS mean?":"Cascading Style Sheet"
}

// BEGIN COUNTDOWN function
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

// Execute application function
var startQuiz = function () {
    // begin the timer
    countdownTimer();
    // ask user questions
    quizObj.cycleQuestions(document.querySelector("#quizArea"));
}

// Start quiz when click event triggered
startBtn.addEventListener("click", startQuiz);