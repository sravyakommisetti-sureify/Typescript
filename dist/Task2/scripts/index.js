"use strict";
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Blocked"] = "Blocked";
})(Status || (Status = {}));
class User {
    constructor() {
        this.userList = [];
        this.userCount = 0;
    }
    addUser(currUser) {
        this.userList.push(currUser);
    }
    getUser(curUserName, pass) {
        const res = this.userList.find(({ username, password }) => username === curUserName && password === pass);
        return res;
    }
}
const masterUserData = new User();
class Login {
    constructor() {
        this.userData = masterUserData;
    }
    authenticate(username, password) {
        const res = this.userData.getUser(username, password);
        if (res) {
            return true;
        }
        return false;
    }
}
class SignUp {
    constructor() {
        this.userData = masterUserData;
    }
    signUp(currUser) {
        this.userData.addUser(currUser);
    }
}
function loginEvent(username, password) {
    const loginUser = new Login();
    if (loginUser.authenticate(username, password)) {
        // return to dashboard
        return true;
    }
    alert("Login unsucessful");
    return false;
}
const loginSubmit = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
loginSubmit === null || loginSubmit === void 0 ? void 0 : loginSubmit.addEventListener("click", function () {
    loginEvent(usernameInput.value, passwordInput.value);
});
function signupEvent(username, password, email) {
    const signupUser = new SignUp();
    signupUser.signUp({
        username: username,
        password: password,
        status: Status.Active,
    });
}
