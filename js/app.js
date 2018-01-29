'use strict';

var formEl = document.getElementById('login-form');
var playGameSectionEl = document.getElementById('play-button');

User.allUsers = [];

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
  var name = e.target.name.value;
  var password = e.target.password.value;

  checkLocalStorage();
  new User(name, password);

  localStorage.setItem('info', JSON.stringify(User.allUsers));
}


function checkLocalStorage() {
  if (localStorage.info) {
    JSON.parse(localStorage.getItem('info'));

    for (var x in User.allUsers) {
      if (User.allUsers[x].name === name) {
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

