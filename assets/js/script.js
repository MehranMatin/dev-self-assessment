/* GLOBAL VARIABLES */
var quizArea = document.querySelector("#quizArea");


var quizObj = {
    questionData: [
        {
            question: "What does the acronym JSON mean?",
            answers: {
                "Javascript Object Notation": true,
                "Javascript Oriented Node": false,
                "Javascript Object Node": false,
                "Javascript Oriented Notation": false
            }
        },
        {
            question: "What does the acronym HTML mean?",
            answers: {
                "Host Token Medial Layer": false,
                "Hypertext Model Linux": false,
                "Hypertext Markup Language": true,
                "HTTP Messenge Length": false
            }
        },
        {
            question: "What does the acronym CSS mean?",
            answers: {
                "Computing Screen Selector": false,
                "Community Styling Standards": false,
                "Complete Style Source": false,
                "Cascading Style Sheet": true
            }
        },
    ],
    // // Ask Quiz Questions function
    // askQuizQuestion: () => {
    // },
    // BEGIN COUNTDOWN function
    countdownTimer: () => {
        // default start time in seconds
        var defaulTimeLeft = 60;
        // deduct 1 sec from time left every second
        setInterval(function () {
            if (defaulTimeLeft > 1) {
                defaulTimeLeft--;
                document.querySelector("#timer").textContent = `Time Remaining: ${defaulTimeLeft} seconds`;
            } else {
                document.querySelector("#timer").textContent = `Time's Up!`;
            }
        }, 1000)
    };
    createElPlaceholders: () => {
        // create <p> element for question placeholder
        var h1El = document.createElement("h1");
        h1El.setAttribute('id','questionPlaceholder');
        h1El.setAttribute('class','px-5 py-3');
        h1El.style.cssText = "font-weight: bold";
        console.log(h1El);
    },
    cycleQuestions: (quizArea) => {
        var quizQuestions = quizObj["questionData"];

        // for every object in questions array show Q & A elements
        for (var i = 0; i < quizQuestions.length; i++) {
            var questionPlaceholder = document.getElementById("#questionPlaceholder");
            console.log(questionPlaceholder);
            questionPlaceholder.id = 'question-' + (i+1);
            console.log(questionPlaceholder);

            // create ordered list to hold answer <li> elements
            var olEl = document.createElement("ol");
            olEl.style.cssText = "background-color: green";
            olEl.setAttribute('class','p-5');

            // select question's string and assign to <p> element
            var currentQuestion = quizQuestions[i]["question"];
            questionPlaceholder.textContent = currentQuestion;

            // return array of answer strings
            var possibleAnswers = Object.keys(quizQuestions[i]["answers"]);
            // loop through answers array
            for (var answerOption of possibleAnswers) {
                // assign each answer string to a <button> element...
                var buttonEl = document.createElement("button");
                buttonEl.textContent = answerOption;
                // ...nested within a <li>
                var liEl = document.createElement("li");
                liEl.append(buttonEl);
                // ...nested within the <ol> 
                olEl.appendChild(liEl);
            }

            // display question <p> and answers <ol> elements in the quiz area
            quizArea.append(questionPlaceholder);
            quizArea.append(olEl);

            // event listener for answer click to reset new question
        }
    }
}

// Execute application function
var startQuiz = function () {
    // begin the timer
    countdownTimer();
    // dynamically create placeholders
    quizObj.createElPlaceholders();
    // ask user questions
    quizObj.cycleQuestions(document.querySelector("#quizArea"));
}

// Start quiz when click event triggered
document.querySelector("#startBtn").addEventListener("click", startQuiz);