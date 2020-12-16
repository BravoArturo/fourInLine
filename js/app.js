var boardHTML = null;
var columnsHTML = null;
var playerOne = localStorage.getItem("playerOne");
var playerTwo = localStorage.getItem("playerTwo");
var turn2 = null;
var turn = null;
var counterP1 = null;
var counterP2 = null;
var hour1 = 0;
var min1 = 0;
var sec1 = 0;
var hour2 = 0;
var min2 = 0;
var sec2 = 0;
var estado = "There are not winner";
var gamesSaved = null;
var load = localStorage.getItem("load");
var board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
];

var loadGame = function() {
    gamesSaved = JSON.parse(localStorage[localStorage.getItem("currentButton")]);
    playerOne = gamesSaved.playerOneL;
    hour1 = gamesSaved.hour1L;
    min1 = gamesSaved.min1L;
    sec1 = gamesSaved.sec1L;
    hour2 = gamesSaved.hour2L;
    min2 = gamesSaved.min2L;
    sec2 = gamesSaved.sec2L;
    board = gamesSaved.boardL;
    estado = gamesSaved.estadoL;
    playerTwo = gamesSaved.playerTwoL;
}

var redirect2 = function() {
    location.href="play.html";
}


var redirect = function() {
    redirect = document.getElementById("menu");
    redirect.onclick = redirect2;
}

var counter1 = function() {
    counterP1 = document.getElementById("counterP1");
    if (turn === "yellow") {
    if (sec1 < 59){
        sec1++;
    }else if (sec1 == 59){
        sec1=0;
        min1++;
    }else if (sec1 == 59 && min1==59){
        sec1=0;
        min1=0;
        hour1++;
    }
    }
    counterP1.innerHTML = hour1+":"+min1+":"+sec1;
}

var counter2 = function() {
    counterP2 = document.getElementById("counterP2");
    if (turn === "red"){
    if (sec2 < 59){
        sec2++;
    }else if (sec2 == 59){
        sec2=0;
        min2++;
    }else if (sec2 == 59 && min2==59){
        sec2=0;
        min2=0;
        hour2++;
    }
    }
    counterP2.innerHTML = hour2+":"+min2+":"+sec2;
}
      
var changeNameTurn = function() {
    turnp1 = document.getElementById("tyou");
    turnp2 = document.getElementById("tai");
    if (turn === "yellow") {
        turn2 = playerOne;
        turnp1.innerHTML = "Is your turn " + playerOne;
        turnp2.innerHTML = playerTwo;
    }else if (turn === 'red'){
        turn2 = playerTwo;
        turnp2.innerHTML = "Is your turn " + playerTwo;
        turnp1.innerHTML = playerOne;
    }
}

var toggleTurn = function() {
    turn = (turn === "yellow") ? "red" : "yellow";
}

var columnEventHandler = function(evt) {
    var columnId = evt.target.id.substr(1, 1);
    for (var i = 0; i < board[columnId].length; i++) {
        if (!board[columnId][i]) {
            board[columnId][i] = turn;
            changeNameTurn();
            toggleTurn();
            render();
            setTimeout('checkWin()', 1000);
            checkDraw();
            break; 
        }
    }
}

var bindColumnHandlers = function() {
    columnsHTML = document.getElementsByClassName("column");
    for (var i = 0; i < columnsHTML.length; i++){
    columnsHTML[i].onclick = columnEventHandler;
    }   
}

var winner = function() {
    if (turn === 'red'){
        alert("The winner is: " + playerTwo);
        estado = "The winner was: " + playerTwo;
    }else{
        alert("The winner is: " + playerOne);
        estado = "The winner was: " + playerOne;
    } 
}

var checkWin = function () {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j]) {
                if (board[i][j] === (board[i][j + 1]) && board[i][j] === (board[i][j + 2]) &&
                    board[i][j] === (board[i][j + 3])) {
                        winner();
                }
            }
        }
    }

    for (var i = 0; i < board.length - 3; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j]) {
                if (board[i][j] === (board[i + 1][j]) && board[i][j] === (board[i + 2][j]) &&
                    board[i][j] === (board[i + 3][j])) {
                        winner();
                }
                if (board[i][j] === (board[i + 1][j + 1]) && board[i][j] === (board[i + 2][j + 2]) &&
                    board[i][j] === (board[i + 3][j + 3])) {
                        winner();
                }
            }
        }
    }

    for (var i = 0; i < board.length - 3; i++) {
        for (var j = 3; j < board[i].length; j++) {
            if (board[i][j]) {
                if (board[i][j] === (board[i + 1][j - 1]) && board[i][j] === (board[i + 2][j - 2]) &&
                    board[i][j] === (board[i + 3][j - 3])) {
                        winner();
                }
            }
        }
    }
}


var checkDraw = function () {
    for (var i = 0; i < board.length; i++) {
        if (board[i].includes(null)) {
            var isFull = false
            return;
        } else {
            isFull = true;
        }
    }
    if (isFull) {
        alert("The board is full");
    }
}

var render = function() {
    var html = '';
    for(var i = 0; i < board.length; i++) {
        html += '<div id ="c'+i+'" class="column">';
        for(var j = board[i].length - 1; j >= 0; j--) {
            html += '<div id="s'+i+j+'" class ="row'
            if (board[i][j]) html += ' ' + board[i][j]
            html += '"></div>';
        }
        html += '</div>';   
     }
    boardHTML.innerHTML = html;  
    bindColumnHandlers();
}

var init = function() {
    boardHTML = document.getElementById("board");
    turn = Math.random() > 0.5 ? "yellow" : "red";
    if (load==="yes"){
        loadGame();
    }
    render(); 
    changeNameTurn();
    redirect();
    setInterval(counter2, 1000);
    setInterval(counter1, 1000);
    turn = "red";
}

window.onload = init;