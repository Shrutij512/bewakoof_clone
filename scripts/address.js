document.querySelector("#form").addEventListener("submit", getDetails);

var addressArr = JSON.parse(localStorage.getItem("add-list")) || [];

function getDetails() {
    event.preventDefault();

    var name = document.getElementById("fullName").value;
    var mobile = document.getElementById("mobileNum").value;
    var flat = document.getElementById("flatNo").value;
    var area = document.getElementById("area").value;
    var city = document.getElementById("City").value;
    var state = document.getElementById("State").value;
    var pin = document.getElementById("pincode").value;
    var landmark = document.getElementById("landmark").value;

    var addObj = {
        name: name,
        mobile: mobile,
        flat: flat,
        area: area,
        city: city,
        state: state,
        pin: pin,
    };
    console.log(addObj);
    addressArr.push(addObj);
    localStorage.setItem("add-list", JSON.stringify(addressArr));
}