'use strict'
//The problem was fixed i had to delete a script in "game.html"
console.log("Hello");
var list = null;
var nameGame = null;
var games = null;
var gamesSaved = null;
var checkGame = null;

var acceptButton = function() {
    checkGame = document.getElementsByClassName("checkGame");
    for ( var i=0; i<checkGame.length; i++){
        if (checkGame[i].checked){
            localStorage.setItem("currentButton", checkGame[i].value);
        }
    }
    localStorage.setItem("load", "yes");
    location.href="game.html";
}

var cancelButton = function() {
    location.href="play.html";
}

var getElements = function() {
    list = document.getElementById("list");
}

var render1 = function() {
    let html = '';
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).includes("Game:") == true){
            games = localStorage.key(i);
            gamesSaved =  JSON.parse(localStorage[games]);
            html +='<div><input type="radio" id="l'+i+'" class="checkGame" value="'+games+'">'+
            '<label for="l'+i+'">'+games+ ". The state of the game is: "+ gamesSaved.estadoL +'</label></div>';
        }
    }
    list.innerHTML = html;
}

var init = function() {
    getElements();
    render1();
}

window.onload = init;