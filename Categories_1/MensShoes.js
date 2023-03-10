//------men's shoes-----
var MensShoes=[
  {
      id:1,
     quantity:1,
     image_url:
        "https://img.shop.com/Image/280000/282100/282141/products/1911627003.jpg?plain&size=400x400",
      name: "Nike Air Force 1 '07 White CW2288-111 Men's",
      merchant:"Sold by KixRx",
      strikedoffprice:"$191.00 ",
      price: "135",
      off:"+  $8.10 / 6% Cashback",
    },
  
    {
      id:2,
     quantity:1,
     image_url:
        "https://img.shop.com/Image/280000/282100/282141/products/1946861123.jpg?plain&size=400x400",
      name: "Nike Jordan Access Black/White-Red AR3762-001 Men's",
      merchant:"Sold by KixRx",
      strikedoffprice:"$192.00",
      price: "123",
      off:"+ $7.38 / 6% Cashback",
    },
  
    {
      id:3,
     quantity:1,
     image_url:
        "https://img.shop.com/Image/260000/260000/260090/products/1938552513.jpg?plain&size=400x400",
      name: "Puma Mirage Sport Tech 38310703 Mens Black Canvas Lifestyle Sneakers Shoes",
      merchant:"Sold by RuzeShoes",
      strikedoffprice:"$100.00 ",
      price: "51",
      off:"+ $1.04 / 2% Cashback",
    },
  
    {
      id:4,
     quantity:1,
     image_url:
        "https://img.shop.com/Image/270000/273200/273200/products/1952261274.jpg?plain&size=400x400",
      name: "U.S. Polo Assn. Mens Owen Padded Insole Round Toe Hiking Boots",
      merchant:"Sold by BHFO",
      strikedoffprice:"$120.00",
      price: "49",
      off:"+ $1.00 / 2% Cashback",
    },
  
    {
      id:5,
     quantity:1,
     image_url:
        "https://img.shop.com/Image/260000/260000/260090/products/1952524451.jpg?plain&size=400x400",
      name: "Lacoste Aceshot 0722 1 Sma Mens White Canvas Lifestyle Sneakers Shoes",
      merchant:"Sold by RuzeShoes",
      strikedoffprice:"$125.00",
      price: "87",
      off:"+ $1.76 / 2% Cashback",
    },
    {
      id:6,
     quantity:1,
     image_url:
        "https://img.shop.com/Image/260000/260000/260090/products/1952524451.jpg?plain&size=400x400",
      name: "Lacoste Aceshot 0722 1 Sma Mens White Canvas Lifestyle Sneakers Shoes",
      merchant:"Sold by RuzeShoes",
      strikedoffprice:"$125.00",
      price: "87",
      off:"+ $1.76 / 2% Cashback",
    },
  ]
  displaydata(MensShoes);
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
   var warr =  MensShoes.filter(function(elm,i){
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
      
    var arr =  MensShoes.filter(function(elm,i){
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
     var arr = MensShoes.sort((a , b)=>{
      return Number(b.price) - Number( a.price) ;
      
      });
      console.log(arr);
      displaydata(arr);
    }
    if(selected ==="Price-Low-High"){
      var arr = MensShoes.sort( (a, b)=>{
        return Number(a.price) - Number( b.price) ;
      });
      console.log(arr);
       displaydata(arr);
    }
    // console.log(cartdata);
   
   }