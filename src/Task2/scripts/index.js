"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupEvent = exports.loginEvent = exports.Status = void 0;
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Blocked"] = "Blocked";
})(Status || (exports.Status = Status = {}));
var User = /** @class */ (function () {
    function User() {
        this.userList = [];
        this.userCount = 0;
    }
    User.prototype.addUser = function (currUser) {
        localStorage.setItem("username", currUser.username);
        localStorage.setItem("password", currUser.password);
        localStorage.setItem("status", currUser.status);
        this.userList.push(currUser);
        this.userCount += 1;
    };
    User.prototype.getUser = function (curUserName, pass) {
        var localUserName = localStorage.getItem("username");
        var localPassWord = localStorage.getItem("password");
        var localStatus = localStorage.getItem("status");
        if (localUserName === curUserName &&
            localPassWord === pass &&
            localStatus === "Active") {
            return true;
        }
        return false;
    };
    return User;
}());
var masterUserData = new User();
var Login = /** @class */ (function () {
    function Login() {
        this.userData = masterUserData;
    }
    Login.prototype.authenticate = function (username, password) {
        var res = this.userData.getUser(username, password);
        if (res) {
            return true;
        }
        return false;
    };
    return Login;
}());
var SignUp = /** @class */ (function () {
    function SignUp() {
        this.userData = masterUserData;
    }
    SignUp.prototype.signUp = function (currUser) {
        this.userData.addUser(currUser);
    };
    return SignUp;
}());
function loginEvent(username, password) {
    var loginUser = new Login();
    if (loginUser.authenticate(username, password)) {
        window.location.href = "./dashboard.html";
        return true;
    }
    alert("Login unsucessful");
    return false;
}
exports.loginEvent = loginEvent;
function signupEvent(username, password) {
    var signupUser = new SignUp();
    signupUser.signUp({
        username: username,
        password: password,
        status: Status.Active,
    });
}
exports.signupEvent = signupEvent;
var loginFormSubmit = document === null || document === void 0 ? void 0 : document.getElementById("loginForm");
var signupSubmit = document === null || document === void 0 ? void 0 : document.getElementById("signupButton");
var usernameInput = document === null || document === void 0 ? void 0 : document.getElementById("username");
var passwordInput = document === null || document === void 0 ? void 0 : document.getElementById("password");
loginFormSubmit === null || loginFormSubmit === void 0 ? void 0 : loginFormSubmit.addEventListener("submit", function (event) {
    event.preventDefault();
    loginEvent(usernameInput.value, passwordInput.value);
});
signupSubmit === null || signupSubmit === void 0 ? void 0 : signupSubmit.addEventListener("click", function () {
    signupEvent(usernameInput.value, passwordInput.value);
});
