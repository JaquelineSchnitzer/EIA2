// Hallo JS
document.addEventListener("DOMContentLoaded", function(){
    var name : string = prompt("Bitte Namen eingeben", "Name");
    var hello : any = document.getElementById("hello");
    hello.innerHTML = "Hallo " + name;  
});