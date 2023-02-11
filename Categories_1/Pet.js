var petProd =[

   {
        id:1,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/240000/243300/243385/products/559052312.jpg?plain&size=750x750",
        name: "Pet Health OPC Formula for Cats & Dogs with Glucosamine",
        merchant:"Sold by Pet Health",
        strikedoffprice:"$30.00",
        price: "24",
        off:"+ $0.05 / 2% Cashback",
      },
      {
        id:2,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/240000/243300/243385/products/1943471621.jpg?plain&size=750x750",
        name: "Pet Health CBD Formula for Cats & Dogs Pet Tincture",
        merchant:"Sold by Pet Health",
        strikedoffprice:"$30.00",
        price: "27",
        off:"+ $0.05 / 2% Cashback",
      },
    
     {
     quantity:3,
       image_url:
          "https://img.shop.com/Image/260000/263300/263383/products/1937747356.jpg?plain&size=400x400",
        name: "Iams Proactive Health 7 Lb. Chicken Flavor Adult Dry Cat Food Pack of 4",
        merchant:"Sold by Sim Supply",
        strikedoffprice:"$133.41",
        price: "120",
        off:"+ $6.27 / 5% Cashback",
      },
      {
        id:4,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/270000/273400/273475/products/1903177280.jpg?plain&size=400x400",
        name: "Blue Buffalo KHCH00345118 16 oz Health Bars Baked with Apples & Yogurt Crunchy Dog Biscuits",
        merchant:"Sold by AllGourmetFood",
        strikedoffprice:"$16.47",
        price: "9",
        off:"+ $0.27 / 3% Cashback",
      },
      {
        id:5,
       quantity:1,
       image_url:
          "https://img.shop.com/Image/290000/291400/291462/products/1929945204.jpg?plain&size=400x400",
        name: "Blue Buffalo Tastefuls Flaked Tuna Chicken & Shrimp Entrees In Gravy Premium Wet Cat Food - 3oz/12ct",
        merchant:"Sold by SHOP Groceries Basics",
        strikedoffprice:"$30.47",
        price: "22",
        off:"+ $0.27 / 3% Cashback",
      },
]

displaydata(petProd);
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
 var warr = petProd.filter(function(elm,i){
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



}
//------------------------------------------

//see details
const showDetails = (index)=>{
    
  var arr =  petProd.filter(function(elm,i){
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
   var arr = petProd.sort((a , b)=>{
    return Number(b.price) - Number( a.price) ;
    
    });
    console.log(arr);
    displaydata(arr);
  }
  if(selected ==="Price-Low-High"){
    var arr = petProd.sort( (a, b)=>{
      return Number(a.price) - Number( b.price) ;
    });
    console.log(arr);
     displaydata(arr);
  }
  // console.log(cartdata);
 
 }