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

document.querySelector("#contactForm").addEventListener("submit", function(event) {
   event.preventDefault();
   emailjs.init("user_VV0kGVLqBYwD9xWC73hfK");
   var template_params = {
    "Name": document.getElementById('name').value,
     "Email": document.getElementById('email').value,
     "Content": document.getElementById('content').value
 }

 var service_id = "default_service";
 var template_id = "website_default_form";
 emailjs.send(service_id, template_id, template_params).then(function(response) {
       alert('SUCCESS!', response.status, response.text);
    }, function(error) {
       alert('FAILED...', error);
    });;
}, false);