"use strict";
// // import { getAuthenticated } from "./scripts/loginModal/login";
// // import { Status } from "./app.types";
// // import { UserAccess, Status} from '../../app.types' 
// // interface UserAccess {
// //   username: string;
// //   password: string;
// //   status: Status;
// // }
// // enum Status {
// //   Active = 'Active',
// //   Blocked = 'Blocked',
// // }
// // class Login {
// //   static authenticate(user: UserAccess): boolean {
// //     if (user.status === Status.Blocked) {
// //       return false;
// //     }
// //     return true;
// //   }
// // }
// // const user: UserAccess = {
// //   username: 'john',
// //   password: 'password',
// //   status: Status.Active,
// // };
// // const getAuthenticated = ( userCard: UserAccess) : boolean => {
// //  console.log('ganeshaa');
// //  return Login.authenticate(userCard)
// // }
// let loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;
// let signupBtn = document.getElementById("signupBtn") as HTMLButtonElement;
// let submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
// let nameField = document.getElementById("nameField") as HTMLInputElement;
// let title = document.getElementById("boxHeader") as HTMLHeadingElement;
// let submitFlag: string = "";
// loginBtn.onclick = function () {
//   nameField.style.maxHeight = "0";
//   title.innerHTML = "Login";
//   signupBtn.classList.add("disabled");
//   loginBtn.classList.remove("disabled");
//   submitFlag = "login";
//   getAuthenticated({
//     username: "john",
//     password: "password",
//     status: Status.Active,
//   });
// };
// signupBtn.onclick = function () {
//   nameField.style.maxHeight = "60px";
//   title.innerHTML = "Sign Up";
//   loginBtn.classList.add("disabled");
//   signupBtn.classList.remove("disabled");
//   submitFlag = "signup";
// };
// submitBtn.onclick = function () {
//   console.log(submitFlag);
//   console.log("yesss");
// };
