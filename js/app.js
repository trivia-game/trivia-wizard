'use strict';
// get login-form html element
var formEl = document.getElementById('login-form');
//get play-button html element
var playGameSectionEl = document.getElementById('play-button');
//creating array for holding all user objects
User.allUsers = [];
//check localStorage to see if there is any saved user objects. If there is, will be pulled and replaced to User.allUsers
checkLocalStorage();

// creating a variable for current user name
User.currentUserName = '';

// User constructor function. A new instance of User object will be pushed to User.allUsers
function User(username, password) {
  this.username = username;
  this.password = password;
  User.allUsers.push(this);
}

//Add event listener to login-form
formEl.addEventListener('submit', loginHandler);

// callback function to login form
// when form is submitted, user name and password will be saved into name and password variables
// Also, current user name will be set as the name it was entered
function loginHandler(e) {
  e.preventDefault();
  var name = e.target.userName.value;
  var password = e.target.password.value;
  User.currentUserName = name;

  // check if entered name can be found in the previously saved user objects
  // if name is found User.allUsers, welcome back greeting message will be printed using user's name
  // then current user name will be saved into localStorage
  for(var x = 0; x < User.allUsers.length; x++) {
    if(User.allUsers[x].username === name) {
      saveCurrentUser();
      welcomeBackGreeting();
      break;
    }
  }

  // if no same name is found in User.allUsers even after the end of for loop, it means it is a new user.
  // new User object will be created and saved into localStorage
  // new user greeting message will be printed using user name
  // current user name is saved into localStorage
  if (x === User.allUsers.length){
    new User(name, password);
    saveToLocalstorage();
    saveCurrentUser();
    greeting();
  }

  //synchroize User.allUsers again by pulling from localStorage
  checkLocalStorage();

  //finally display play game button
  displayButton();
}

//function to save User.allUsers to localStorage
function saveToLocalstorage(){
  localStorage.setItem('allUsers', JSON.stringify(User.allUsers));
}

//function to pull User.allUsers from localStorage and reassign to global variable User.allUsers
function checkLocalStorage() {
  if(localStorage.allUsers) {
    var users = JSON.parse(localStorage.getItem('allUsers'));
    for(var i in users){
      User.allUsers.push(users[i]);
    }
  }
}

//function to display play game button
function displayButton() {
  var playButtonEl = document.createElement('button');
  playButtonEl.textContent = 'Play Game!';
  playGameSectionEl.appendChild(playButtonEl);
  playButtonEl.addEventListener ('click', function(){ window.location = 'game.html';});
}

// greeting function for a new user
function greeting() {
  formEl.innerHTML = '';
  var h3El = document.createElement('h3');
  h3El.textContent = 'Hello ' + User.currentUserName;
  formEl.appendChild(h3El);
}

// greeting function for a return user
function welcomeBackGreeting() {
  formEl.innerHTML = '';
  var h3El = document.createElement('h3');
  h3El.textContent = 'Welcome Back! ' + User.currentUserName;
  formEl.appendChild(h3El);
}

// function to save current user to localStorage
function saveCurrentUser() {
  localStorage.setItem('currentUser', JSON.stringify(User.currentUserName));
}