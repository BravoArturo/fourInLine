console.log('hola mundo');
var boardHTML = null;
var columnsHTML = null;
var turn = ' yellow';
var board =[
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
];
//my element board is called medium in my html
/*var render = function(){
    var html = "";
    for(i=0; i<7; i++){
        html += '<div id = "column-1" class = "column">',
        html += '<div id = "row-1" class ="row"></div>',
        html += '<div id = "row-2" class ="row"></div>',
        html += '<div id = "row-3" class ="row"></div>',
        html += '<div id = "row-4" class ="row"></div>',
        html += '<div id = "row-5" class ="row"></div>',
        html += '<div id = "row-6" class ="row"></div>',
        html += '</div>';
    }
    boardHTML.innerHTML = html;
} THIS IS ALL HARDCODE*/
var toggleTurn = function(){
    turn = (turn === ' yellow') ? ' red' : ' yellow';
}
var columnEventHandler = function(evt){
    var columnId = evt.target.id.substr(1,1);
    for (var i = 0; i < board[columnId].length; i++){
        if (!board[columnId][i]) {
            board[columnId][i] = turn;
            toggleTurn();
            render();
            break;
        }
    }
}
var bindColumnHandler = function(){
    columnsHTML = document.getElementsByClassName('column');
    for (var i = 0; i < columnsHTML.length; i++){
    columnsHTML[i].onclick = columnEventHandler;
}   
}
var render = function(){
    var html = "";
    for(i=0; i<board.length; i++){
        html += '<div id ="c'+i+'" class ="column">';
        for(j=board[i].length - 1; j>=0; j--){
            html += '<div id ="s'+i+j+'" class ="row'
            if (board[i][j]) html +=board[i][j]
            html += '"></div>';
        }
        html += '</div>';     
     }
    boardHTML.innerHTML = html;
    bindColumnHandler();
}
var init = function(){
    boardHTML=document.getElementById('board');
    turn = Math.random() > 0.5 ? ' yellow' : ' red';
    render(); //the funtion render is for the moment that the things are drawing on the screen 

}
window.onload = init;