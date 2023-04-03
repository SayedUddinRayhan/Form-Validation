let username = document.querySelector("#username");

document.querySelector("#submit").addEventListener("click", function (event) {
    event.preventDefault();
    checkdata();
})

function checkdata() {
    if (username.value == "") {
        error(username, "Username can't be blank");
    } else {
        success(username);
    }
}

function error(u, msg) {
    u.parentNode.className = "form error";
    let icon = document.querySelector(".fa");
    icon.className = "fa fa-exclamation-circle";

    let span = document.querySelector("span");
    span.innerText = msg;
}

function success(u) {
    u.parentNode.className = "form success";
    let icon = document.querySelector(".fa");
    icon.className = "fa fa-check-circle";
}
