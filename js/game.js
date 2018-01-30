'use strict';

Question.allQuestions = [];

var sectionEl = document.getElementById('questions');
var formEl = document.getElementById('answers');

function Question(question, answer, setOfAnswers) {
  this.question = question;
  this.answer = answer;
  this.setOfAnswers = setOfAnswers;
  Question.allQuestions.push(this);
}

new Question('What movie won best picture at the 2017 Academy Awards?', 'Moonlight', ['Moonlight', 'La La Land', 'Manchester by the Sea', 'Fences']);
new Question('In the movie The Terminator, what is the name of the company that created Skynet?', 'Cyberdyne Systems', ['Cyberdyne Systems', 'Code Fellows', 'Multi-National United', 'Tetravaal']);
new Question('Emma Watson is known for playing which character in Harry Potter?', 'Hermione Granger', ['Hermione Granger', 'Luna Lovegood', 'Bellatrix Lestrange', 'Nymphadora Lupin']);
new Question('Bruce Banner turns into what fictional superhero when he becomes angry?', 'The Hulk', ['The Hulk', 'Batman', 'Ironman', 'Antman']);
new Question('Which actor played Marty McFly in the 1980\'s sci-fi classic Back to the Future?', 'Michael J. Fox', ['Michael J. Fox', 'John Cusak', 'Tom Cruise', 'Michael Keaton']);
new Question('Tyler Durden is a fictional character appearing as the central protagonist and antagonist in what 1999 american film?', 'Fight Club', ['Fight Club', 'The Matrix', 'The Green Mile', 'The Sixth Sense']);

function randomNumGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

function gameQuestions() {
  var rand = randomNumGenerator(0, Question.allQuestions.length);
  var q1 = Question.allQuestions[rand];
  var pEl = document.createElement('p');
  pEl.textContent = q1.question;
  sectionEl.appendChild(pEl);
  var answerArray = shuffle(q1.setOfAnswers);
  for (var i in answerArray) {
    var letterIndex;
    if (i === 0) {
      letterIndex = 'A';
    } else if (i === 1) {
      letterIndex = 'B';
    } else if (i === 2) {
      letterIndex = 'C';
    } else {
      letterIndex = 'D';
    }
    var button = document.createElement('button');
    button.innerHTML = '<span>' + letterIndex + '</span>' + answerArray[i];
    formEl.appendChild(button);
  }
}

gameQuestions();