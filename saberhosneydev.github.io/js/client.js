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
function openContact() {
    let element = document.getElementsByClassName('contact_area');
    let close = document.getElementsByClassName('contact_me__close');
    let open = document.getElementsByClassName('openContact');
        //Animate the Close button
        close[0].classList.add('contact_me__close__animate');
        close[0].classList.remove('contact_me__close__animate__reverse');
        //Show the contact me section
        element[0].classList.add("contact_area__animate");
        element[0].classList.remove("contact_area__animate__reverse");
        //Close the open button
        open[0].style.display = "none";
    }
    function closeContact() {
        let element = document.getElementsByClassName('contact_area');
        let close = document.getElementsByClassName('contact_me__close');
        let open = document.getElementsByClassName('openContact');
    //Animate the Close button
    close[0].classList.remove('contact_me__close__animate');
    close[0].classList.add('contact_me__close__animate__reverse');
    //Hide the contact me section
    element[0].classList.remove("contact_area__animate");
    element[0].classList.add("contact_area__animate__reverse");
    open[0].style.display = "block";
}
function sendEmail(){
    let guestName = document.getElementById('name');
    let guestEmail = document.getElementById('email');
    let content = document.getElementById('content');
        Email.send({
            SecureToken : "61e6bdea-a477-4e37-906c-45084d90509f",
            To : 'eldsitefeedback@gmail.com',
            From : guestEmail.value,
            Subject : "SHDev.codes" + "From : " + guestName.value,
            Body : content.value
        }).then(
        message => alert(message)
        );
}
