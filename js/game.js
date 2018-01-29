'use strict';

Question.allQuestions = [];

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

