console.log('hola mundo');
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
var c1 = false;
var c2 = false;
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

counter1 = function() {
    counterP1 = document.getElementById('counterP1');
    if (turn === 'yellow'){
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

counter2 = function() {
    counterP2 = document.getElementById('counterP2');
    if (turn === 'red'){
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
    turnp1 = document.getElementById('tyou');
    turnp2 = document.getElementById('tai');
    if (turn === 'yellow'){
        turn2 = playerOne;
        turnp1.innerHTML = "Es tu turno " + playerOne;
        turnp2.innerHTML = playerTwo;
    }else if (turn === 'red'){
        turn2 = playerTwo;
        turnp2.innerHTML = "Es tu turno " + playerTwo;
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
    setInterval(counter2, 1000);
    setInterval(counter1, 1000);
    turn = 'red';
}

window.onload = init;