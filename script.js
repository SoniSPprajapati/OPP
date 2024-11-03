// const user = {
//   username: "Soni",
//   loginCount: 5,
//   signIn: true,

//   getUserDetails: function () {
//     // console.log("got details from database");
//     // console.log(`username: ${this.username}`);
//     console.log(this);
//   },
// };
// console.log(user.username);
// console.log(user.getUserDetails());

function User(userName, loginCount, isLoggedIn) {
  (this.userName = userName),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);
  return this;
}
const userOne = User("soni", 6, true);
console.log(userOne);
