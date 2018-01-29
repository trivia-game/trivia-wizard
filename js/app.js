'use strict';

var formEl = document.getElementById('login-form');
var playGameSectionEl = document.getElementById('play-button');

User.allUsers = [];
User.currentUser = 0;

// User constructor function
function User(username, password) {
  this.username = username;
  this.password = password;
  User.allUsers.push(this);
}

formEl.addEventListener('submit', login);

// callback function to login form
function login(e) {
  e.preventDefault();
  var name = e.target.userName.value;
  var password = e.target.password.value;

  checkLocalStorage();
  new User(name, password);

  localStorage.setItem('allUsers', JSON.stringify(User.allUsers));
}


function checkLocalStorage() {
  if (localStorage.info) {
    JSON.parse(localStorage.getItem('allUsers'));

    for (var x in User.allUsers) {
      if (User.allUsers[x].name === name) {
        User.currentUser = x;
        localStorage.setItem('currentUser', JSON.stringify(User.currentUser));
        displayButton();
      }
    }
  }
}

function displayButton() {
  var playButtonEl = document.createElement('button');
  playButtonEl.textContent = 'Play Game!';
  playGameSectionEl.appendChild(playButtonEl);
}

