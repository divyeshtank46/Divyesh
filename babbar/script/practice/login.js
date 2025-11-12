const admin = "admin@gmail.com";
const adminPass = "666444";
let register = () => {
  let user = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  localStorage.setItem("userName", user);
  localStorage.setItem("password", pass);
  window.location.href = "login.html";
};
let Login = () => {
  let logUser = document.getElementById("checkemail").value;
  let logPass = document.getElementById("checkpass").value;
  let savedUser = localStorage.getItem("userName");
  let savedPass = localStorage.getItem("password");
  if (logUser == admin && logPass == adminPass) {
    alert("Welcome Admin");
    window.location.href = "admin.html";
  } else if (logUser == savedUser && logPass == savedPass) {
    alert("Login Successfull !!");
    window.location.href="Home.html";
  }
  else{
    alert("Invalid Credintials");
  }
};
