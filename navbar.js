let Namearr = JSON.parse(localStorage.getItem("username"));

function handleLogout() {

  // Update the UI to show the login link and hide the username and logout button
  document.getElementById("login_text").style.display = "inline";
  document.getElementById("username_text").innerText = "";
  document.getElementById("username_text").style.display = "none";
  document.getElementById("logout_text").style.display = "none";
}

if (Namearr && Namearr.length > 0) {
  // User is logged in
  let loggedInUser = Namearr[0].name;
  document.getElementById("login_text").style.display = "none";
  document.getElementById("username_text").innerText = loggedInUser;
  document.getElementById("username_text").style.display = "inline";
  document.getElementById("logout_text").style.display = "inline";

  // Add event listener to the logout button
  document.getElementById("logout_text").addEventListener("click", handleLogout);
} else {
  // User is not logged in
  document.getElementById("login_text").style.display = "inline";
  document.getElementById("username_text").innerText = "";
  document.getElementById("username_text").style.display = "none";
  document.getElementById("logout_text").style.display = "none";
}
