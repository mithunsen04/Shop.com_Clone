var WomensJeansData=[
    {
    id:1,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/290000/292000/292019/products/1932758894.jpg?plain&size=400x400",
    name: "Cowgirl Tuff Western Jeans Womens DFMI Flannel Bootcut Med JFLANL",
    merchant:"Sold by Ranch & Home",
    strikedoffprice:" $84.98",
    price: 84,
    off:"+ $5.10 / 6% Cashback",
  },
  {
    id:2,
   quantity:1,
   image_url:"https://img.shop.com/Image/270000/273200/273200/products/1920273986.jpg?plain&size=400x400",
    name: "Gray Zippered Pocketed Rolled Hem Boyfriend High Waist Jeans ",
    merchant:"Sold by BOBBI + BRICKA",
    strikedoffprice:" $198.00",
    price: 75,
    off:"+ $2.28 / 3% Cashback",
  },

  {
    id:3,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1891099493.jpg?plain&size=1600x1600",
    name: "Just Black Womens Button Fly Frayed Hem Skinny Jeans",
    merchant:"Sold by BHFO",
    strikedoffprice:" $88.00",
    price: "12",
    off:"+ up to $0.26 / 2% Cashback",
  },

  {
    id:4,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1920273899.jpg?plain&size=400x400",
    name: "Mavi Womens Ada Denim Distressed Boyfriend Jeans",
    merchant:"Sold by BHFO",
    strikedoffprice:" $118.00",
    price: "44",
    off:"+ up to $0.30 / 2% Cashback",
  },

  {
    id:5,
   quantity:1,
   image_url: "https://img.shop.com/Image/240000/245300/245346/products/1900553453.jpg?plain&size=400x400",
    name: "ASOS DESIGN 'Sculpt me' premium jeans in black coated",
    merchant:"Sold by ASOS",
    strikedoffprice:"$60.00 ",
    price: "18",
    off:"+ up to $0.30 / 2% Cashback",
  },
  {
    id:6,
   quantity:1,
   image_url: "https://img.shop.com/Image/270000/278100/278132/products/1958223173.jpg?plain&size=400x400",
    name: "Mavi Womens Ada Mid Rise Distressed Boyfriend Jeans",
    merchant:"Sold by ASOS",
    strikedoffprice:"$118.00 ",
    price: "9",
    off:"+ up to $0.30 / 2% Cashback",
  },
]

displaydata(WomensJeansData);

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
//   console.log(cartdata);
//   localStorage.setItem("cart",JSON.stringify(cartdata));
// }
cartdata.push(warr[0]);
    let count = cartdata.length ;
    console.log(count)
    document.querySelector('.cart-count').innerText = count ;

    
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

function feedbackgiven(){
  swal("Thank You!", "For Your FeedBack","success");
}



//see details
const showDetails = (index)=>{
    
  var arr =  WomensJeansData.filter(function(elm,i){
      return i===index;
     })
  localStorage.setItem('detail',JSON.stringify(arr));
  window.location.href = '../details.html'
    }

// filter best match 
function handlePriceSort(){ 
  console.log("hii");
  var selected = document.getElementById("filterBestMatch").value;
 console.log(selected);
  if(selected ==="Price-High-Low"){
    console.log("hii2")
   var arr = WomensJeansData.sort((a , b)=>{
    return Number(b.price) - Number( a.price) ;
    
    });
    console.log(arr);
    displaydata(arr);
  }
  if(selected ==="Price-Low-High"){
    var arr = WomensJeansData.sort( (a, b)=>{
      return Number(a.price) - Number( b.price) ;
    });
    console.log(arr);
     displaydata(arr);
  }
  // console.log(cartdata);
 
 }
