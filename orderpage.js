let cart_product_arr = JSON.parse(localStorage.getItem("order-list1"))||[];

showdata(cart_product_arr);

function showdata(mensData){
    document.querySelector(".cart-product").textContent = "";
    mensData.map(function(elem,index){
       // localStorage.setItem("order-list1",JSON.stringify(cart_product_arr)); 
        let div = document.createElement("div");
        div.setAttribute("class","product-box")
        div.innerHTML = 
        `<div id="sub-cart-product">
        <div id="cart-product-imgdiv"><img id="cart-product-img" src=${elem.img} alt="product"></div>
        <div class="product-detail">
        <h3 class="product-name">${elem.name}</h3>
        <h3 class="price" style="color:#243763; font-weight:bold;">$ ${elem.price}</h3>
        <div class="price-detail">
        <p style="font-weight: bold; font-size:15px;"> +  $2.10</p>
        <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="dollar sign">
                <p style="font-weight: bold; font-size:15px;">Cashback</p>
            </div>
            <p style="font-weight: bold; font-size:15px;">Item:  #190777978227</p>
            <p style="font-weight: bold; font-size:15px;">Sold by: ${elem.soldBy}</p>
            <p style="font-weight: bold; font-size:15px;">Category: ${elem.category}</p>
            <div id="quantity-div">
            <p style="font-weight: bold; font-size:15px;">Quantity : ${elem.quantity}</p>
            <p style="font-size: 13px;font-weight: bold;font-family: monospace;"> <span style="color:green;"> <img height="10px"; width="10px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lTJqE8DccHePCG4mD9XgSRQcKWjaGkH41w&usqp=CAU"> </img>  Status:</span> <span style="background:lightgrey"> In-Transit</span> <i class="fa-solid fa-truck-fast"></i> </p>
            <p style="font-size: 13px;font-weight: bold;font-family: monospace;"> <span style="color:#FFB100;">Delivered by:</span> <span>10 / 01 / 23</span></p>
            
            </div>
            </div>
            
            </div>
            `
            
            document.querySelector(".cart-product").append(div);
            
        })
        
    }
    //username
    document.querySelector("#user-name").textContent=JSON.parse(localStorage.getItem("userName"))||"Sign In"

    document.querySelector("#user").textContent="Thank you "+JSON.parse(localStorage.getItem("userName"))||"";