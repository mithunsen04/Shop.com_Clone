var MakeUp =[

    {
        id:1,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/250000/251800/251872/products/1785382326.jpg?plain&size=400x400",
        name: "Motives® LALA Pop Pigment Palette",
        merchant:"Sold by Motives Cosmetics",
        strikedoffprice:"$119.99",
        price: "49",
        off:"+ $8.10 / 6% Cashback",
      },
    {  id:2,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/240000/243300/243380/products/1872166142.jpg?plain&size=750x750",
        name: "Motives® Get Cheeky Blush Palette",
        merchant:"Sold by Motives Cosmetics",
        strikedoffprice:"$69.99",
        price: "46",
        off:"+ $8.10 / 6% Cashback",
      },
      {  id:3,
        quantity:1,
        image_url:
           "https://img.shop.com/Image/240000/243300/243380/products/1871478045.jpg?plain&size=500x500",
         name: "Motives Cream Lipstick",
         merchant:"Sold by Motives Cosmetics",
         strikedoffprice:"$32.99",
         price: "18",
         off:"+ $8.10 / 6% Cashback",
       },
       {  id:4,
        quantity:1,
        image_url:
           "https://img.shop.com/Image/240000/243300/243380/products/536366002.jpg?plain&size=500x500",
         name: "Motives® Collagen Core Lipstick",
         merchant:"Sold by Motives Cosmetics",
         strikedoffprice:"$119.09",
         price: "69",
         off:"+ $8.10 / 6% Cashback",
       },
       {  id:5,
        quantity:1,
        image_url:
           "https://img.shop.com/Image/240000/243300/243380/products/1942133484.jpg?plain&size=500x500",
         name: "Motives® 30th Anniversary Lip Collection",
         merchant:"Sold by Motives Cosmetics",
         strikedoffprice:"$100.99",
         price: "35",
         off:"+ $8.10 / 6% Cashback",
       },
       {  id:6,
        quantity:1,
        image_url:
           "https://img.shop.com/Image/260000/262100/262191/products/1929218317.jpg?plain&size=400x400",
         name: "Wet n Wild Wild Shine Nail Color Purple Grape Minds Think Alike",
         merchant:"Sold by Motives Cosmetics",
         strikedoffprice:"$10.99",
         price: "6",
         off:"+ $8.10 / 6% Cashback",
       },
       {  id:7,
        quantity:1,
        image_url:
           "https://img.shop.com/Image/240000/243300/243380/products/536366031.jpg?plain&size=500x500",
         name: "Motives® Blush Bronzer Duo",
         merchant:"Sold by Motives Cosmetics",
         strikedoffprice:"$10.99",
         price: "36",
         off:"+ $8.10 / 6% Cashback",
       },


]

displaydata(MakeUp);
function displaydata(array){
document.getElementById("dusraDiv").innerHTML="";
  array.map(function(elm,index){
      // var div1 = document.createElement("div");
       var div = document.createElement("div");

      var name = document.createElement("h2");
      name.textContent = elm.name;
      var img = document.createElement("img");
      img.setAttribute("src" , elm.image_url);

      var pricebox = document.createElement("div");
      var buttonBox =document.createElement("div");

      var price = document.createElement("p");
      price.textContent = "$" + elm.price;

      var strikedoffprice = document.createElement("p");
      strikedoffprice.textContent = elm.strikedoffprice;
      
      var logo_cart =document.createElement("img");
      logo_cart.textContent=elm.logo_cart;

      var logo_cart_span = document.createElement("span");
     

      var merchant = document.createElement("p");
      merchant.textContent =elm.merchant;
      
      var off = document.createElement("p");
      off.textContent =elm.off;

      var see_details = document.createElement("button");
      see_details.textContent = "See Details"

      var btncart = document.createElement("button");
      btncart.textContent = "Add to Cart";

      pricebox.setAttribute("class","pricebox");

      see_details.setAttribute("class","see_details");
      btncart.setAttribute("class" , "btncart");

      btncart.addEventListener("click" , function(){
        addtocart(index)
      })

      see_details.addEventListener("click" , function(){
        showDetails(index)
      })
     logo_cart_span.append(logo_cart);
     off.setAttribute("class","off")
      div.setAttribute("class","dusradiv");
      buttonBox.append(see_details,btncart);
      pricebox.append(strikedoffprice,price);
      div.append(img,name,logo_cart_span , merchant , pricebox , off,buttonBox);

      document.getElementById("dusraDiv").append(div);
  })
}


//feedback
function feedbackgiven(){
  swal("Thank You!", "For Your FeedBack","success");
}

// cart
var cartdata = JSON.parse(localStorage.getItem("cart")) || [];
function addtocart(index){
  swal("Added To Cart");
 var warr =  MakeUp.filter(function(elm,i){
   return i===index;
  })

cartdata.push(warr[0]);
  let count = cartdata.length ;
  console.log(count)
  document.querySelector('.cart-count').innerText = count ;
  // cartdata.push(warr[0]);
  console.log(cartdata);
  localStorage.setItem("cart",JSON.stringify(cartdata));
}

function myFunction() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//see details
const showDetails = (index)=>{
    
  var arr =  womensData.filter(function(elm,i){
      return i===index;
     })
  localStorage.setItem('detail',JSON.stringify(arr));
  window.location.href = './details.html'
    }

// filter best match 
function handlePriceSort(){ 
  // console.log("hii");
  var selected = document.getElementById("filterBestMatch").value;
 console.log(selected);
  if(selected ==="Price-High-Low"){
    console.log("hii2")
   var arr = MakeUp.sort((a , b)=>{
    return Number(b.price) - Number( a.price) ;
    
    });
    console.log(arr);
    displaydata(arr);
  }
  if(selected ==="Price-Low-High"){
    var arr = MakeUp.sort( (a, b)=>{
      return Number(a.price) - Number( b.price) ;
    });
    console.log(arr);
     displaydata(arr);
  }
  // console.log(cartdata);
 
 }