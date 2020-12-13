var list = null;
var estadoL
var nameGame = null;
var games = null;
var currentButton;

var acceptButton = function() {
    //aca tengo que ver como tomar el valor del checkbox seleccionado.
    currentButton = document.getElementById('l0').value;
    localStorage.setItem("currentButton", currentButton);
    localStorage.setItem("load", "si");
    console.log(localStorage.getItem("load"));
    location.href="game.html";
}

cancelButton = function() {
    location.href="index.html";
}

getElements = function() {
    list = document.getElementById('list');
}

var render1 = function() {
    let html = '';
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).includes('Game:') == true){
            games = localStorage.key(i);
            gamesSaved =  JSON.parse(localStorage[games]);
            html +='<div><input type="radio" id="l'+i+'" value="'+games+'">'+
            '<label for="l'+i+'">'+games+ " El estado del juegos es: "+ gamesSaved.estadoL +'</label></div>';
        }
    }
    list.innerHTML = html;
}

var init = function() {
    getElements();
    render1();
}

window.onload = init;