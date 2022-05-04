var quizObj = {
    questionData: {
        1: {
            question: "What does the acronym JSON mean?",
            answers: {
                "Javascript Object Notation": true,
                "Javascript Oriented Node": false,
                "Javascript Object Node": false,
                "Javascript Oriented Notation": false
            }
        },
        2: {
            question: "What does the acronym HTML mean?",
            answers: {
                "Host Token Medial Layer": false,
                "Hypertext Model Linux": false,
                "Hypertext Markup Language": true,
                "HTTP Messenge Length": false
            }
        },
        3: {
            question: "What does the acronym CSS mean?",
            answers: {
                "Computing Screen Selector": false,
                "Community Styling Standards": false,
                "Complete Style Source": false,
                "Cascading Style Sheet": true
            }
        },
    },
    // Ask Quiz Questions function
    askQuizQuestion: () => {
        
    },
    cycleQuestions: (quizArea) => {
        // for every property in object dynamically create a placeholder elements for Q&A
        for (var questionNo in quizObj["questionData"]) {
            // create <p> element for question placeholder
            var pEl = document.createElement("p");
            pEl.style.cssText = "font-weight: bold";
            pEl.setAttribute('class','px-5 py-3');

            // create ordered list  to hold answer <li> elements
            var olEl = document.createElement("ol");
            olEl.style.cssText = "background-color: green";
            olEl.setAttribute('class','p-5');

            // select question's string and assign to <p> element
            var currentQuestion = quizObj["questionData"][questionNo]["question"];
            pEl.textContent = currentQuestion;

            // return array of answer strings
            var possibleAnswers = Object.keys(quizObj["questionData"][questionNo]["answers"]);
            // loop through array and assign each answer string to a <button> element nested within a <li> element
            for (var answerOption of possibleAnswers) {
                var buttonEl = document.createElement("button");
                var liEl = document.createElement("li");
                buttonEl.textContent = answerOption;
                liEl.append(buttonEl);

                olEl.appendChild(liEl);
            }
            

            // display dynamic elements in the quiz area
            quizArea.append(pEl);
            quizArea.append(olEl);

            // event listener for answer click
            // remove/hide current question
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