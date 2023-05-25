
let loadVal = JSON.parse(localStorage.getItem("userdetails"))
let noarr = JSON.parse(localStorage.getItem("phone_no")) || [];
document.querySelector("#cont_btn").addEventListener("click", myfunction);
function myfunction() {

    let no = document.getElementById("input_for_no").value;

    if (no == "") {
        document.getElementById("phone_no").style.border = "1px solid red"
        document.getElementById("show_wrong_p").innerText = "Mobile Number is required"
    }
    else {

        if (loadVal == null) {
            let obj = {
                number: no
            }
            noarr.push(obj)
            localStorage.setItem("phone_no", JSON.stringify(noarr))
            window.location.href = "signup.html"
        }

        else {
             checkno(loadVal, no)
        }





    }
}
function checkno( loadVal,no) {
    loadVal.map(function (elem) {

        if (no == elem.mobile) {
           
            let obj = {
                number: no
            }
            noarr.push(obj)
            localStorage.setItem("phone_no", JSON.stringify(noarr))
            window.location.href = "otp.html"
           let x=  document.getElementById("show_wrong_p");
           x.innerText = "Enter otp"
        } else {
           
            let obj = {
                number: no
            }
            noarr.push(obj)
            localStorage.setItem("phone_no", JSON.stringify(noarr))

            window.location.href = "signup.html"
            let x=  document.getElementById("show_wrong_p");
           x.innerText = "New User Sign Up first"
           

        }
    });

}
let Namearr = JSON.parse(localStorage.getItem("username")) ;
 Namearr.map(function(ele){
    document.getElementById("login_text").innerText=ele.name;
 })


