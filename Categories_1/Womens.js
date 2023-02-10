
var womensData = [
  {
    id:1,
   quantity:1,
   image_url:
      "https://img.shop.com/Image/270000/273200/273200/products/1927824978.jpg?plain&size=400x400",
    name: "Joie Womens Huntlie Summer Short Mini Dress",
    merchant:"Sold by BHFO",
    strikedoffprice:" $149.99",
    price: "44",
    category:"Dresses",
    off:"+ $1.05 / 2% Cashback",
  },
  {
    id:2,
  quantity:1,
  image_url:"https://img.shop.com/Image/280000/288000/288080/products/1928075214.jpg?plain&size=400x400",
  name: "Sleeveless Tiered Midi Dress - Black For Summer Wear",
  merchant:"Sold by Not Just Leggings",
  strikedoffprice:"$34.50",
  price:"37",
  category:"Dresses",
  off:"+up to $3.00 / 8% Cashback",
  },
  {
    id:3,
  quantity:1,
  image_url:"https://img.shop.com/Image/270000/278100/278132/products/1958137974.jpg?plain&size=400x400",
  name: "ADRIANNA PAPELL Womens Navy Pleated Zippered Short Sleeve Off",
  merchant:"Sold by BOBBI + BRICKA",
  strikedoffprice: "$129.00" ,
  price:  "50" ,
  category:"Dresses",
  off:"+ $1.52 / 3% Cashback",
  },

  {
    id:4,
  quantity:1,
  image_url:"https://img.shop.com/Image/270000/273200/273200/products/1956765535.jpg?plain&size=400x400",
  name: "Steve Madden Womens Faux Leather Mini Wrap Dr",
  merchant:"Sold by BHFO",
  strikedoffprice: "$99.00 ," ,
  price: "44"  ,
  category:"Dresses",
  off:"+$0.89 / 2% Cashback ",
  },

  {
    id:5,
  quantity:1,
  image_url:"https://img.shop.com/Image/270000/273200/273200/products/1950976189.jpg?plain&size=400x400",
  name: "Karl Lagerfeld Paris Womens Chiffon Bishop Sleeve Maxi Dress",
  merchant:"Sold by BHFO",
  strikedoffprice: "$158.00" ,
  price: " 95" ,
  category:"Dresses",
  off:"+  up to $0.82 / 2% Cashback",
  },
  {
    id:6,
  quantity:1,
  image_url:"https://img.shop.com/Image/280000/288000/288080/products/1894373585.jpg?plain&size=400x400",
  name: "Ellie - Pink Leopard Fashion Dresses & Skirts",
  merchant:"Sold by NotJustLeggings",
  strikedoffprice: "$32.00" ,
  price:  "25" ,
  category:"Dresses",
  off:"+$2.56 / 8% Cashback ",
  },
 
  {
    id:7,
  quantity:1,
  image_url:"https://img.shop.com/Image/270000/273200/273200/products/1951791655.jpg?plain&size=400x400",
  name:"Sea Womens Heidi Cotton Long Midi Dress",
  merchant:"Sold by BHFO",
  strikedoffprice:"$395.00"  ,
  price: "250"  ,
  category:"Dresses",
  off:"+ up to $2.60 / 2% Cashback",
  },
  {
    id:8,
  quantity:1,
  image_url:"https://img.shop.com/Image/270000/273200/273200/products/1934205247.jpg?plain&size=400x400",
  name: "Lost + Wander Womens Seaside Breeze Summer Short Mini Dress",
  merchant:"Sold by BHFO",
  strikedoffprice: "$108.00" ,
  price:  "59" ,
  category:"Dresses",
  off:"+ Sold by BHFO",
  },
  {
    id:9,
  quantity:1,
  image_url:"https://img.shop.com/Image/270000/278100/278132/products/1958175069.jpg?plain&size=400x400",
  name: "CALVIN KLEIN Womens Black Floral Sleeveless Jewel Neck Knee Length Dress",
  merchant:"Sold by BOBBI + BRICKA",
  strikedoffprice: "$159.00 " ,
  price:  "78" ,
  category:"Dresses",
  off:"+ $2.37 / 3% Cashback",
  },
  {
    id:10,
  quantity:1,
  image_url:"https://img.shop.com/Image/270000/278100/278132/products/1958170535.jpg?plain&size=400x400",
 
  name: "MORGAN & CO WOMENS BLUE PLEATED GLITTER SLEEVE DRESS",
 logo_cart: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
  merchant:"Sold by BOBBI + BRICKA",

  strikedoffprice: "$169.00 " ,
  price:  "62" ,
  category:"Dresses",
  off:"+  $1.89 / 3% Cashback",
  },

  
  
 ];



  displaydata(womensData);

  function displaydata(array){

      document.getElementById("dusraDiv").innerHTML="";
    array.map(function(elm,index){
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
       
        var category =document.createElement("p");
        category.textContent = elm.category;
        
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
    swal("Added To Cart");
   var warr =  womensData.filter(function(elm,i){
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
  const showDetails = (index)=>{
    
    var arr =  womensData.filter(function(elm,i){
        return i===index;
     
       })

    localStorage.setItem('detail',JSON.stringify(arr));
    window.location.href = 'details.html'}
  
  function handlePriceSort(){ 
    console.log("hii");
    var selected = document.getElementById("filterBestMatch").value;
   console.log(selected);
    if(selected ==="Price-High-Low"){
      console.log("hii2");
     var arr = womensData.sort((a , b)=>{
      return Number(b.price) - Number( a.price) ;
      
      });
      console.log(arr);
      displaydata(arr);
    }
    if(selected ==="Price-Low-High"){
      var arr = womensData.sort( (a, b)=>{
        return Number(a.price) - Number( b.price) ;
      });
      console.log(arr);
       displaydata(arr);
    }
    // console.log(cartdata);
   
   }