document.querySelector("#signupform").addEventListener("submit", signup);

function signup(e) {
  e.preventDefault();
  console.log("signup");
  var fname = document.getElementById("fname").value;
  localStorage.setItem("userName", JSON.stringify(fname));
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confpass = document.getElementById("confpassword").value;
  var mob = document.getElementById("mobnumber").value;

  if (password != confpass) {
    alert("Password & Confirm Password does not match");
    return;
  }

  var data = { fname, lname, email, password, mob };

  var old_data = JSON.parse(localStorage.getItem("signupData")) || [];

  old_data.push(data);
  localStorage.setItem("signupData", JSON.stringify(old_data));
  alert("Signup Successfull");
  
  window.location.href="./signin.html"
}