'use strict';

// Array that all questions are being pushed to from the constructor
Question.allQuestions = [];

// variables accessing elements in the HTML
var sectionEl = document.getElementById('questions');
var divQuestionEl = document.getElementById('question');
var divAnswerEl = document.getElementById('answers');
var rand = 0;


// Constructor function
function Question(question, answer, setOfAnswers) {
  this.question = question;
  this.answer = answer;
  this.setOfAnswers = setOfAnswers;
  Question.allQuestions.push(this);
}

// New Instances of the constructor
new Question('What movie won best picture at the 2017 Academy Awards?', 'Moonlight', ['Moonlight', 'La La Land', 'Manchester by the Sea', 'Fences']);
new Question('In the movie The Terminator, what is the name of the company that created Skynet?', 'Cyberdyne Systems', ['Cyberdyne Systems', 'Code Fellows', 'Multi-National United', 'Tetravaal']);
new Question('Emma Watson is known for playing which character in Harry Potter?', 'Hermione Granger', ['Hermione Granger', 'Luna Lovegood', 'Bellatrix Lestrange', 'Nymphadora Lupin']);
new Question('Bruce Banner turns into what fictional superhero when he becomes angry?', 'The Hulk', ['The Hulk', 'Batman', 'Ironman', 'Antman']);
new Question('Which actor played Marty McFly in the 1980\'s sci-fi classic Back to the Future?', 'Michael J. Fox', ['Michael J. Fox', 'John Cusak', 'Tom Cruise', 'Michael Keaton']);
new Question('Tyler Durden is a fictional character appearing as the central protagonist and antagonist in what 1999 american film?', 'Fight Club', ['Fight Club', 'The Matrix', 'The Green Mile', 'The Sixth Sense']);

// random number generator
function randomNumGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fisher-Yates Shuffle gives us a random order of an array
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Main game question function
function gameQuestions() {
  // pulling a random number from our array of questions
  rand = randomNumGenerator(0, Question.allQuestions.length - 1);
  var q1 = Question.allQuestions[rand];
  console.log(q1.question);
  var pEl = document.createElement('p');
  console.log(pEl);
  pEl.textContent = q1.question;
  //appending random question to an element in game.html
  divQuestionEl.appendChild(pEl);
  // shuffling the array of possible answer so that they appear in a random order and assigning to a variable
  var answerArray = shuffle(q1.setOfAnswers);
  // for loop to assign a letter to each question in the correct order
  for (var i = 0; i < answerArray.length; i++) {
    var letterIndex;
    if (i === 0) {
      letterIndex = 'A) ';
    } else if (i === 1) {
      letterIndex = 'B) ';
    } else if (i === 2) {
      letterIndex = 'C) ' ;
    } else {
      letterIndex = 'D) ';
    }
    // creating button elements for each letter/answer, assigning the value of an answer and appending to the form element that holds the buttons/answers
    var button = document.createElement('button');
    button.setAttribute('name', answerArray[i]);
    console.log(button);
    button.innerHTML = '<span>' + letterIndex + '</span>' + answerArray[i];
    divAnswerEl.appendChild(button);
  }
}

// Event Listener on form
divAnswerEl.addEventListener('click', answerButtonHandler);

//
function answerButtonHandler(e) {
  console.log(e);
  var target = e.target.name;
  if (Question.allQuestions[rand].answer === target) {
    console.log("true");
  }
}


// calling the main game function on page load
gameQuestions();