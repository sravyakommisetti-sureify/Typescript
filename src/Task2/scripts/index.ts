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
    this.userList.push(currUser);
  }
  getUser(curUserName: string, pass: string) {
    const res = this.userList.find(
      ({ username, password }) => username === curUserName && password === pass
    );
    return res;
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
    // return to dashboard
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

const loginSubmit = document.getElementById("loginButton");
const signupSubmit = document.getElementById("signupButton");
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
loginSubmit?.addEventListener("click", function () {
  console.log("ganeshaaa");
  loginEvent(usernameInput.value, passwordInput.value);
});

signupSubmit?.addEventListener("click", function () {
  console.log("Ganeshaaa");
  signupEvent(usernameInput.value, passwordInput.value);
});
