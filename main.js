let newMode = document.querySelector(".darkMode");
let body = document.querySelector("body");
let runDarkEvent = function (){
    body.style.backgroundColor = "Black";
};

newMode.addEventListener("click" , runDarkEvent);
let secondMode = document.querySelector(".lightMode");
let runLightEvent = function (){
    body.style.backgroundColor = "white";
};

secondMode.addEventListener("click" , runLightEvent);

