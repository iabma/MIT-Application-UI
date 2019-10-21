particlesJS("particles-js", config);

let userField = document.getElementById("user-entry"),
    userLabel = document.getElementById("user-label"),
    userCard = document.getElementById("username");

function focusOnField(label, card, field) {
    console.log('focus')
    label.style.top = "0px";
    label.style.fontSize = "12px";
    card.style.boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19)";
    field.style.border = "1px solid gray";//"rgb(244, 244, 244)";
}

function blurField(label, card, field) {
    console.log('blur')
    if (field.value == "") {
        label.style.top = "20px";
        label.style.fontSize = "16px";
        field.style.border = "1px solid rgb(252, 252, 252)";
    }
    card.style.boxShadow = "none";
}

function toPassword(label, card, field) {
    card.style.transform = "rotate3d(1, 0, 0, 360deg)";
    field.value = "";
    field.type = "password";
    label.innerHTML = "Password"
    blurField(label, card, field);
}

userField.onfocus = () => { focusOnField(userLabel, userCard, userField) };
userField.onblur = () => { blurField(userLabel, userCard, userField) };
userField.onkeydown = (key) => {
    if (key.keyCode == 13) {
        key.preventDefault();
        if (userField.type != "password")
            toPassword(userLabel, userCard, userField);
        else
            window.open("main.html","_self");
        userField.blur();
    }
}