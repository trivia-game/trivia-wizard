'use strict';

var formEl = document.getElementById('login-form');

User.allUsers = [];


function User(username, password) {
  this.username = username;
  this.password = password;
  User.allUsers.push(this);
}

formEl.addEventListener('submit', login);

function login(e) {
  e.preventDefault();
  var name = e.target.name.value;
  var password = e.target.password.value;
  new User(name, password);

  localStorage.setItem('info', JSON.stringify(User.allUsers));
}

function checkLocalStorage() {
  if (localStorage.info) {
    JSON.parse(localStorage.getItem('info'));
  }

  for (var x in User.allUsers) {
    if ()
  }
}

