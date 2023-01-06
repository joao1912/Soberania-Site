let botaoHome = document.getElementById("Bsair")

let quantJ1 = document.getElementById("quant1")
let quantJ2 = document.getElementById("quant2")
let quantJ3 = document.getElementById("quant3")
let quantJ4 = document.getElementById("quant4")

let eventYes = document.getElementById("eventSim")
let eventNo = document.getElementById("eventNao")

/* população */ 
let pop_1 = document.getElementById("populacao_P1")
let pop_2 = document.getElementById("populacao_P2")
let pop_3 = document.getElementById("populacao_P3")
let pop_4 = document.getElementById("populacao_P4")

/* militar */
let mili_1 = document.getElementById("militar_P1")
let mili_2 = document.getElementById("militar_P2")
let mili_3 = document.getElementById("militar_P3")
let mili_4 = document.getElementById("militar_P4")

/* Economia */
let econ_1 = document.getElementById("economia_P1")
let econ_2 = document.getElementById("economia_P2")
let econ_3 = document.getElementById("economia_P3")
let econ_4 = document.getElementById("economia_P4")

/* Opinião Publica */
let OP_1 = document.getElementById("op_P1")
let OP_2 = document.getElementById("op_P2")
let OP_3 = document.getElementById("op_P3")
let OP_4 = document.getElementById("op_P4")

function atributos() {
    let player_1 = {
        populacao: 50, /* MAX (50)*/
        militar: 5, /* MAX (15)*/
        economia: 10000,
        opiniao_publica: 100 /* MAX (100)*/
    }

    let player_2 = {
        populacao: 50,
        militar: 5,
        economia: 10000,
        opiniao_publica: 100
    }

    let player_3 = {
        populacao: 50,
        militar: 5,
        economia: 10000,
        opiniao_publica: 100
    }

    let player_4 = {
        populacao: 50,
        militar: 5,
        economia: 10000,
        opiniao_publica: 100
    }

    /* --------------------------------------------- */
            /* Configurações importantes*/ 
    let QuantidadeJogadores = ""
    let Cartas_de_evento = ""
    /* --------------------------------------------- */
}

function iniciar() {
    window.location.href = "pagina-jogoIniciado.html"
}

botaoHome.addEventListener("click",function(){
    let sair = confirm("Você ira perder todo progresso, deseja sair?")
    if(sair) { 
        window.location.href = "../index.html" 
    } 
})

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
    atributos()
    window.location.href = "pagina-JogoRodando.html"
    alert(Cartas_de_evento + " cartas de evento")
    alert(QuantidadeJogadores + "quantidade jogadores")
}

function economia() {
    window.location.href = "../ferramentas/economia.html"
}

function fabricar() {
    window.location.href = "../ferramentas/fabricar.html"
}

function usarCarta() {
    window.location.href = "../ferramentas/usar-carta.html"
}

function regras() {
    window.location.href = "../ferramentas/regras.html"
}

