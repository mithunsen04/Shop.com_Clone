document.getElementById("forotp").addEventListener("click",getotp);
var email;
var old_data;
var num;
function getotp(){
    email=document.getElementById("email").value;
    old_data = JSON.parse(localStorage.getItem("signupData"));
    for (var i = 0; i < old_data.length; i++) {
        if (email == old_data[i].email) {
          num=i;
            document.getElementById("enterotp").style.display="block";
            return;
        }     
} 
  alert("Please Enter Registered Email");
  document.getElementById("email").value=""; 

}

document.getElementById("submite").addEventListener("click",setpassword);
function setpassword(){
    var otp=document.getElementById("otp1").value;
    console.log(otp);
  if (otp == "1234") {
    document.getElementById("submite").style.display="none";
    document.getElementById("updatePass").style.display="block";
    document.getElementById("forotp").style.display="none";
    document.getElementById("forgoth1").innerText="Update New Password";
    document.getElementById("forgotp").innerText="You are just one step away for Sign-In";
    document.getElementById("forgoth2").innerText="Step 2";
    document.getElementById("forgotl1").innerText="Enter New Password";
    document.getElementById("forgotl2").innerText="Confirm New Password";
    document.getElementById("email").value="";
    document.getElementById("otp1").value="";
          }
          else {
            alert("Please Enter Valid Otp");
            document.getElementById("otp1").value="";
          }
        }
        
document.getElementById("updatePass").addEventListener("click",changePassword);
function changePassword(){
    var newPass=document.getElementById("email").value;
    var confPass=document.getElementById("otp1").value;
    if (newPass!=confPass){
      alert("New Password and Confirm Password Should be the Same");
      document.getElementById("email").value="";
      document.getElementById("otp1").value="";

      return;
    } 
          old_data[num].password=newPass;
          localStorage.setItem("signupData",JSON.stringify(old_data));
          alert("new Password set Succesfully")
          window.location.href="./signin.html";
        }
        

        