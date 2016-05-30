$(document).ready(function(){

  var questionArea = document.getElementsByClassName('questions')[0];
  var answerArea   = document.getElementsByClassName('answers')[0];
  var checker      = document.getElementsByClassName('checker')[0];
  var current      = 0;

     // 1. Make an array of object. e.g var allQuestions = [{}, {}];
      allQuestions = {
        'At What temperature do solid objects visibly glow (Celsius)?' : ['525', '125', '32', 0],

        'What is the abbreviation for speed of light?' : ['SOL', 'C' , 'SL', 1],

        'What is the SI unit of electric current? ' : ['Hertz', 'Ampere', 'Ohm', 1],

        'Which is a primary color?' : ['Red', 'Black', 'Orange', 0],

        'Which is not used to measure temperature?' : ['Kelvin', 'Farenheit', 'Quart', 2]
      };

      // 2. Make a function that loads the questions

      // 3. Make a function that checks the answers

      // 4. Display the current users score based on the amount of questions they got right

       function loadQuestion(current) {
  // Loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable

    var question = Object.keys(allQuestions)[current];

    questionArea.innerHTML = '';
    questionArea.innerHTML = question;
  }


  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);


});
