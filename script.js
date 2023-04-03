document.querySelector("#submit").addEventListener("click", function (event) {
    event.preventDefault();
    checkdata();
})

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");

function checkdata() {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let pass1Value = pass1.value.trim();
    let pass2Value = pass2.value.trim();

    if (usernameValue == "") {
        error(username, "Username can't be blank");
    } else {
        success(username);
    }


    if (emailValue == "") {
        error(email, "Email can't be blank");
    }
    else if (!isEmail(emailValue)) {
        error(email, "Email is not valid");
    }
    else {
        success(email);
    }

    if (pass1Value == "") {
        error(pass1, "Password can't be black");
    } else {
        success(pass1);
    }

    if (pass2Value == "") {
        error(pass2, "Password can't be black");
    }
    else if (pass1Value != pass2Value) {
        error(pass2, "Password does not match");
    }
    else {
        success(pass2)
    }
}

function error(u, msg) {
    let parentBox = u.parentElement;
    parentBox.className = "form error";
    let icon = parentBox.querySelector(".fa");
    icon.className = "fa fa-exclamation-circle";

    let span = parentBox.querySelector("span");
    span.innerText = msg;
}

function success(u) {
    let parentBox = u.parentElement;
    parentBox.className = "form success";
    let icon = parentBox.querySelector(".fa");
    icon.className = "fa fa-check-circle";
}

function isEmail(eml) {
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(eml);
}
