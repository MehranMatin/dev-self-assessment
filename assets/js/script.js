/* GLOBAL VARIABLES */
var quizArea = document.getElementById('quizArea');
////////////////////////////////////////////////

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
    ////////////////////////////////////////////////
    hideQuizIntro: () => {
        document.getElementById('introArea').classList.remove('d-flex');
        document.getElementById('introArea').classList.add('d-none');
    },
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
    },
    createElPlaceholders: (quizArea) => {
        // create <h3> element for question #
        var h3El = document.createElement("h3");
        h3El.setAttribute('id','questionNumberPlaceholder');
        h3El.setAttribute('class','px-5 py-3 text-light bg-dark');
        h3El.textContent = 'Question # placeholder';

        // create <h1> element for question placeholder
        var h1El = document.createElement("h1");
        h1El.setAttribute('id','questionPlaceholder');
        h1El.setAttribute('class','px-5 py-3 m-3 border-bottom border-dark');
        h1El.style.cssText = "font-weight: bold";
        h1El.textContent = 'Question text string placeholder?';

        // create ordered list to hold answer <li> elements
        var olEl = document.createElement("ol");
        olEl.setAttribute('id','answersListPlaceholder');
        olEl.setAttribute('class','p-5 m-3');
        olEl.style.cssText = "background-color: light-green";

        // display question <h1> and answers <ol> elements in the quiz area
        quizArea.append(h3El);
        quizArea.append(h1El);
        quizArea.append(olEl);
    },
    nextQuestion: () => {
        // array of question data objects
        var quizQuestions = quizObj["questionData"];

        // for each object in array...
        for (var i = 0; i < quizQuestions.length; i++) {
            var validAnswer = false;

            if (!validAnswer) {
                // <h3> placeholder for current question number
                document.getElementById("questionNumberPlaceholder").textContent = 'Question #' + (i+1);

                // <h1> placeholder for current question string 
                var questionPlaceholder = document.getElementById("questionPlaceholder");
                // assign question string to <h1> placeholder
                questionPlaceholder.textContent = quizQuestions[i]["question"];
                
                // <ol> placeholder for list of current answers
                var answersListPlaceholder = document.getElementById("answersListPlaceholder");

                // new array of answer strings using each key of answers object
                var possibleAnswers = Object.keys(quizQuestions[i]["answers"]);

                // loop through the new array to dynamically create new li>button
                for (var i; i < possibleAnswers.length; i++) {
                    // assign each answer string to a new <button> element...
                    var buttonEl = document.createElement("button");
                    buttonEl.setAttribute('id','choice_#' + (i + 1));
                    buttonEl.setAttribute('class','answerOption m-1 p-3 w-75 rounded text-left');
                    buttonEl.textContent = possibleAnswers[i];
                    console.log(buttonEl.id);

                    // ...then nest inside a new <li>
                    var liEl = document.createElement("li");
                    liEl.append(buttonEl);
                    
                    // ...then nest inside placeholder <ol>
                    answersListPlaceholder.appendChild(liEl);
                }

                // event listener for answer click to reset new question
                var answerOption = document.querySelectorAll('button.answerOption');

                for (var i = 0; i < answerOption.length; i++) {
                    answerOption[i].addEventListener("click", function() {
                        validAnswer = true;
                    });
                }
            }
        }
    },
    endQuiz: () => {
    // hide quiz area
    // show the final score
    // submit high score
    document.getElementById('quizArea').style.display = 'none';
    }
}

////////////////////////////////////////////////

// Execute application function
var startQuiz = function () {
    // hide intro section
    quizObj.hideQuizIntro();
    // begin the timer
    quizObj.countdownTimer();
    // dynamically create placeholders
    quizObj.createElPlaceholders(document.querySelector("#quizArea"));
    // ask user questions
    quizObj.nextQuestion();
}

// Start quiz when click event triggered
document.querySelector("#startBtn").addEventListener("click", startQuiz);