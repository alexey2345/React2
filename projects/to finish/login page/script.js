const user = {

}

const usernameInput = document.getElementById("userName");
const passwordInput = document.getElementById("password");
const passwordInput2 = document.getElementById("password2");
const emailInput = document.getElementById("email");

function signUp() {



    if (passwordInput.value !== passwordInput2.value) {
        alert("Password don't match");
    } else if (usernameInput.value === "") {
        alert("please enter a username")
    } else if (emailInput.value === "") {
        alert("please enter an email");
    } else if (passwordInput.value && passwordInput2.value === "") {
        alert("please enter a password");
    } else {
        user.userName = usernameInput.value;
        user.passWord = passwordInput.value;
        user.email = emailInput.value;
        window.location.href = "index.html";
    }

    saveData();
}


function saveData() {
    localStorage.setItem("username", user.userName);
    localStorage.setItem("password", user.passWord);
    localStorage.setItem("email", user.email);
}


function login() {
    const userLogin = document.getElementById("user-login").value;
    const passLogin = document.getElementById("pass-login").value;

    if (userLogin === localStorage.getItem("username") && passLogin === localStorage.getItem("password")) {
        document.querySelector(".app>h2").innerHTML = `${localStorage.getItem("username")} "is connected"`
    } else {
        document.querySelector(".app>h2").innerHTML = "Incorrect Username or password";
    }

}