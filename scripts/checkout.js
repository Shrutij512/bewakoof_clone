var addArr = JSON.parse(localStorage.getItem("add-list")) || [];

console.log(addArr);

addArr.map(function(elem) {
    document.getElementById("name").textContent = elem.name;
    document.getElementById("address1").textContent = elem.flat + " , ";
    document.getElementById("address2").textContent = elem.city + " , " + elem.state + " , " + elem.pin;
})
var pay1 = document.getElementById("payType1");
var pay2 = document.getElementById("payType2");
var pay3 = document.getElementById("payType3");
var pay4 = document.getElementById("payType4");
var pay5 = document.getElementById("payType5");

var id1 = document.getElementById("id1");
var id2 = document.getElementById("id2");
var id3 = document.getElementById("id3");
var id4 = document.getElementById("id4");
var id5 = document.getElementById("id5");

id1.setAttribute("id", "pay1");
pay2.style.display = "none";
pay3.style.display = "none";
pay4.style.display = "none";
pay5.style.display = "none";

function func(payMethod) {
    if (payMethod === 1) {
        id1.setAttribute("id", "pay1");
        id2.setAttribute("id", "payOriginal");
        id3.setAttribute("id", "payOriginal");
        id4.setAttribute("id", "payOriginal");
        id5.setAttribute("id", "payOriginal");

        pay1.style.display = "block";
        pay2.style.display = "none";
        pay3.style.display = "none";
        pay4.style.display = "none";
        pay5.style.display = "none";
    } else if (payMethod === 2) {
        id2.setAttribute("id", "pay1");
        id1.setAttribute("id", "payOriginal");
        id3.setAttribute("id", "payOriginal");
        id4.setAttribute("id", "payOriginal");
        id5.setAttribute("id", "payOriginal");

        pay1.style.display = "none";
        pay2.style.display = "block";
        pay3.style.display = "none";
        pay4.style.display = "none";
        pay5.style.display = "none";
    } else if (payMethod === 3) {
        id3.setAttribute("id", "pay1");
        id2.setAttribute("id", "payOriginal");
        id1.setAttribute("id", "payOriginal");
        id4.setAttribute("id", "payOriginal");
        id5.setAttribute("id", "payOriginal");

        pay1.style.display = "none";
        pay2.style.display = "none";
        pay3.style.display = "block";
        pay4.style.display = "none";
        pay5.style.display = "none";
    } else if (payMethod === 4) {
        id4.setAttribute("id", "pay1");
        id2.setAttribute("id", "payOriginal");
        id3.setAttribute("id", "payOriginal");
        id1.setAttribute("id", "payOriginal");
        id5.setAttribute("id", "payOriginal");

        pay1.style.display = "none";
        pay2.style.display = "none";
        pay3.style.display = "none";
        pay4.style.display = "block";
        pay5.style.display = "none";
    } else {
        id5.setAttribute("id", "pay1");
        id2.setAttribute("id", "payOriginal");
        id3.setAttribute("id", "payOriginal");
        id4.setAttribute("id", "payOriginal");
        id1.setAttribute("id", "payOriginal");

        pay1.style.display = "none";
        pay4.style.display = "none";
        pay3.style.display = "none";
        pay2.style.display = "none";
        pay5.style.display = "block";
    }

}

function afterPay(i) {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.querySelectorAll(".buttonOnPay");;

    // When the user clicks the button, open the modal 
    btn[i].onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

var products = JSON.parse(localStorage.getItem("cartlist")) || [];

products.map(function(el) {
    var div = document.createElement("div");
    div.setAttribute("id", "prodInfo");

    var image = document.createElement("img");
    image.setAttribute("src", el.image)
    image.style.width = "36px";

    var insideDiv = document.createElement("div");

    var desc = document.createElement("p");

    desc.setAttribute("id", "desc");
    desc.textContent = el.product_info;

    var deliveryDate = document.createElement("p");
    deliveryDate.setAttribute("id", "date")
    var day = new Date();

    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 3);

    deliveryDate.textContent = "Estimated delivery by " + nextDay.toUTCString().slice(5, 16);
    insideDiv.append(desc, deliveryDate)
    div.append(image, insideDiv);
    document.getElementById("products").append(div);

})

const totalprice = products.reduce(function(a, b) {
    return a + Number(b.discounted_price);

}, 0)

document.getElementById("total-price").textContent = "₹ " + totalprice;

var mrp = products.reduce(function(acc, curr) {
    return acc + Number(curr.price);
}, 0);

document.getElementById("total-mrp").textContent = "₹ " + mrp;

var discount = mrp - totalprice;

document.getElementById("discount").textContent = "- ₹ " + discount;

var infoArr = JSON.parse(localStorage.getItem("userdetails")) || [];
console.log(infoArr)

document.getElementById("email").textContent = infoArr[0].email;