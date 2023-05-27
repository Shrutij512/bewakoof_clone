var addArr = JSON.parse(localStorage.getItem("add-list")) || [];

console.log(addArr);

addArr.map(function(elem) {
    document.getElementById("name").textContent = elem.name;
    document.getElementById("address1").textContent = elem.flat + " , ";
    document.getElementById("address2").textContent = elem.city + " , " + elem.state + " , " + elem.pin;
})

document.getElementById("btn").addEventListener("onclick", function() {
    console.log("button click");
});