'use strict';

var formEl = document.getElementById('login-form');
var playGameSectionEl = document.getElementById('play-button');
User.allUsers = [];
checkLocalStorage();

// User.currentUser.index = 0;
User.currentUserName = '';

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


  for(var x = 0; x < User.allUsers.length; x++) {
    if(User.allUsers[x].username === name) {
      saveCurrentUser();
      welcomeBackGreeting();
      break;
    }
  }
  console.log(x);
  if (x === User.allUsers.length){
    new User(name, password);
    saveToLocalstorage();
    saveCurrentUser();
    greeting();
  }

  checkLocalStorage();
  displayButton();
}

function saveToLocalstorage(){
  localStorage.setItem('allUsers', JSON.stringify(User.allUsers));
}


function checkLocalStorage() {
  if(localStorage.allUsers) {
    var users = JSON.parse(localStorage.getItem('allUsers'));
    for(var i in users){
      User.allUsers.push(users[i]);
    }
  }
  console.log('after checkLocalStorage: ' + User.allUsers);
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
  formEl.appendChild(h3El);
}

function welcomeBackGreeting() {
  formEl.innerHTML = '';
  var h3El = document.createElement('h3');
  h3El.textContent = 'Welcome Back! ' + User.currentUserName;
  formEl.appendChild(h3El);
}

function saveCurrentUser() {
  localStorage.setItem('currentUser', JSON.stringify(User.currentUserName));
}