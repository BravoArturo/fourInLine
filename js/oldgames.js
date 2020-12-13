var list = null;
var nameGame = null;
var games = null;

acceptButton = function() {
    location.href="game.html";
}

cancelButton = function() {
    location.href="index.html";
}

getElements = function() {
    list = document.getElementById('list');
}

var render = function() {
    let html = '';
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).includes('Game:') == true){
            games = localStorage.key(i);
            html +='<div><input type="radio" id="l'+i+'" value="'+games+'">'+
            '<label for="l'+i+'">'+games+'</label></div>';
        }
    }
    list.innerHTML = html;
}

var init = function() {
    getElements();
    render();
}

window.onload = init;