$(document).ready(function(){

  var questionArea = document.getElementsByClassName('questions')[0];
  var answerArea   = document.getElementsByClassName('answers')[0];
  var checker      = document.getElementsByClassName('checker')[0];
  var current      = 0;

     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'At What temperature do solid objects visibly glow (Celsius)?' : ['525', '125', '32', 0],

        'What is the abbreviation for speed of light?' : ['SOL', 'C' , 'SL', 1],

        'What is the SI unit of electric current? ' : ['Hertz', 'Ampere', 'Ohm', 1],

        'Which is a primary color?' : ['Red', 'Black', 'Orange', 0],

        'Which is not used to measure temperature?' : ['Kelvin', 'Farenheit', 'Quart', 2]
      };

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

