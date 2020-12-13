var list = null;
var estadoL
var nameGame = null;
var games = null;
var checkGame;

var acceptButton = function() {
    //aca tengo que ver como tomar el valor del checkbox seleccionado.
    //currentButton = document.getElementById('l0').value;
    checkGame = document.getElementsByClassName("checkGame");
    for (i=0; i<checkGame.length; i++){
        if (checkGame[i].checked){
            localStorage.setItem("currentButton", checkGame[i].value);
        }
    }
    localStorage.setItem("load", "si");
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
            html +='<div><input type="radio" id="l'+i+'" class="checkGame" value="'+games+'">'+
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