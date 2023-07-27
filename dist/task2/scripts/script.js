"use strict";
let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("boxHeader");
let submitFlag = '';
loginBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Login";
    signupBtn.classList.add("disabled");
    loginBtn.classList.remove('disabled');
    submitFlag = 'login';
    console.log(submitFlag);
};
signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    loginBtn.classList.add("disabled");
    signupBtn.classList.remove('disabled');
    submitFlag = 'signup';
};
