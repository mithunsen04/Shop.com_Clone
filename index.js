function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}

// search functionality

document.querySelector(".btn1").addEventListener("click", (e) => {
  funsearch(e);
});

function funsearch(e) {
  e.preventDefault();
  console.log('clicked')
  var key = document.getElementById("search").value;
  key = key.toUpperCase();
  if (key.includes("BEAUTY")) {
    window.open("./Categories_1/MakeUp.html", "_self");

    document.querySelector("#search").value = "";
  } else if (key.includes("CLOTH")) {
    window.open("./Categories_1/womenCloths.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("HOME")) {
    window.open("./Categories_1/HomePro.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("JWELLERY")) {
    window.open("./Categories_1/jwellery.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("KIDS")) {
    window.open("./Categories_1/Kids.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("PET")) {
    window.open("./Categories_1/Pet.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("SHOES")) {
    window.open("./Categories_1/WomenShoes.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("SPORTS")) {
    window.open("./Categories_1/MenShoes.html", "_self");
    document.querySelector("#search").value = "";
  }

 
}


// cart logo   ***
var count = localStorage.getItem("cartcount") || 0;
document.querySelector(".cart-count").innerText = count;

//scroll
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var cartArr = JSON.parse(localStorage.getItem("cart")) || [];

// console.log(document.querySelector(".cart-count"));

// cart logo count-----------------------------
var count = localStorage.getItem("cartcount") || 0;
document.querySelector(".cart-count").innerText = count;

// search functionality

document.querySelector("#NamesSorting").addEventListener("change", changesearch);

function changesearch() {
  console.log('changed')
  var key = document.querySelector("#NamesSorting").value;
  key = key.toUpperCase();
  if (key.includes("BEAUTY")) {
    window.open("./Categories_1/MakeUp.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("CLOTH")) {
    window.open("./Categories_1/womenCloths.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("HOME")) {
    window.open("./Categories_1/HomePro.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("JWELLERY")) {
    window.open("./Categories_1/jwellery.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("KIDS")) {
    window.open("./Categories_1/Kids.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("PET")) {
    window.open("./Categories_1/Pet.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("SHOES")) {
    window.open("./Categories_1/WomenShoes.html", "_self");
    document.querySelector("#search").value = "";
  } else if (key.includes("SPORTS")) {
    window.open("./Categories_1/MenShoes.html", "_self");
    document.querySelector("#search").value = "";
  }
}

// cart logo
var count = localStorage.getItem("") || 0;
document.querySelector(".cart-count").innerText = count;
//function image

document.querySelector("#poster").addEventListener("click", function () {
  window.open("clothe.html", "_self");
});
//username
document.querySelector("#user-name1").textContent =
  JSON.parse(localStorage.getItem("userName")) || "Sign In";

// microphone
const button = document.querySelector("#mic");
const textInput = document.querySelector("#search");

button.addEventListener("click", () => {
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = (event) => {
    textInput.value = event.results[0][0].transcript;
  };
  recognition.start();
});

var cartdata = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector('.cart-count').innerText = cartdata.length;
  