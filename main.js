document.getElementById("l-faq").onclick = () => { window.open("http://web.mit.edu/admissions/faq/") }


var dob = document.querySelectorAll('.dob');
M.Datepicker.init(dob, {
    yearRange: [1983, 2006],
    defaultDate: new Date("November 23, 2001"),
    setDefaultDate: true
});
var arrival = document.querySelectorAll('.arrival');
M.Datepicker.init(arrival, {
    minDate: new Date(2019, 10, 04),
    maxDate: new Date(2019, 11, 10),
    defaultDate: new Date(2019, 10, 04),
    setDefaultDate: true
});

document.querySelectorAll(".date").forEach(e => {
    e.value = "";
    e.parentElement.querySelectorAll(".btn-flat").forEach(btn => {
        console.log("wad")
        if (btn.innerHTML == "Ok") {
            btn.onclick = () => {
                console.log("hiho")
                e.focus();
            }
        }
    })
})

document.querySelectorAll(".l").forEach(e => {
    e.onclick = () => {
        window.scrollTo(0, document.getElementById(e.id.substring(2)).offsetTop);
    }
})

// ! FIX
Array.from(document.getElementsByClassName("caps")).forEach(element => {
    element.onkeypress = () => forceKeyPressUppercase(element)
})

Array.from(document.getElementsByClassName("fillin")).forEach(element => {
    let field = element.getElementsByClassName("entry")[0],
        label = element.getElementsByClassName("label")[0];
    field.onfocus = () => { focusOnField(label, field) }
    field.onblur = () => { blurField(label, field) }
})

Array.from(document.getElementsByClassName("choice")).forEach(element => {
    let field = element.getElementsByClassName("drop-prev")[0],
        label = element.getElementsByClassName("label")[0],
        dropdown = element.getElementsByClassName("dropdown")[0];

    field.onfocus = () => { showDropdown(label, field, dropdown); }
    field.onblur = () => { hideDropdown(label, field, dropdown); }
    Array.from(dropdown.getElementsByClassName("ditem")).forEach(choice => {
        console.log('t')
        choice.onmousedown = () => {
            console.log(choice.innerHTML)
            field.innerHTML = choice.innerHTML;
            if (choice.innerHTML == "None" || choice.innerHTML == "")
                field.style.color = "grey";
            else
                field.style.color = "rgb(56, 59, 54)";
            field.blur();
        }
    });
});

function forceKeyPressUppercase(e) {
    var charInput = e.keyCode;
    if ((charInput >= 97) && (charInput <= 122)) { // lowercase
        if (!e.ctrlKey && !e.metaKey && !e.altKey) { // no modifier key
            var newChar = charInput - 32;
            var start = e.target.selectionStart;
            var end = e.target.selectionEnd;
            e.target.value = e.target.value.substring(0, start) + String.fromCharCode(newChar) + e.target.value.substring(end);
            e.target.setSelectionRange(start + 1, start + 1);
            e.preventDefault();
        }
    }
}

function showDropdown(label, field, dropdown) {
    console.log('focus')
    label.style.top = "0px";
    label.style.fontSize = "12px";
    field.style.border = "1px solid gray";
    dropdown.style.display = "block";
}

function hideDropdown(label, field, dropdown) {
    console.log('blur')
    if (field.innerHTML == "None" || field.innerHTML == "") {
        label.style.top = "16px";
        label.style.fontSize = "16px";
        field.style.border = "1px solid rgb(252, 252, 252)";
        let color = "lightgrey";
        if (field.classList.contains("drequired"))
            color = "#f54f43"
        field.style.borderBottom = "3px solid " + color
    }
    dropdown.style.display = "none";
}

function focusOnField(label, field) {
    console.log('focus')
    label.style.top = "0px";
    label.style.fontSize = "12px";
    field.style.border = "1px solid gray";
}

function blurField(label, field) {
    console.log('blur')
    if (field.value == "") {
        label.style.top = "16px";
        label.style.fontSize = "16px";
        field.style.border = "1px solid rgb(252, 252, 252)";
        let color = "lightgrey";
        if (field.classList.contains("erequired"))
            color = "#f54f43"
        field.style.borderLeft = "3px solid " + color
    }
}

Array.from(document.getElementsByTagName("textarea")).forEach(e => {
    let label = e.parentElement.getElementsByClassName("label")[0],
        prompt = e.parentElement.parentElement.getElementsByTagName("span")[0];
    let limit = parseInt(label.innerHTML.split(" ")[0]);
    e.onkeyup = () => {
        let wom = e.value.match(/\S+/g);
        wom = wom ? limit - wom.length : limit;
        label.innerHTML = wom + " words remaining"
    }
    e.onresize = () => {
        console.log("yo")
        prompt.style.width = e.style.width;
    }
})