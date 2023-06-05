
var cart=JSON.parse(localStorage.getItem("cartlist")) ||[];
    console.log("cart",cart)

    let updateitems = document.getElementById("total-items-cart");
    updateitems.textContent=  "My Bag "+ cart.length+" item(s)" ;
      

   let discounted_price =cart.discounted_price;
   console.log(discounted_price);
//    displayCart();

   cart.map(function(item,i){
    const actualPrice= cart.reduce(function(a,b){
        return a + Number(b.price);

    },0)
    let Total_MRP =document.querySelector(".total_calculate_price")
    Total_MRP .textContent= '₹'+actualPrice
    console.log(actualPrice)




   const totalprice= cart.reduce(function(a,b){
        return a + Number(b.discounted_price);

    },0)

  let total=  document.querySelector(".Grand-total-pay")
  total.textContent = '₹ '+totalprice

    console.log(item.discounted_price)

    var subtotal=document.querySelector(".Subtotal");
    subtotal.textContent='₹'+totalprice;

    const cactualprice = actualPrice;
    const ctotalprice = totalprice;
   const cbag_discount=(cactualprice-ctotalprice)

  
    let    bag_discount=  document.querySelector(".bag-discount")
    bag_discount.textContent = "- "+'₹'+cbag_discount

    let saving=  document.querySelector("#saving")
    saving.textContent = " You are saving "+' ₹ '+cbag_discount+" on this order "



//     let img = document.createElement("img");
//   img.src = item.image;
//   img.style.maxHeight = "90%";
//   img.style.width = "auto%";

// document.getElementById("cart-img").appendChild(img)

   })

//    cart.map(function(item){

//     document.getElementById("remove-wishlist").addEventListener("click",removeFn);

// function removeFn(item,i){
    

//     cart.splice(i,1);
//     localStorage.setItem("wishlist",JSON.stringify(cart));

//      displayCart(cart);
//    }
//    })


   if(cart.length==0)
{
  // window.location.href = "Empty_cart.html"
}
  display();

  function display(){
    cart.map(function(item,index){
    
        var div=document.createElement("div");
    div.classList.add("wishlist_box");
    
    
    
    var pname=document.createElement("p");
    pname.setAttribute("id","pname");
    pname.textContent=item.product_info;

    var price=document.createElement("p");
    price.setAttribute("id","price");
    price.textContent="₹ "+item.discounted_price;

    var mrp = document.createElement("p");
    mrp.setAttribute("id", "mrp");
    mrp.textContent = "₹" + item.price;

    var price_box = document.createElement("div");
    price_box.setAttribute("id", "price_box");
    price_box.append(price, mrp);

    var img_div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.setAttribute("id", "img_div");
    // image.style.width="80px";
    img_div.append(image);

    
    var save = document.createElement("p");
    save.style.color = "green";
    save.style.marginTop="5px"
    save.textContent = "You saved ₹" + (item.price-item.discounted_price) + "!";
    console.log(save);
    

    frag = document.createDocumentFragment()
    select = document.createElement("select")
    select.setAttribute("id","quant")

    select.options.add(new Option("1", "1"));
    select.options.add(new Option("2", "2"));
    select.options.add(new Option("3", "3"));
    select.options.add(new Option("4", "4"));
    select.options.add(new Option("5", "5"));
    select.options.add(new Option("6", "6"));

    frag.appendChild(select);
    


     var del = document.createElement("button");
    del.setAttribute("id","remove_btn")
    del.textContent = "Remove";
    del.addEventListener("click",function()
    {
      delete_item(item,index);
    })
    

    var discribe = document.createElement("div");
    discribe.setAttribute("id", "discribe");
    discribe.append(pname, price_box, save, frag,del);

    var par = document.createElement("div");
    par.setAttribute("id", "par");
    par.append(discribe, img_div);


    
    document.querySelector("#product-item").append(par);


    })
}

function delete_item(item,index){
    cart.splice(index,1);
    localStorage.setItem("cartlist", JSON.stringify(cart));
    location.reload();
}
