var KidsData=[
    
   
{
    id:1,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/240000/243400/243406/products/1861296921.jpg?plain&size=400x400",
    name: "Popatu Big Girls Ruffle Dress",
    merchant:"Sold by Macy's",
    
    price: "30",
    off:"+ $0.60 / 2% Cashback",
  },
  
  {
    id:2,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/290000/290600/290680/products/1938306791.png?plain&size=400x400",
    name: "Bonnie Jean Girl's Sailor Nautical Back-Bow Sleeveless Dress",
    merchant:"Sold by eWirelessGear",
    strikedoffprice:"$31.00",
    price: "14",
    off:"+ $1.09 / 6% Cashback",
  },
  
  {
    id:3,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/260000/264900/264928/products/1918521953.jpg?plain&size=400x400",
    name: "Bonnie Jean Little Girls Striped Bow Dress (3T, Multi)",
    merchant:"Sold by Rennde",
    strikedoffprice:"$24.00",
    price:"12",
    off:"+ $0.33 / 3% Cashback",
  },
  
  {
    id:4,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/240000/243400/243406/products/1941548354.jpg?plain&size=400x400",
    name: "Little Boys Letterman Bomber Jacket",
    merchant:"Sold by Macy's",
    strikedoffprice:"$90.00",
    price: "69",
    off:"+ $1.40 / 2% Cashback",
  },
  
  {
    id:5,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/240000/243400/243406/products/1947900015.jpg?plain&size=400x400",
    name: "Big Boys Vortex Triclimate Fleece Jacket",
    merchant:"Sold by Macy's",
    strikedoffprice:"$110.00",
    price: "97",
    off:"+ $1.94 / 2% Cashback",
  },
  
  {
    id:6,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/260000/268500/268595/products/1949484182.jpg?plain&size=400x400",
    name: "Boys adidas Camo AOP Puffer Jacket, Boy's, Size: Large, White",
    merchant:"Sold by Kohl's",
    strikedoffprice:"$59.00",
    price: "36",
    off:"+ $1.94 / 2% Cashback",
  },
  
  {
    id:1,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/274900/274929/products/1890159590.jpg?plain&size=400x400",
    name: "Jaclyn Magazine Stripe Family Sleep Toddler Unisex 2-pc. Pajama Set, 3t , Blue",
    merchant:"Sold by JCPenney",
    strikedoffprice:"$20.00",
    price: "9",
    off:"+ $0.14 / 2% Cashback",
  },
  
  {
    id:1,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/274900/274929/products/1890159571.jpg?plain&size=400x400",
    name: "Jaclyn Camo Family Sleepwear Toddler Unisex 2-pc. Pajama Set, 4t , Green",
    merchant:"Sold by JCPenney",
    strikedoffprice:"$13.00",
    price: "9",
    off:"+ $0.14 / 2% Cashback",
  },
]

displaydata(KidsData);

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
      off.setAttribute("class","off")
      see_details.setAttribute("class","see_details");
      btncart.setAttribute("class" , "btncart");

      btncart.addEventListener("click" , function(){
        addtocart(index)
      })

      see_details.addEventListener("click" , function(){
        showDetails(index)
      })
     logo_cart_span.append(logo_cart);

      div.setAttribute("class","dusradiv");
      buttonBox.append(see_details,btncart);
      pricebox.append(strikedoffprice,price);
      div.append(img,name,logo_cart_span , merchant , pricebox , off,buttonBox);

      document.getElementById("dusraDiv").append(div);
  })
}

// cart
var cartdata = JSON.parse(localStorage.getItem("cart")) || [];
function addtocart(index){
  swal("Good Job!", "Item added in the Cart!");
 var warr =  WomensJeansData.filter(function(elm,i){
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
    
  var arr =  KidsData.filter(function(elm,i){
      return i===index;
     })
  localStorage.setItem('detail',JSON.stringify(arr));
  window.location.href = 'details.html'
    }


function feedbackgiven(){
  swal("Thank You!", "For Your FeedBack","success");
}

function handlePriceSort(){ 
  console.log("hii");
  var selected = document.getElementById("filterBestMatch").value;
 console.log(selected);
  if(selected ==="Price-High-Low"){
    console.log("hii2")
   var arr = KidsData.sort((a , b)=>{
    return Number(b.price) - Number( a.price) ;
    
    });
    console.log(arr);
    displaydata(arr);
  }
  if(selected ==="Price-Low-High"){
    var arr = KidsData.sort( (a, b)=>{
      return Number(a.price) - Number( b.price) ;
    });
    console.log(arr);
     displaydata(arr);
  }
  // console.log(cartdata);
 
 }
