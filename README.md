# trivia-wizard
201 final project

For our Code Fellows 201 final group project, we created a trivia game application: Trivia Wizard. We felt this type of game would be a fun way to demonstrate the skillset we developed throughout the course. We started out with the idea of a general trivia game where the questions increase in difficulty as you progress, similar to 'Who Wants to Be a Millionaire?' We found an awesome wizard gif online and 'Trivia Wizard' was born!

Our minimum viable product (MVP) included a login and welcome page, presenting the user with a total of three questions chosen at random from a pool of questions with four multiple choice answers arranged in a random order, and displaying their score at the end. 

Our stretch goals included:
more questions so that the game didn't end after three
adding a timer for answering a question
displaying the user's high score on login
difficulty levels for questions with increasing difficulty
lifelines (skip a question, 50/50, time extension) - we didn't get to these.

We set up the login so that the user's name and password are stored in local storage and they are greeted with a 'Welcome back, [user]!' message if they have played before, or a 'Hello, [user]!' if they're a new user. 

The index page also includes a brief intro about the game and how to play, as well as a button to start the game. In the upper right corner there is a nav with links to Home, About Us, and a Logout button if a user is logged in. 

<img width="1262" alt="screen shot 2018-02-01 at 11 48 51 am" src="https://user-images.githubusercontent.com/33847838/35700104-e3bff11a-0746-11e8-93c9-0fd38d995a14.png">

Clicking on the 'Play Game' button takes you to the main game page where the user is immediately presented with a question and four answers with a timer at the bottom of the page. The difficulty level of the question is displayed above the question. 

<img width="1265" alt="screen shot 2018-02-01 at 11 44 18 am" src="https://user-images.githubusercontent.com/33847838/35700116-e9698018-0746-11e8-8f93-e19529b4029a.png">

The questions are objects and the constructor function includes properties for the question (string), answer (string), setOfAnswers (array of answers that includes the correct answer), and a difficulty level (integer). 

When the main question function is called, a random number if selected to pull a question of that index from the array of question objects. There are loops to check if the difficulty level is appropriate for the question number the user is currently on. Once a random number index of the appropriate difficulty level is selected, the array of answers is shuffled to a random order using the Fisher-Yates Shuffle. The answers are presented in that random order. 



An event listener is on the div that contains all the answer buttons. When the event handler registers an event, the target button's value is checked against the correct answer property value of the question that was asked. If the user chose the wrong answer, the button they clicked turns red and after a 3 second pause the question and answers disappear and they are presented with the number they got correct and a message about what level of trivia student they are. If they select the correct answer, just that button turns green and a 'Next Question' button appears at the bottom of the screen for when they're ready to move on to the next question. 

<img width="1265" alt="screen shot 2018-02-01 at 11 43 32 am" src="https://user-images.githubusercontent.com/33847838/35700122-eec7bf7a-0746-11e8-8c68-3d0d7c77c22a.png">

<img width="1260" alt="screen shot 2018-02-01 at 11 49 15 am" src="https://user-images.githubusercontent.com/33847838/35700145-feba05fa-0746-11e8-9415-948959fbdefb.png">

<img width="1263" alt="screen shot 2018-02-01 at 11 45 54 am" src="https://user-images.githubusercontent.com/33847838/35700126-f27c9820-0746-11e8-8a13-4f4d246fcdd1.png">

If the user answers 9 questions or more, they are a Trivia Wizard! 

<img width="1258" alt="screen shot 2018-02-01 at 11 48 32 am" src="https://user-images.githubusercontent.com/33847838/35700132-f68c121a-0746-11e8-8a98-7679ad045f13.png">

The About Us page includes a short bio each of our team members:

<img width="1263" alt="screen shot 2018-02-01 at 11 49 43 am" src="https://user-images.githubusercontent.com/33847838/35700152-0310a1f4-0747-11e8-8734-a3efef1c652f.png">
<img width="1261" alt="screen shot 2018-02-01 at 11 49 53 am" src="https://user-images.githubusercontent.com/33847838/35700158-05a5fa68-0747-11e8-89ef-bc0e11d7e7b7.png">

trivia questions from: http://trivia.fyi/categories

sounds from: http://www.orangefreesounds.com/

We used the Meyer Web CSS Reset.

We found the Fisher-Yates Shuffle function on stackoverflow here:

https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array