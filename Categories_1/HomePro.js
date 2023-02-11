

var HomePro =[

    {
        id:1,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/250000/251800/251872/products/1683279489.jpg?plain&size=400x400",
        name: "Kenroy Home 51037SL Orb Floor Fountain",
        merchant:"Sold by UnbeatableSale",
        strikedoffprice:"$456.30",
        price: "351",
        off:"+ $1.08 / 6% Cashback",
      },
      {
        id:1,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/240000/248000/248061/products/1919932230.jpg?plain&size=400x400",
        name:" Metallic Silver Oval Cut-Out Vase",
        merchant:"Sold by Christmas Central",
        strikedoffprice:"$74.24",
        price: "58",
        off:"+ $2.32 / 4% Cashback",
      },
      {
        id:1,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/280000/287800/287812/products/1950367371.jpg?plain&size=400x400",
        name: "Zulay Kitchen Portable Blenders For Shakes And Smoothies",
        merchant:"Sold by Zulay Kitchen",
        strikedoffprice:"$27.99",
        price: "20",
        off:"+ $1.23 / 6% Cashback",
      },
      {
        id:1,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/270000/273400/273475/products/1806609030.jpg?plain&size=400x400",
        name: "Range Kleen TN181G 15 x 10 in. & 17 x 11 in. Taste of Home Non-Stick Metal Baking Sheet Set - 2 Piece",
        merchant:"Sold by AllGourmetFood",
        strikedoffprice:"$42.81",
        price: "32",
        off:"+ $0.99 / 3% Cashback",
      },
      {
        id:1,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/280000/289300/289379/products/1907689716.jpg?plain&size=400x400",
        name: "3Pcs Stretch Sofa Cover Solid Color All Inclusive Thickened Non Slip Protective Cover",
        merchant:"Sold by Genkent",
        strikedoffprice:"$42.81",
        price: "29",
        off:"+ $0.99 / 3% Cashback",
      },
      {
        id:1,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/280000/284400/284458/products/1885955006.jpg?plain&size=1200x1200",
        name: "2PCS Nightstand End Beside Table Drawers Modern Storage Bedroom Furniture White",
        merchant:"Sold by COSTWAY",
        strikedoffprice:"$359.99",
        price: "188",
        off:"+ $11.34 / 6% Cashback",
      },
]

displaydata(HomePro);
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
 var warr = HomePro.filter(function(elm,i){
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



//------------------------------------------
//see details
const showDetails = (index)=>{
    
  var arr =  HomePro.filter(function(elm,i){
      return i===index;
     })
  localStorage.setItem('detail',JSON.stringify(arr));
  window.location.href = '../details.html'
    }


// filter best match 
function handlePriceSort(){ 
  // console.log("hii");
  var selected = document.getElementById("filterBestMatch").value;
 console.log(selected);
  if(selected ==="Price-High-Low"){
    console.log("hii2")
   var arr = HomePro.sort((a , b)=>{
    return Number(b.price) - Number( a.price) ;
    
    });
    console.log(arr);
    displaydata(arr);
  }
  if(selected ==="Price-Low-High"){
    var arr = HomePro.sort( (a, b)=>{
      return Number(a.price) - Number( b.price) ;
    });
    console.log(arr);
     displaydata(arr);
  }
  // console.log(cartdata);
 
 }