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

pay2.style.display = "none";
pay3.style.display = "none";
pay4.style.display = "none";
pay5.style.display = "none";

function func(payMethod) {
    if (payMethod === 1) {
        pay1.style.display = "block";
        pay2.style.display = "none";
        pay3.style.display = "none";
        pay4.style.display = "none";
        pay5.style.display = "none";
    } else if (payMethod === 2) {
        pay1.style.display = "none";
        pay2.style.display = "block";
        pay3.style.display = "none";
        pay4.style.display = "none";
        pay5.style.display = "none";
    } else if (payMethod === 3) {
        pay1.style.display = "none";
        pay2.style.display = "none";
        pay3.style.display = "block";
        pay4.style.display = "none";
        pay5.style.display = "none";
    } else if (payMethod === 4) {
        pay1.style.display = "none";
        pay2.style.display = "none";
        pay3.style.display = "none";
        pay4.style.display = "block";
        pay5.style.display = "none";
    } else {
        pay1.style.display = "none";
        pay4.style.display = "none";
        pay3.style.display = "none";
        pay2.style.display = "none";
        pay5.style.display = "block";
    }

}