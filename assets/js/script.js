var body = document.body;
var headerEl = document.createElement("header");
var headerh1El = document.createElement("h1");
var headerh2El = document.createElement("h2");
var mainEl = document.createElement("main");
var sectionEl = document.createElement("section");
var clock = document.getElementById("clock");
var secondsLeft = 90;
var selectedAnswer = "";
var totalCorrect = 0;
var finalScore = 0;
var initialsEl = document.createElement("input");
var submitInitEl = document.createElement("button");
var goBackEl = document.createElement("button");
var clearScores = document.createElement("button");
var playerEl;

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

var ulEl = document.createElement("ul");

var liEl1 = document.createElement("li");
var btnEl1 = document.createElement("button");

var liEl2 = document.createElement("li");
var btnEl2 = document.createElement("button");

var liEl3 = document.createElement("li");
var btnEl3 = document.createElement("button");

var liEl4 = document.createElement("li");
var btnEl4 = document.createElement("button");


var allButtons;

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

var lastQuestionIndex = codeQuestions.length - 1;

let runningQuestionIndex = 0;

function runQuiz(event) {
  // Prevent default action
  event.preventDefault();
  goQuiz.setAttribute("style", "visibility: hidden");
  setTime();
  setUp();
}

function setUp() {
  ulEl.setAttribute("id", "questionList");

  btnEl1.setAttribute("id", "A");
  btnEl1.addEventListener("click", checkAnswer);

  btnEl2.setAttribute("id", "B");
  btnEl2.addEventListener("click", checkAnswer);

  btnEl3.setAttribute("id", "C");
  btnEl3.addEventListener("click", checkAnswer);

  btnEl4.setAttribute("id", "D");
  btnEl4.addEventListener("click", checkAnswer);

  ulEl.appendChild(liEl1);
  liEl1.appendChild(btnEl1)

  ulEl.appendChild(liEl2);
  liEl2.appendChild(btnEl2)

  ulEl.appendChild(liEl3);
  liEl3.appendChild(btnEl3)

  ulEl.appendChild(liEl4);
  liEl4.appendChild(btnEl4);

  sectionEl.appendChild(ulEl);

  allButtons = document.querySelectorAll("button");
  displayQuestion();
}
function displayQuestion() {
  let q = codeQuestions[runningQuestionIndex];

  h1El.textContent = q.Question;
  h2El.textContent = "";

  allButtons[1].textContent = "A. " + q.answerA;

  allButtons[2].textContent = "B. " + q.answerB;

  allButtons[3].textContent = "C. " + q.answerC;

  allButtons[4].textContent = "D. " + q.answerD;


  for (var i = 1; i < allButtons.length; i++) {
    allButtons[i].setAttribute("style", "width: 150px;text-align: LEFT; background-color: rgb(109, 33, 109);color: white");
    allButtons[i].onmouseover = function () {
      this.style.backgroundColor = "#D4A4D8";
    }

    allButtons[i].onmouseout = function () {
      this.style.backgroundColor = "#6D216D";
    }
  }
}


function checkAnswer(event) {
  event.preventDefault();
  selectedAnswer = event.target.id;
  console.log("You selected: " + selectedAnswer);
  console.log("The answer is: " + codeQuestions[runningQuestionIndex].realAnswer);
  if (codeQuestions[runningQuestionIndex].realAnswer == selectedAnswer) {
    console.log("Score  1 point");
    totalCorrect++;
  }
  else {
    console.log("Answer is wrong");
    secondsLeft -= 10;
  }
  if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    displayQuestion();
  }
  else {
    runningQuestionIndex = 0;

  }

}


function setTime() {
  // Sets interval in variable
  secondsLeft = 90;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    headerh2El.textContent = "Time: " + secondsLeft;


    if (secondsLeft === 0 || runningQuestionIndex === codeQuestions.length - 1) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      doFinalScore();
    }

  }, 1000);
}

function doFinalScore() {
  console.log(totalCorrect);
  finalScore = totalCorrect / codeQuestions.length * 100;

  sectionEl.removeChild(sectionEl.childNodes[3]);
  h1El.textContent = "All Done!";
  h2El.textContent = "Your final score is: " + finalScore;

  var h2InitialsEl = document.createElement("h2");

  initialsEl.setAttribute("type", "input");
  h2InitialsEl.textContent = "Enter Initials: ";
  h2InitialsEl.appendChild(initialsEl);

  submitInitEl.textContent = "Submit";
  submitInitEl.setAttribute("style", "width: 100px;text-align: center; background-color: rgb(109, 33, 109);color: white");
  submitInitEl.onmouseover = function () {
    this.style.backgroundColor = "#D4A4D8";
  }

  submitInitEl.onmouseout = function () {
    this.style.backgroundColor = "#6D216D";
  }


  submitInitEl.addEventListener("click", doHighScore)

  h2InitialsEl.appendChild(submitInitEl);
  sectionEl.appendChild(h2InitialsEl);

}

function doHighScore() {
  var ulHighScoresEl = document.createElement("ul");

  h1El.textContent = "High Scores"
  h2El.textContent = "";

  playerEl = initialsEl.value;
  sectionEl.removeChild(sectionEl.childNodes[2]);
  sectionEl.removeChild(sectionEl.childNodes[2]);
  var hsList = new Array();

  var count = 0;
  if (hsList.length == 0) {
    hsList[count] = playerEl;
    console.log(hsList[count]);
  }
  else {
    hsList.push(playerEl);
  }

  var objList = new Array();
  for (let x = 0; x < hsList.length; x++) {
    objList = [{ [x + 1]: hsList[x] }];

  }

  var finalList;
  for (let x = 0; x < hsList.length; x++) {
    objList.forEach(type => {
      finalList = Object.keys(type)[0];
    });

    var li = document.createElement('li');     // create li element.
    li.textContent = finalList + ". " + hsList[x] + " - " + finalScore;    // assigning text to li using array value.
    li.setAttribute('style', 'display: block;');    // remove the bullets.

    ulHighScoresEl.appendChild(li);     // append li to ul.
    sectionEl.appendChild(li);
  }
  console.log("Final list: " + finalList)


  // Put the object into storage
  localStorage.setItem('objList', JSON.stringify(objList));

  var highScorers = localStorage.getItem('objList');

  goBackEl.textContent = "Go Back";
  goBackEl.setAttribute("style", "width: 100px;text-align: left; background-color: rgb(109, 33, 109);color: white");
  goBackEl.onmouseover = function () {
    this.style.backgroundColor = "#D4A4D8";
  }

  goBackEl.onmouseout = function () {
    this.style.backgroundColor = "#6D216D";
  }

  clearScores.textContent = "Clear Highscores";
  clearScores.setAttribute("style", "width: 200px;text-align: left; background-color: rgb(109, 33, 109);color: white");
  clearScores.onmouseover = function () {
    this.style.backgroundColor = "#D4A4D8";
  }

  clearScores.onmouseout = function () {
    this.style.backgroundColor = "#6D216D";
  }

  sectionEl.appendChild(goBackEl);
  sectionEl.appendChild(clearScores);

  clearScores.addEventListener("click", resetScore);

  goBackEl.addEventListener("click", doOver);
}

function doOver(event) {
  event.preventDefault();
  while (sectionEl.firstChild)
    sectionEl.removeChild(sectionEl.firstChild);

  runQuizAgain();
  console.log(sectionEl)
}


function runQuizAgain() {
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

  

}
function resetScore(event) {
  event.preventDefault();
  sectionEl.removeChild(sectionEl.childNodes[2]);
}
