function toggleMessage() {
    let currentState;
    let element = document.getElementsByClassName("hidden");
    if (element[0].getAttribute("currentState") == "true") {
        currentState = true;
        element[0].style.display = "inline";
        element[0].setAttribute("currentState", !currentState);
    } else {
        currentState = false;
        element[0].style.display = "none";
        element[0].setAttribute("currentState", !currentState);
    }
}
function toggleContact() {
    let currentState;
    let element = document.getElementsByClassName('contact_area');
    let button = document.getElementsByClassName('contact_me__expander');
    if (element[0].getAttribute("currentState") == "true") {
        currentState = true;
        //Change the button look
        button[0].classList.add("contact_me__animate");
        button[0].classList.remove("contact_me__animate__reverse");
        button[0].style.fill = "white";
        //Show the contact me section
        element[0].classList.add("contact_area__animate");
        element[0].classList.remove("contact_area__animate__reverse");
        element[0].setAttribute("currentState", !currentState);
    } else {
        currentState = false;
        //Change the button look
        button[0].classList.remove("contact_me__animate");
        button[0].classList.add("contact_me__animate__reverse");
        button[0].style.fill = "#8072b3";
         //Hide the contact me section
        element[0].classList.remove("contact_area__animate");
        element[0].classList.add("contact_area__animate__reverse");
        element[0].setAttribute("currentState", !currentState);
    }
}