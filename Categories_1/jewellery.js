var jewellery = [
    //-----jewellery----

  {
    id:1,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/280000/282000/282022/products/1881405527.jpg?plain&size=750x750",
    name: "ANGIE - Eternity Band",
    merchant:"Sold by Layered",
    strikedoffprice:"$55.00",
    price: "47",
    category:"jewellery",
    off:"+ $0.05 / 5% Cashback",
  },
  {
    id:2,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/280000/282000/282022/products/1913294737.jpg?plain&size=750x750",
    name: "JADE - Solitaire Paperclip Necklace",
    merchant:"Sold by Layered",
    strikedoffprice:"$155.00",
    price: "109",
    category:"jewellery",
    off:"+ $0.05 / 5% Cashback",
  },
  {
    id:3,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/280000/282000/282022/products/1954593896.jpg?plain&size=750x750",
    name: "EVA Convertible Link Drop Earrings",
    merchant:"Sold by Layered",
    strikedoffprice:"$95.00",
    price: "49",
    category:"jewellery",
    off:"+ $0.05 / 5% Cashback",
  },
  {
    id:4,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/280000/282000/282022/products/1881405570.jpg?plain&size=750x750",
    name: "DESI - Pierced Round Cut Bracelet",
    merchant:"Sold by Layered",
    strikedoffprice:"$95.00",
    price: "59",
    category:"jewellery",
    off:"+ $0.05 / 5% Cashback",
  },
  {
    id:5,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/280000/282000/282022/products/1954593918.jpg?plain&size=750x750",
    name: "GENEVIEVE - Dual Stone Ring",
    merchant:"Sold by Layered",
    strikedoffprice:"$55.00",
    price: "39",
    category:"jewellery",
    off:"+ $0.05 / 5% Cashback",
  },
  {
    id:6,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/280000/282000/282022/products/1902671837.jpg?plain&size=750x750",
    name: "GRACE - Baguette Huggie Earrings ",
    merchant:"Sold by Layered",
    strikedoffprice:"$50.00",
    price: "31",
    category:"jewellery",
    off:"+ $0.05 / 5% Cashback",
  },
]

displaydata(jewellery);
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

      var category = document.createElement("p");
      category.textContent=elm.category;

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
      div.append(img,name,logo_cart_span , merchant , pricebox , off,category,buttonBox);

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
 var warr = jewellery.filter(function(elm,i){
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
const showDetails = (index)=>{
    
    var arr =  jewellery.filter(function(elm,i){
        return i===index;
     
       })

    localStorage.setItem('detail',JSON.stringify(arr));
    window.location.href = '../details.html'}

// filter best match 
function handlePriceSort(){ 
  // console.log("hii");
  var selected = document.getElementById("filterBestMatch").value;
 console.log(selected);
  if(selected ==="Price-High-Low"){
    console.log("hii2")
   var arr = jewellery.sort((a , b)=>{
    return Number(b.price) - Number( a.price) ;
    
    });
    console.log(arr);
    displaydata(arr);
  }
  if(selected ==="Price-Low-High"){
    var arr = jewellery.sort( (a, b)=>{
      return Number(a.price) - Number( b.price) ;
    });
    console.log(arr);
     displaydata(arr);
  }
  // console.log(cartdata);
 
 }