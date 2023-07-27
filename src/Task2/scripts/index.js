var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Blocked"] = "Blocked";
})(Status || (Status = {}));
var User = /** @class */ (function () {
    function User() {
        this.userList = [];
        this.userCount = 0;
    }
    User.prototype.addUser = function (currUser) {
        this.userList.push(currUser);
    };
    User.prototype.getUser = function (curUserName, pass) {
        var res = this.userList.find(function (_a) {
            var username = _a.username, password = _a.password;
            return username === curUserName && password === pass;
        });
        return res;
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
        // return to dashboard
        return true;
    }
    alert("Login unsucessful");
    return false;
}
function signupEvent(username, password) {
    var signupUser = new SignUp();
    signupUser.signUp({
        username: username,
        password: password,
        status: Status.Active
    });
}
var loginSubmit = document.getElementById("loginButton");
var signupSubmit = document.getElementById("signupButton");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
loginSubmit === null || loginSubmit === void 0 ? void 0 : loginSubmit.addEventListener("click", function () {
    console.log("ganeshaaa");
    loginEvent(usernameInput.value, passwordInput.value);
});
signupSubmit === null || signupSubmit === void 0 ? void 0 : signupSubmit.addEventListener("click", function () {
    console.log("Ganeshaaa");
    signupEvent(usernameInput.value, passwordInput.value);
});
