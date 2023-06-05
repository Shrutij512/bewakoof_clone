var element=JSON.parse(localStorage.getItem("open_product"))
    console.log(element);

var prodThumbs=document.querySelector("thumbContainer");

let vishalImg=document.createElement('img');
vishalImg.src=element.image_url;
document.getElementById('fullImage').append(vishalImg)
vishalImg.style.width="100%"

var img=document.createElement("img");
img.setAttribute("src",element.image_url);
img.setAttribute("alt",element.product_info);
img.setAttribute("class","ff")
document.getElementById("prImg").append(img);
img.style.width="100%"
img.addEventListener('click', function(){
    document.getElementById('fullImage').innerHTML=''
    vishalImg.src=element.image_url;
    document.getElementById('fullImage').append(vishalImg)
})

var img1=document.createElement("img");
img1.setAttribute("src",element.image1_url);
img1.setAttribute("alt",element.product_info);
img1.setAttribute("class","ff")
document.getElementById("prImg1").append(img1);
img1.style.width="100%"
img1.addEventListener('click', function(){
    document.getElementById('fullImage').innerHTML=''
    vishalImg.src=element.image1_url 
    document.getElementById('fullImage').append(vishalImg)
})

var img2=document.createElement("img");
img2.setAttribute("src",element.image2_url);
img2.setAttribute("alt",element.product_info);
img2.setAttribute("class","ff")
document.getElementById("prImg2").append(img2);
img2.style.width="100%"
img2.addEventListener('click', function(){
    document.getElementById('fullImage').innerHTML=''
    vishalImg.src=element.image2_url
    document.getElementById('fullImage').append(vishalImg)
})

var img3=document.createElement("img");
img3.setAttribute("src",element.image3_url);
img3.setAttribute("alt",element.product_info);
img3.setAttribute("class","ff")
document.getElementById("prImg3").append(img3);
img3.style.width="100%"
img3.addEventListener('click', function(){
    document.getElementById('fullImage').innerHTML=''
    vishalImg.src=element.image3_url
    document.getElementById('fullImage').append(vishalImg)
})

var img4=document.createElement("img");
img4.setAttribute("src",element.image4_url);
img4.setAttribute("alt",element.product_info);
img4.setAttribute("class","ff")
document.getElementById("prImg4").append(img4);
img4.addEventListener('click', function(){
    document.getElementById('fullImage').innerHTML=''
    vishalImg.src=element.image4_url
    document.getElementById('fullImage').append(vishalImg)
})

var img5=document.createElement("img");
img5.setAttribute("src",element.image5_url);
img5.setAttribute("alt",element.product_info);
img5.setAttribute("class","ff")
document.getElementById("prImg5").append(img5);
img5.addEventListener('click', function(){
    document.getElementById('fullImage').innerHTML=''
    vishalImg.src=element.image5_url;
    document.getElementById('fullImage').append(vishalImg)
})

var img6=document.createElement("img");
img6.setAttribute("src",element.image6_url);
img6.setAttribute("alt",element.product_info);
img6.setAttribute("class","ff")
document.getElementById("prImg6").append(img6);
img6.addEventListener('click', function(){
    document.getElementById('fullImage').innerHTML=''
    vishalImg.src=element.image6_url;
    document.getElementById('fullImage').append(vishalImg)
})

var names=document.getElementById("names");
var reg=document.createElement("h2");
reg.textContent=element.registered;
reg.style.fontSize="18px"

var i1=document.createElement("i");//appended to h2
        i1.setAttribute("class","fa-sharp fa-regular fa-registered")
        i1.style.color="#737373";
        i1.style.fontSize="15px"
        reg.append(i1);

////////////////////////////////////////////////////////////////////
var pName=document.createElement("h3")
pName.textContent=element.product_info;
pName.setAttribute("class","pName")

var rat=document.createElement("div")
var i2=document.createElement("i");
i2.setAttribute("class","fa-sharp fa-solid fa-star")
i2.style.color="#f3eb16";
i2.style.fontSize="12px"
rat.setAttribute("class","rat")
rat.append(element.rating,i2);
names.append(reg,pName,rat); 
/////////////////////////////////////////////////////////////////////

var prices=document.getElementById("prices");

var d0=document.createElement("div");
d0.setAttribute("class","d0");


var rtg=document.createElement("h4");
rtg.textContent="₹ "+element.discounted_price;

// var dp=document.createElement("h2");
// dp.textContent=element.discounted_price;

var op=document.createElement("h3");
op.textContent="₹ "
op.append(element.price);
op.style.color="#949494"
op.style.textDecoration="line-through"
op.style.fontWeight="500"
var disPercent=document.createElement("h3");


disPercent.textContent= ((+element.discounted_price/+element.price)*100).toFixed(2) + "% OFF";
disPercent.style.color="#00b852"

d0.append(rtg,op,disPercent);

prices.append(d0);

var b=document.querySelector("b")
var mb= (+element.discounted_price) - +element.members_price;
b.append(mb);

var bt1=document.querySelector(".btn1");
       
bt1.addEventListener("click",carting())

        
function carting(){
    var i2=document.querySelector(".fa-cart-plus")
    i2.style.color="white"
    i2.style.fontSize="x-large"
    
    const cart=JSON.parse(localStorage.getItem("cartlist")) ||[];            

    var cartobj={
        image:element.image_url,
        product_info:element.product_info,
        price:element.price,
        discounted_price:element.discounted_price,
        members_price:element.members_price,
    }

    console.log(cartobj)           
        cart.push( cartobj)
        
    localStorage.setItem("cartlist",JSON.stringify(cart));
}




