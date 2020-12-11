var playerOne = null;
var playerTwo = null;
var player1 = null;
var player2 = null;
var accept = null;



validateForm = function() {
    if (player1.value === ""){
        alert("Debe ingresar el player 1");
    }
    if (player2.value === ""){
        alert("Debe ingresar player 2");
    }
    else {
        playerOne = player1.value;
        playerTwo = player2.value;
        console.log(playerOne + " " + playerTwo );
        localStorage.setItem("playerOne", playerOne);
        localStorage.setItem("playerTwo", playerTwo);
        location.href="game.html";
    }
}

getElements = function() {
     player1 = document.getElementById('player1Input');
     player2 = document.getElementById('player2Input');
}

var init = function() {
    getElements();
}

window.onload = init;