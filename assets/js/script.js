/* GLOBAL VARIABLES */
var quizArea = document.getElementById('quizArea');
var currentQuestion = 0;
var currentScore = 0;
var defaulTimeLeft = 60;
var interval = null;
////////////////////////////////////////////////

var quizObj = {
    questionData: [
        {
            question: "What does the acronym JSON mean?",
            answers: [
                "Javascript Object Notation",
                "Javascript Oriented Node",
                "Javascript Object Node",
                "Javascript Oriented Notation"
            ],
            correctAnswer: 0
        },
        {
            question: "What does the acronym HTML mean?",
            answers: [
                "Host Token Medial Layer",
                "Hypertext Model Linux",
                "Hypertext Markup Language",
                "HTTP Messenge Length"
            ],
            correctAnswer: 2
        },
        {
            question: "What does the acronym CSS mean?",
            answers: [
                "Computing Screen Selector",
                "Community Styling Standards",
                "Complete Style Source",
                "Cascading Style Sheet"
            ],
            correctAnswer: 3
        },
    ],
    ////////////////////////////////////////////////
    hideQuizIntro: () => {
        document.getElementById('introArea').classList.remove('d-flex');
        document.getElementById('introArea').classList.add('d-none');

        document.getElementById('quizArea').style.display = 'block';
    },
    countdownTimer: () => {
        // deduct 1 sec from time left every second
        interval = setInterval(function () {
            if (defaulTimeLeft > 1) {
                defaulTimeLeft--;
                document.querySelector("#timer").textContent = `Time Remaining: ${defaulTimeLeft} seconds`;
            } else {
                document.querySelector("#timer").textContent = `Time's Up!`;
                clearInterval();
                quizObj.endQuiz();
            }
        }, 1000)
    },
    nextQuestion: () => {
        // array of question data objects
        var quizQuestions = quizObj["questionData"];

        // <h3> placeholder for current question number
        document.getElementById("questionNumberPlaceholder").textContent = 'Question #' + (currentQuestion+1);

        // <h1> placeholder for current question string 
        var questionPlaceholder = document.getElementById("questionPlaceholder");
        // assign question string to <h1> placeholder
        questionPlaceholder.textContent = quizQuestions[currentQuestion]["question"];
        
        // new array of answer strings
        var possibleAnswers = quizQuestions[currentQuestion]["answers"];
        // loop through the new array
        for (var i = 0; i < possibleAnswers.length; i++) {
            // assign each answer string to a new <button> element...
            document.getElementById('choice_' + (i + 1)).textContent = possibleAnswers[i];
        }
    },
    checkAnswer: () => {
        var answer = event.target.textContent;
        if (answer === quizObj.questionData[currentQuestion].answers[quizObj.questionData[currentQuestion].correctAnswer]) {
            currentScore++;
            document.querySelector('#result').innerHTML = 'correct!';
        } else {
            defaulTimeLeft -= 5;
            document.querySelector('#result').innerHTML = 'incorrect!';
        }

        currentQuestion++;

        if (currentQuestion < quizObj.questionData.length) {
            quizObj.nextQuestion();
        } else {
            quizObj.endQuiz();
            clearInterval(interval);
        }
    },
    endQuiz: () => {
    // hide quiz area
    // show the final score
    // submit high score
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('endQuiz').style.display = 'block';
    document.getElementById('finalScore').innerHTML = '<p>Final Score: ' + currentScore + '/' + quizObj.questionData.length + '</p>';

    defaulTimeLeft = 60;
    document.querySelector("#timer").textContent = `Time Remaining: ${defaulTimeLeft} seconds`;
    },
    showScoreboard: () => {
        var myInitials = document.getElementById('initials').value;
        var records = localStorage.getItem('scoreboard');
        if (records == null) {
            records = '<br>' + myInitials + ' ' + currentScore;
        } else {
            records += '<br>' + myInitials + ' ' + currentScore;
        }
        localStorage.setItem('scoreboard', records);

        document.getElementById('endQuiz').style.display = 'none';
        document.getElementById('scores').style.display = 'block';
        document.getElementById('scoreboard').innerHTML = records;
    },
    startOver: () => {
        document.getElementById('scores').style.display = 'none';

        document.getElementById('introArea').classList.remove('d-none');
        document.getElementById('introArea').classList.add('d-flex');
    }
}

////////////////////////////////////////////////

// Execute application function
var startQuiz = function () {
    currentScore = 0;
    currentQuestion = 0;
    // hide intro section
    quizObj.hideQuizIntro();
    // begin the timer
    quizObj.countdownTimer();
    // ask user questions
    quizObj.nextQuestion();
}

// Start quiz when click event triggered
document.querySelector("#startBtn").addEventListener("click", startQuiz);

document.querySelector("#choice_1").addEventListener("click", quizObj.checkAnswer);
document.querySelector("#choice_2").addEventListener("click", quizObj.checkAnswer);
document.querySelector("#choice_3").addEventListener("click", quizObj.checkAnswer);
document.querySelector("#choice_4").addEventListener("click", quizObj.checkAnswer);

document.querySelector('#submit').addEventListener('click', quizObj.showScoreboard);
document.querySelector('#startOver').addEventListener('click', quizObj.startOver);