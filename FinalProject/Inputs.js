let LoginUsername = document.querySelector('loginUsername');
let ProfileUsername = LoginUsername;

//mine
$(".userinputL").hide();
$(".userinputR").hide();


$("#loginbtn").click(function(){
  $(".userinputL").show();
  $(".userinputR").hide();

});

$("#regbtn").click(function(){
  $(".userinputR").show();
  $(".userinputL").hide();

});

// does not work >:(

const loginForm = document.querySelector("userinputL");
const loginButton = document.querySelector("subbtn");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "abc123") {
        alert("You have successfully logged in.");
    } else {
        alert("error");
    }
});


const loginForm2 = document.querySelector("userinputR");
const loginButton2 = document.querySelector("subbtn");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username2 = loginForm2.username.value;
    const password2 = loginForm2.password.value;

    if (username === "user" && password === "abc123") {
        alert("You have successfully logged in.");
    } else {
        alert("error");
    }
});
