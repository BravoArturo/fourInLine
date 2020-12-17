var save = function(){

    var game = {
        playerOneL: playerOne,
        playerTwoL: playerTwo,
        hour1L: hour1,
        min1L: min1,
        sec1L: sec1,
        hour2L: hour2,
        min2L: min2,
        sec2L: sec2,
        boardL: board, 
        estadoL: estado  
    }

    localStorage.setItem("Game: " + localStorage.getItem("gameName"), JSON.stringify(game));
    console.log(game);
}