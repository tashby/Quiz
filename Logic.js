
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

//Questions Objects
var questions = [{
  "question": "At What temperature do solid objects visibly glow (Celsius)?",
  "choices": ["525", "125", "32"],
  "correct": "525"
}, {
  "question": "What is the abbreviation for speed of light?",
  "choices": ["SOL", "C" , "SL"],
  "correct": "C"
}, {
  "question": "What is the SI unit of electric current",
  "choices": ["Hertz", "Ampere", "Ohm"],
  "correct": "Ampere"
}, {
  "question": "Which is a primary color??",
  "choices": ["Red", "Black", "Orange"],
  "correct": "Red"
}, {
  "question": "Which is not used to measure temperature?",
  "choices": ["Kelvin", "Farenheit", "Quart"],
  "correct": "Quart"
}];

function quizStart(){
questions.forEach(function(object) {
    $('#test').innerHTML(object.question);
});
}
quizStart();

//Questions Arrays
/*var questions = [
  [ "At What temperature do solid objects visibly glow (Celsius)?", "525", "125", "32", "A"],
  [ "What is the abbreviation for speed of light?", "SOL", "SL", "C", "C" ],
  [ "What is the SI unit of electric current?", "Hertz", "Ampere", "Ohm", "B" ],
  [ "Which is not used to measure temperature?", "Kelvin", "Farenheit", "Quart", "C" ]
];*/
function _(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = _("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    _("test_status").innerHTML = "Test Completed";
    pos = 0;
    correct = 0;
    return false;
  }
  _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][4]){
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
