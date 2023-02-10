
//------women shoes----
var WomenShoes =[

{
    id:1,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1949031400.jpg?plain&size=400x400",
    name: "Thalia Sodi Womens Karmen Stiletto Knit Shooties",
    merchant:"Sold by BHFO",
    strikedoffprice:"$99.50",
    price: "39",
    off:"+ $0.08 / 2% Cashback",
  },


  {
    id:2,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1946676571.jpg?plain&size=400x400",
    name:"Steve Madden Womens Sarcastic Faux Leather Platform Ankle Boots",
    merchant:"Sold by BHFO",
    strikedoffprice:"$109.95",
    price: "41",
    off:"+ $0.84 / 2% Cashback",
  },

  {
    id:3,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1949629081.jpg?plain&size=400x400",
    name:"Wild Pair Womens Jeenie Sparkle Open Toe Ankle Strap",
    merchant:"Sold by BHFO",
    strikedoffprice:"$59.50",
    price: "30",
    off:"+ $0.62 / 2% Cashback",
  },


  {
    id:4,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1947470531.jpg?plain&size=400x400",
    name:"DKNY Womens Sophie Faux Leather Zipper Casual and Fashion Sneakers",
    merchant:"Sold by BHFO",
    strikedoffprice:"$139.00",
    price: "55",
    off:"+ $1.11 / 2% Cashback",
  },


  
  {
    id:5,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1937136499.jpg?plain&size=400x400",
    name:"Liz Claiborne Womens Eaves Suede Round Toe Dress Sandals",
    merchant:"Sold by BHFO",
    strikedoffprice:"$65.00",
    price: "16",
    off:"+ $0.34 / 2% Cashback",
  },

  {
    id:6,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1952565724.jpg?plain&size=400x400",
    name:"Nine West Womens Dazzle 2 Glass Ankle Ankle Boots",
    merchant:"Sold by BHFO",
    strikedoffprice:"$129.00",
    price: "83",
    off:"+ $1.68/ 2% Cashback",
  },
]
displaydata(WomenShoes);
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
  swal("Added To Cart")
 var warr =  WomenShoes.filter(function(elm,i){
   return i===index;

  })

var   flag = true;
  cartdata.map(function(elm){
    if(elm.id === warr[0].id){
      elm.quit++;
      flag = false;
    }
  })

  if(flag){
    cartdata.push(warr[0]);

  }
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
    
  var arr =  WomenShoes.filter(function(elm,i){
      return i===index;
     })
  localStorage.setItem('detail',JSON.stringify(arr));
  window.location.href = 'details.html'
    }


// filter best match 
function handlePriceSort(){ 
  // console.log("hii");
  var selected = document.getElementById("filterBestMatch").value;
 console.log(selected);
  if(selected ==="Price-High-Low"){
    console.log("hii2")
   var arr = WomenShoes.sort((a , b)=>{
    return Number(b.price) - Number( a.price) ;
    
    });
    console.log(arr);
    displaydata(arr);
  }
  if(selected ==="Price-Low-High"){
    var arr = WomenShoes.sort( (a, b)=>{
      return Number(a.price) - Number( b.price) ;
    });
    console.log(arr);
     displaydata(arr);
  }
  // console.log(cartdata);
 
 }