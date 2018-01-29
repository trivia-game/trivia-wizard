'use strict';

var formEl = document.getElementById('login-form');
var playGameSectionEl = document.getElementById('play-button');

User.allUsers = [];
// User.currentUser.index = 0;
User.currentUserName = '';
// User.currentUser.password = '';

// User constructor function
function User(username, password) {
  this.username = username;
  this.password = password;
  User.allUsers.push(this);
}

formEl.addEventListener('submit', loginHandler);

// callback function to login form
function loginHandler(e) {
  e.preventDefault();
  var name = e.target.userName.value;
  var password = e.target.password.value;
  User.currentUserName = name;

  if (User.allUsers.length === 0) {
    new User(name, password);
  } else {
    for (var x = 0; x < User.allUsers.length; x++) {
      console.log('hello');
      if (User.allUsers[x].username === name) {
        greeting();
        console.log('hello2');
      } else {
        new User(name, password);
        console.log('hello3');
        localStorage.setItem('allUsers', JSON.stringify(User.allUsers));

      }
    }
  } 

  checkLocalStorage();
  displayButton();

}


function checkLocalStorage() {
  if (localStorage.allUsers) {
    User.allUsers = JSON.parse(localStorage.getItem('allUsers'));

    for (var x = 0; x < User.allUsers.length; x++) {
      console.log(User.currentUserName);
      if (User.allUsers[x].username === User.currentUserName) {
        localStorage.setItem('currentUser', JSON.stringify(User.allUsers[x]));
      }
    }
  }
}

function displayButton() {
  var playButtonEl = document.createElement('button');
  playButtonEl.textContent = 'Play Game!';
  playGameSectionEl.appendChild(playButtonEl);
}

function greeting() {
  formEl.innerHTML = '';
  var h3El = document.createElement('h3');
  h3El.textContent = 'Hello ' + User.currentUserName;
  formEl.appendChild('h3El');
}