var list = null;
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
            let games = localStorage.key(i);
            html += '<div id="l'+i+'"> </div>'+ games +
            '<button class="button" onclick="acceptButton()">Accept</button>'+
            '<br></br>';
        }
    }
    list.innerHTML = html;
}
var init = function() {
    getElements();
    render();
}

window.onload = init;