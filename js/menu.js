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
        alert("Must enter the player 1");
    }
    else if (player2.value === ""){
        alert("Must enter the player 2");
    }
    else if (player1.value.length < 3){
        alert("Player 1 must contain at least 3 characters");
    }
    else if (player2.value.length < 3){
        alert("Player 2 must contain at least 3 characters");
    }
    else if (gameName.value.length === ""){
        alert("You must enter the name of the game");
    }
    else if (gameName.value.length < 3){
        alert("Game name must contain at least 3 characters");
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
     player1 = document.getElementById("player1Input");
     player2 = document.getElementById("player2Input");
     gameName = document.getElementById("gameInput");
}

var init = function() {
    getElements();
    localStorage.setItem("load", null);
}

window.onload = init;