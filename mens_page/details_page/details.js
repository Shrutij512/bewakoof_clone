var element=JSON.parse(localStorage.getItem("open_product"))
    console.log(element);

var prodThumbs=document.querySelector("thumbContainer");



var img=document.createElement("img");
img.setAttribute("src",element.image_url);
img.setAttribute("alt",element.product_info);
img.setAttribute("class","ff")
document.getElementById("prImg").append(img);

var img1=document.createElement("img");
img1.setAttribute("src",element.image1_url);
img1.setAttribute("alt",element.product_info);
img1.setAttribute("class","ff")
document.getElementById("prImg1").append(img1);

var img2=document.createElement("img");
img2.setAttribute("src",element.image2_url);
img2.setAttribute("alt",element.product_info);
img2.setAttribute("class","ff")
document.getElementById("prImg2").append(img2);

var img3=document.createElement("img");
img3.setAttribute("src",element.image3_url);
img3.setAttribute("alt",element.product_info);
img3.setAttribute("class","ff")
document.getElementById("prImg3").append(img3);

var img4=document.createElement("img");
img4.setAttribute("src",element.image4_url);
img4.setAttribute("alt",element.product_info);
img4.setAttribute("class","ff")
document.getElementById("prImg4").append(img4);

var img5=document.createElement("img");
img5.setAttribute("src",element.image5_url);
img5.setAttribute("alt",element.product_info);
img5.setAttribute("class","ff")
document.getElementById("prImg5").append(img5);

var img6=document.createElement("img");
img6.setAttribute("src",element.image6_url);
img6.setAttribute("alt",element.product_info);
img6.setAttribute("class","ff")
document.getElementById("prImg6").append(img6);

document.querySelectorAll("ff").addEventListener("click",function(){
    var i=document.getElementById("ff");
    document.getElementById("fullImage").append(i);;
});



var pInfo=document.createElement("div");

var mName=document.createElement("h2");
mName.textContent=element.registered;
var i1=document.createElement("i");
i1.setAttribute("class","fa-sharp fa-regular fa-registered")
mName.append(i1);
mName.setAttribute("class","mName");

var pName=document.createElement("h3");
pName.textContent=element.product_info;

var rt=document.createElement("div");
rt.textContent=element.rating;
var i2=document.createElement("i");
i2.setAttribute("class","fa-sharp fa-solid fa-star")
i2.style.color="#f3eb16"
rt.append(i2);

pInfo.append(mName,pName,rt)

document.getElementById("InfoContainer").append(pInfo);


