var WomensTopData=[
   //-----tops-------
  
  {
    id:1,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/250000/253200/253251/products/1938891159.jpg?plain&size=400x400",
    name: "I-N-C Womens Illusion Stripe Embellished T-Shirt",
    merchant:"Sold by Tags Weekly",
    strikedoffprice:"$39.50 ",
    price: "20",
    off:"+ $0.41 / 2% Cashback",
  },

  {
    id:2,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/278100/278132/products/1958145237.jpg?plain&size=400x400",
    name: "ADRIANNA PAPELL Womens Teal Short Sleeve Illusion Neckline",
    merchant:"Sold by BOBBI + BRICKA",
    strikedoffprice:"$139.00 ",
    price: "27",
    off:"+ $0.84 / 3% Cashback",
  },

  
  {
    id:3,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1949010015.jpg?plain&size=1600x1600",
    name: "Mother Womens Don't Be A Clam, Open Up Graphic Cotton T-Shirt",
    merchant:"Sold by BHFO",
    strikedoffprice:"$95.00 ",
    price: "26",
    off:"+ up to $0.54 / 2% Cashback",
  },

  {
    id:4,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/278100/278132/products/1958199656.jpg?plain&size=400x400",
    name: "EILEEN FISHER Womens White Cotton Short Sleeve Crew Neck",
    merchant:"Sold by BOBBI + BRICKA",
    strikedoffprice:"$68.00",
    price: "20",
    off:"+ $0.63 / 3% Cashback",
  },

  {
    id:5,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1945399662.jpg?plain&size=400x400",
    name: "Calvin Klein Womens Collar Knit Button-Down Top",
    merchant:"Sold by BHFO",
    strikedoffprice:"$79.50",
    price: "35",
    off:"+ up to $0.72 / 2% Cashback",
  },

  {
    id:6,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/290000/292000/292019/products/1932759430.jpg?plain&size=400x400",
    name: "Cowgirl Up Western Shirt Womens L/S Button Crochet Black CG91108",
    merchant:"Sold by Ranch & Home",
    strikedoffprice:"$55.00",
    price: "95",
    off:"+ $3.30 / 6% Cashback",
  },

  {
    id:7,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/290000/291200/291280/products/1928286953.jpg?plain&size=400x400",
    name: "Junior's Top Gun Talk to Me Goose Quote Graphic T-Shirt",
    merchant:"Sold by Fifth Sun",
    strikedoffprice:"$29.99",
    price: "17",
    off:"+ $1.08 / 6% Cashback",
  },
  {
    id:8,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/290000/291200/291280/products/1951969449.jpg?plain&size=400x400",
    name: "Junior's WWE Roman Reigns Poster Graphic T-Shirt",
    merchant:"Sold by Fifth Sun",
    strikedoffprice:"$29.99",
    price: "19",
    off:"+ $1.08 / 6% Cashback",
  },
]

displaydata(WomensTopData);
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
 var warr =  WomensTopData.filter(function(elm,i){
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
    
  var arr =  WomensTopData.filter(function(elm,i){
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
   var arr = WomensTopData.sort((a , b)=>{
    return Number(b.price) - Number( a.price) ;
    
    });
    console.log(arr);
    displaydata(arr);
  }
  if(selected ==="Price-Low-High"){
    var arr = WomensTopData.sort( (a, b)=>{
      return Number(a.price) - Number( b.price) ;
    });
    console.log(arr);
     displaydata(arr);
  }
  // console.log(cartdata);
 
 }