function toggle(){
    let currentState;
    let element = document.getElementsByClassName('hidden');
    if(element[0].getAttribute('currentState') == "true"){
        currentState = true;
        element[0].style.display = "inline";
        element[0].setAttribute('currentState', !currentState );

    }else {
        currentState = false;
        element[0].style.display = "none";
        element[0].setAttribute('currentState', !currentState);
    }
}