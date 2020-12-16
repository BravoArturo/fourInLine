var playerOne = null;
var playerTwo = null;
var player1 = null;
var player2 = null;
var gameName = null;
var game = null;
var accept = null;

var seeOldGames = function() {
    location.href="oldGames.html";
}

var cancelButton = function() {
    location.href="index.html"
}

var validateForm = function() {
    if (player1.value === ""){
        alert("Debe ingresar el player 1");
    }
    else if (player2.value === ""){
        alert("Debe ingresar player 2");
    }
    else if (player1.value.length < 3){
        alert("El player 1 debe contener al menos 3 caracteres");
    }
    else if (player2.value.length < 3){
        alert("El player 2 debe contener al menos 3 caracteres");
    }
    else if (gameName.value.length === ""){
        alert("Debe ingresar el nombre de partida");
    }
    else if (gameName.value.length < 3){
        alert("El nombre de partida debe contener al menos 3 caracteres");
    }
    else {
        playerOne = player1.value;
        playerTwo = player2.value;
        game = gameName.value;
        console.log(playerOne + " " + playerTwo );
        localStorage.setItem("playerOne", playerOne);
        localStorage.setItem("playerTwo", playerTwo);
        localStorage.setItem("gameName", game);
        location.href="game.html";
    }
}

var getElements = function() {
     player1 = document.getElementById('player1Input');
     player2 = document.getElementById('player2Input');
     gameName = document.getElementById('gameInput');
}

var init = function() {
    getElements();
    localStorage.setItem("load", null);
}

window.onload = init;