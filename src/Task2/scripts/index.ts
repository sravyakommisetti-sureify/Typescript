interface UserType {
  username: string;
  password: string;
  status: Status;
}

enum Status {
  Active = "Active",
  Blocked = "Blocked",
}

class User {
  private userList: UserType[] = [];
  private userCount: number;
  constructor() {
    this.userCount = 0;
  }
  addUser(currUser: UserType): void {
    localStorage.setItem("username", currUser.username);
    localStorage.setItem("password", currUser.password);
    localStorage.setItem("status", currUser.status);
    this.userList.push(currUser);
    this.userCount += 1;
  }
  getUser(curUserName: string, pass: string) {
    const localUserName = localStorage.getItem("username") as string;
    const localPassWord = localStorage.getItem("password") as string;
    const localStatus = localStorage.getItem("status") as string;
    if (
      localUserName === curUserName &&
      localPassWord === pass &&
      localStatus === "Active"
    ) {
      return true;
    }
    return false;
  }
}
const masterUserData = new User();

class Login {
  private userData: User = masterUserData;
  authenticate(username: string, password: string): boolean {
    const res = this.userData.getUser(username, password);
    if (res) {
      return true;
    }
    return false;
  }
}

class SignUp {
  private userData: User = masterUserData;
  signUp(currUser: UserType) {
    this.userData.addUser(currUser);
  }
}

function loginEvent(username: string, password: string) {
  const loginUser: Login = new Login();
  if (loginUser.authenticate(username, password)) {
    window.location.href = "./dashboard.html";
    return true;
  }
  alert("Login unsucessful");
  return false;
}

function signupEvent(username: string, password: string) {
  const signupUser: SignUp = new SignUp();
  signupUser.signUp({
    username: username,
    password: password,
    status: Status.Active,
  });
}
const loginFormSubmit = document.getElementById("loginForm") as HTMLFormElement;
const signupSubmit = document.getElementById("signupButton");
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

loginFormSubmit?.addEventListener("submit", function (event) {
  event.preventDefault();
  loginEvent(usernameInput.value, passwordInput.value);
});

signupSubmit?.addEventListener("click", function () {
  signupEvent(usernameInput.value, passwordInput.value);
});
