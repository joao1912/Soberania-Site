let quantJ1 = document.getElementById("quant1")
let quantJ2 = document.getElementById("quant2")
let quantJ3 = document.getElementById("quant3")
let quantJ4 = document.getElementById("quant4")

let eventYes = document.getElementById("eventSim")
let eventNo = document.getElementById("eventNao")

/* --------------------------------------------- */
         /* Configurações importantes*/ 
let QuantidadeJogadores = ""
let Cartas_de_evento = ""
/* --------------------------------------------- */

function iniciar() {
    window.location.href = "pagina-jogoIniciado.html"
}

function QuantJogadores() {
    if (quantJ1.checked) {
        QuantidadeJogadores = 1
    } else if(quantJ2.checked) {
        QuantidadeJogadores = 2
    } else if(quantJ3.checked) {
        QuantidadeJogadores = 3
    } else if(quantJ4.checked) {
        QuantidadeJogadores = 4
    }
}

function CardEvent() {
    if(eventYes.checked) {
        Cartas_de_evento = "sim"
    } else if(eventNo.checked) {
        Cartas_de_evento = "nao"
    }
}

function JogoRodando() {
    window.location.href = "pagina-jogoRodando.html"

    
}