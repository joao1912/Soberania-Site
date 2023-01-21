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
    window.location.href = "pagina-JogoRodando.html"
}

function economia() {
    document.getElementById("ferramentas").style.display = "none"
    document.getElementById("telaEconomia").style.display = "block"
}

function fabricar() {
    document.getElementById("ferramentas").style.display = "none"
    document.getElementById("telaFabricar").style.display = "block"
}

function usarCarta() {
    document.getElementById("ferramentas").style.display = "none"
    document.getElementById("telaUsarCarta").style.display = "block"
}

function regras() {
    document.getElementById("ferramentas").style.display = "none"
    document.getElementById("telaRegras").style.display = "block"
}




(function(){
    document.getElementsByClassName("Aretornar")[0].addEventListener('click',function(){
    document.getElementById("telaEconomia").style.display = "none"
    document.getElementById("ferramentas").style.display = "block"
    })

    document.getElementsByClassName("Aretornar")[1].addEventListener('click',function(){
    document.getElementById("telaFabricar").style.display = "none"
    document.getElementById("ferramentas").style.display = "block"
    })

    document.getElementsByClassName("Aretornar")[2].addEventListener('click',function(){
    document.getElementById("telaUsarCarta").style.display = "none"
    document.getElementById("ferramentas").style.display = "block"
    })

    document.getElementsByClassName("Aretornar")[3].addEventListener('click',function(){
    document.getElementById("telaRegras").style.display = "none"
    document.getElementById("ferramentas").style.display = "block"
    })

    document.getElementById("menuIcone1").addEventListener("click",function(){
        const menu = document.querySelector("#selecionarPais1")
        if(menu.style.visibility == "hidden") {
            menu.style.visibility = "visible"
        } else {
            menu.style.visibility = "hidden"
        }
    })

    document.getElementById("menuIcone2").addEventListener("click",function(){
        const menu = document.querySelector("#selecionarPais2")
        if(menu.style.visibility == "hidden") {
            menu.style.visibility = "visible"
        } else {
            menu.style.visibility = "hidden"
        }
    })

    document.querySelector("#pais1_negativo").addEventListener("click",function(){
        document.querySelector("#selecionarPais1").style.visibility = "hidden"
        document.querySelector(".infoPais").textContent = player_1.economia
    })
    document.querySelector("#pais2_negativo").addEventListener("click",function(){
        document.querySelector("#selecionarPais1").style.visibility = "hidden"
        document.querySelector(".infoPais").textContent = player_2.economia
    })
    document.querySelector("#pais3_negativo").addEventListener("click",function(){
        document.querySelector("#selecionarPais1").style.visibility = "hidden"
        document.querySelector(".infoPais").textContent = player_3.economia
    })
    document.querySelector("#pais4_negativo").addEventListener("click",function(){
        document.querySelector("#selecionarPais1").style.visibility = "hidden"
        document.querySelector(".infoPais").textContent =  player_4.economia
    })
    document.querySelector("#banco_negativo").addEventListener("click",function(){
        document.querySelector("#selecionarPais1").style.visibility = "hidden"
        document.querySelector(".infoPais").textContent = "$$$$$$"
    })


    document.querySelector("#pais1_positivo").addEventListener("click",function(){
        document.querySelector("#selecionarPais2").style.visibility = "hidden"
        document.querySelectorAll(".infoPais")[1].textContent = player_1.economia
    })
    document.querySelector("#pais2_positivo").addEventListener("click",function(){
        document.querySelector("#selecionarPais2").style.visibility = "hidden"
        document.querySelectorAll(".infoPais")[1].textContent = player_2.economia
    })
    document.querySelector("#pais3_positivo").addEventListener("click",function(){
        document.querySelector("#selecionarPais2").style.visibility = "hidden"
        document.querySelectorAll(".infoPais")[1].textContent = player_3.economia
    })
    document.querySelector("#pais4_positivo").addEventListener("click",function(){
        document.querySelector("#selecionarPais2").style.visibility = "hidden"
        document.querySelectorAll(".infoPais")[1].textContent = player_4.economia
    })
    document.querySelector("#banco_positivo").addEventListener("click",function(){
        document.querySelector("#selecionarPais2").style.visibility = "hidden"
        document.querySelectorAll(".infoPais")[1].textContent = "$$$$$$"
    })

})()



