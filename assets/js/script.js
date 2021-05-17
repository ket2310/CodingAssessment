var body = document.body;
var headerEl = document.createElement("header");
var mainEl = document.createElement("main");
var sectionEl = document.createElement("section");
var clock = document.getElementById("clock");
var secondsLeft = 90;

body.appendChild(mainEl);
mainEl.appendChild(sectionEl);
sectionEl.setAttribute("class", "banner")

var h1El = document.createElement("h1");
h1El.textContent = "Coding Quiz Challenge";
h1El.setAttribute("id", "banner1");
sectionEl.appendChild(h1El)

var h2El = document.createElement("h2");
h2El.textContent ="Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
h2El.setAttribute("id", "banner2");
sectionEl.appendChild(h2El);

var goQuiz = document.createElement("button");
goQuiz.setAttribute("id", "start")
goQuiz.textContent = "Start Quiz";
sectionEl.appendChild(goQuiz);

goQuiz.addEventListener("click", runQuiz);

var codeQuestions = {
    Question: "Arrays in JavaScript can be used to store _________.",
    answerA: "numbers and strings" ,
    answerB: "other arrays",
    answerC: "booleans",
    answerD: "all of the above",
    realAnswer:  "D"
}

function runQuiz(event) {
    // Prevent default action
    event.preventDefault();
    goQuiz.setAttribute("style", "visibility: hidden");
    setTime();
  
    h1El.textContent = codeQuestions.Question;
    h2El.textContent = "";

    var QsectionEl = document.createElement("section");
    var ulEl = document.createElement("ul");
    ulEl.setAttribute("id", "questionList");
    var liEl1 = document.createElement("li");
    var btnEl1 = document.createElement("button");

    var liEl2 = document.createElement("li");
    var btnEl2 = document.createElement("button");

    var liEl3 = document.createElement("li");
    var btnEl3 = document.createElement("button");
    
    var liEl4 = document.createElement("li");
    var btnEl4 = document.createElement("button");

    sectionEl.appendChild(ulEl)    
    ulEl.appendChild(liEl1);
    
    liEl1.textContent = "A. " + codeQuestions.answerA;
    
}

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    clock.textContent = "Time: " + secondsLeft;
    

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      doHighScore();
    }

  }, 1000);
}

function doHighScore(){

}