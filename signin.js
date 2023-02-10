document.querySelector("#signinform").addEventListener("submit", signin);
var outputName;
function signin(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var old_data = JSON.parse(localStorage.getItem("signupData"));
  for (var i = 0; i < old_data.length; i++) {
    if (email == old_data[i].email && password == old_data[i].password) {
      outputName=old_data[i].fname;
      localStorage.setItem("currentUser", JSON.stringify(old_data[i]));
      
      alert("Sign In Successfull");
      // window.Location.href = "../project.html";
      document.getElementById("email").value="";
      document.getElementById("password").value="";
      console.log(outputName)
      window.open("../project.html","_self")
      return;
    }
  }
        alert("Email or Password Does Not Match");
        document.getElementById("email").value="";
        document.getElementById("password").value="";
      
}

function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}