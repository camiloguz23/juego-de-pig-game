/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var jugador,jugadorActivo,marcador,play;

nuevojuego();

function boton() {
    if (play) {
        // dados aleatorios
        var dados = Math.floor(Math.random()*6) + 1;
        // volver los dados visibles
        var dadosDom = document.querySelector(".dice");
        dadosDom.style.display="block";
        dadosDom.src="dice-" + dados + ".png";
        // manejo de los puntajes
        if ( dados !== 1) {
           marcador = marcador + dados;
           document.querySelector("#current-" + jugadorActivo).textContent = marcador;
        }else{
            nuevoJugador();
        }
        

        
    }
    
    
}

document.querySelector(".btn-roll").addEventListener("click",boton);

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (play) {
        
        // agregar puntuaje actual al global 
    
         jugador[jugadorActivo] = jugador[jugadorActivo] + marcador;
        // agregar el puntaje al marcador global
         document.querySelector("#score-" + jugadorActivo).textContent = jugador[jugadorActivo];
        // indicar al ganador 
        if (jugador[jugadorActivo] >= 100) {
           document.querySelector("#name-" + jugadorActivo).textContent= "Ganador!!!";
           document.querySelector(".dice").style.display = "none";
           document.querySelector(".player-" + jugadorActivo + "-panel").classList.add("winner");
           document.querySelector(".player-" + jugadorActivo + "-panel").classList.remove("active");
           
           play = false;
        
        }else{
            nuevoJugador();

        }
    }
   

    
    
});

function nuevoJugador() {
    jugadorActivo == 0 ? jugadorActivo = 1 : jugadorActivo = 0;
        marcador = 0;
        document.getElementById("current-0").textContent= "0";
        document.getElementById("current-1").textContent= "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display="none";
    
};

document.querySelector(".btn-new").addEventListener("click",nuevojuego);

function nuevojuego() {
    jugador = [0,0];
    jugadorActivo = 0;
    marcador = 0;
    play = true
    // hicimo el dado invisible
    document.querySelector(".dice").style.display="none";

     document.getElementById("score-0").textContent= "0";
     document.getElementById("score-1").textContent= "0";
    document.getElementById("current-0").textContent= "0";
    document.getElementById("current-1").textContent= "0";
    document.querySelector("#name-0").textContent= "jugador 1";
    document.querySelector("#name-1").textContent= "jugador 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    
};

// funcion para las reglas del juego

document.getElementById("reglas").addEventListener("click",function () {
    document.getElementById("opcion").style.display = "block";
    document.getElementById("reglas").style.display = "none"
    
});

document.getElementById("opcion").addEventListener("click", function () {
    document.getElementById("opcion").style.display = "none";
    document.getElementById("reglas").style.display = "block"
    
});


