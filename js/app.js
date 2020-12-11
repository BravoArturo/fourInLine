console.log('hola mundo');
var boardHTML = null;
var columnsHTML = null;
var playerOne = localStorage.getItem("playerOne");
var playerTwo = localStorage.getItem("playerTwo");
var turn2 = null;
var turn = null;
var board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
];


var redirect2 = function() {
    location.href="index.html";
}

var redirect = function() {
    redirect = document.getElementById('menu');
    redirect.onclick = redirect2;
}

var changeNameTurn = function() {
    turnp1 = document.getElementById('tyou');
    turnp2 = document.getElementById('tai');
    if (turn === 'yellow'){
        turn2 = playerOne;
        turnp1.innerHTML = "es tu turno " + playerOne;
        turnp2.innerHTML = playerTwo;
    }else{
        turn2 = playerTwo;
        turnp2.innerHTML = "es tu turno " + playerTwo;
        turnp1.innerHTML = playerOne;
    }

}

var toggleTurn = function() {
    turn = (turn === 'yellow') ? 'red' : 'yellow';

}

var columnEventHandler = function(evt) {
    var columnId = evt.target.id.substr(1, 1);
    for (var i = 0; i < board[columnId].length; i++) {
        if (!board[columnId][i]) {
            board[columnId][i] = turn; //si encuentro uno vacio relleno con el turno actual.
            toggleTurn();
            changeNameTurn();
            render();
            break; 
        }
    }
}

var bindColumnHandlers = function() {
    columnsHTML = document.getElementsByClassName('column');
    for (var i = 0; i < columnsHTML.length; i++){
    columnsHTML[i].onclick = columnEventHandler; //le agrega a todas las columnas el evento onclick.
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
    bindColumnHandlers(); //se ejecuta esto cada vez que se renderiza.
}

var init = function() {
    boardHTML = document.getElementById('board');
    turn = Math.random() > 0.5 ? ' yellow' : ' red';
    render(); 
    changeNameTurn();
    redirect();
}

window.onload = init;