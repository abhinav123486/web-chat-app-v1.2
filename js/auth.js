//handling form elements
var log_google = document.getElementById("lg");
var log_facebook = document.getElementById("lf");
var sign_google = document.getElementById("sg");
var sign_facebook = document.getElementById("sf");

var login = document.querySelector(".login");
var sign_up = document.querySelector(".sign-up");

var log_acc = document.getElementById("log-acc");
var new_acc = document.getElementById("new-acc");

var register_acc = document.querySelector(".register");
var form_holder = document.getElementById("form-holder");
var form = document.getElementById("form");
var back_icon = document.getElementById("back-icon");

log_acc.onclick = (ev) => {
    register_acc.style.visibility = 'hidden';
    login.style.opacity = 0;
    form_holder.style.visibility = 'visible';
}

new_acc.onclick = (ev) => {
    register_acc.style.visibility = 'hidden';
    sign_up.style.opacity = 0;
    form_holder.style.visibility = 'visible';
}

back_icon.onclick = (ev) => {
    register_acc.style.visibility = 'visible';
    login.style.opacity = 0.8;
    sign_up.style.opacity = 0.8;
    form_holder.style.visibility = 'hidden';
}
