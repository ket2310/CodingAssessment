var body = document.body;
var headerEl = document.createElement("header");
var headerh1El = document.createElement("h1");
var headerh2El = document.createElement("h2");
var mainEl = document.createElement("main");
var sectionEl = document.createElement("section");
var clock = document.getElementById("clock");
var secondsLeft = 90;
var selectedAnswer = "";

headerEl.setAttribute("class", "main-header");
headerh1El.setAttribute("id", "highscores");
headerh1El.textContent = "View High Scores";
headerEl.appendChild(headerh1El);

headerh2El.setAttribute("id", "clock");
headerh2El.textContent = "Time: ";
headerEl.appendChild(headerh2El);

body.appendChild(headerEl);
body.appendChild(mainEl);
mainEl.appendChild(sectionEl);
sectionEl.setAttribute("class", "banner")

var h1El = document.createElement("h1");
h1El.textContent = "Coding Quiz Challenge";
h1El.setAttribute("id", "banner1");
sectionEl.appendChild(h1El)

var h2El = document.createElement("h2");
h2El.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
h2El.setAttribute("id", "banner2");
sectionEl.appendChild(h2El);

var goQuiz = document.createElement("button");
goQuiz.setAttribute("id", "start")
goQuiz.textContent = "Start Quiz";
sectionEl.appendChild(goQuiz);

goQuiz.addEventListener("click", runQuiz);

let codeQuestions = [
  {
    Question: "Arrays in JavaScript can be used to store _________.",
    answerA: "numbers and strings",
    answerB: "other arrays",
    answerC: "booleans",
    answerD: "all of the above",
    realAnswer: "D"
  },
  {
    Question: "String values must be enclosed within ____________ when being asssigned to variables.",
    answerA: "commas",
    answerB: "curly brackets",
    answerC: "quotes",
    answerD: "parentheses",
    realAnswer: "C"
  },
  {
    Question: "Commonly used datatypes DO NOT include:",
    answerA: "strings",
    answerB: "booleans",
    answerC: "alerts",
    answerD: "numbers",
    realAnswer: "C"
  },
  {
    Question: "The condition in an if / else statement is enclosed in ____________.",
    answerA: "parentheses",
    answerB: "curly brackets",
    answerC: "quatations",
    answerD: "square brackets",
    realAnswer: "B"
  },
  {
    Question: "A very useful tool used in development and debugging for printing content to the debugger is:",
    answerA: "javascript",
    answerB: "github",
    answerC: "console.log",
    answerD: "bootcamp",
    realAnswer: "C"
  }]


function runQuiz(event) {
  // Prevent default action
  event.preventDefault();
  goQuiz.setAttribute("style", "visibility: hidden");
  setTime();

  var ulEl = document.createElement("ul");
  ulEl.setAttribute("id", "questionList");

  var liEl1 = document.createElement("li");
  var btnEl1 = document.createElement("button");
  btnEl1.setAttribute("id", "A");

  var liEl2 = document.createElement("li");
  var btnEl2 = document.createElement("button");
  btnEl2.setAttribute("id", "B");

  var liEl3 = document.createElement("li");
  var btnEl3 = document.createElement("button");
  btnEl3.setAttribute("id", "C");

  var liEl4 = document.createElement("li");
  var btnEl4 = document.createElement("button");
  btnEl4.setAttribute("id", "D");

  ulEl.appendChild(liEl1);
  liEl1.appendChild(btnEl1)

  ulEl.appendChild(liEl2);
  liEl2.appendChild(btnEl2)

  ulEl.appendChild(liEl3);
  liEl3.appendChild(btnEl3)

  ulEl.appendChild(liEl4);
  liEl4.appendChild(btnEl4)

  sectionEl.appendChild(ulEl)

  var allButtons = document.querySelectorAll("button")

  codeQuestions.forEach(q => {
    h1El.textContent = q.Question;
    h2El.textContent = "";

    btnEl1.textContent = "A. " + q.answerA;

    btnEl2.textContent = "B. " + q.answerB;

    btnEl3.textContent = "C. " + q.answerC;

    btnEl4.textContent = "D. " + q.answerD;


    for (var i = 1; i < allButtons.length; i++) {
      allButtons[i].setAttribute("style", "width: 150px;text-align: LEFT; background-color: rgb(109, 33, 109);color: white");
      allButtons[i].onmouseover = function () {
        this.style.backgroundColor = "#D4A4D8";
      }

      allButtons[i].onmouseout = function () {
        this.style.backgroundColor = "#6D216D";
      }    
    }

  });

  btnEl1.addEventListener("click", captureAnswer);
  btnEl2.addEventListener("click", captureAnswer);
  btnEl3.addEventListener("click", captureAnswer);
  btnEl4.addEventListener("click", captureAnswer);
}

function captureAnswer(event) {
  event.preventDefault();
  console.log(event);
}
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    headerh2El.textContent = "Time: " + secondsLeft;


    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      doHighScore();
    }

  }, 1000);
}

function doHighScore() {

}