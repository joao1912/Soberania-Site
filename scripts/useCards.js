import { dadosFormulario } from "./Main.js"
import { cartas } from "./CadastroCartas.js"

const carta = {
    usuario: "",
    id: 0,
    afetados: "",
    escolha: "",
    canUse: false
}


document.getElementById("menuUsarCarta").addEventListener("click",function(event){
    const listCountry = document.getElementById("paisesUsarCarta")
    const botaoPronto = document.getElementById("botaoProntoUsarCarta")
    const id = event.target.id

    switch(id) {
        case "menuIcone1":
            if (listCountry.style.display == "none") {
                botaoPronto.style.display = "none"
                listCountry.style.display = "inline-block"
            } else {
                listCountry.style.display = "none"
                botaoPronto.style.display = "inline-block"
            }
            break
        case "opcao1-telaUsarCarta":

            break
        case "opcao2-telaUsarCarta":

            break
    }

    
})

document.getElementById("listaPaises").addEventListener("click",function(event){
    const id = event.target.id
    const listCountry = document.getElementById("paisesUsarCarta")
    const botaoPronto = document.getElementById("botaoProntoUsarCarta")

    listCountry.style.display = "none"
    botaoPronto.style.display = "inline-block"

    function habilitaBotaoPronto() {
        botaoPronto.style.backgroundColor = "crimson"
        botaoPronto.style.cursor = "pointer"

    }


    switch(id) {
        case "pais1":
            habilitaBotaoPronto()
            carta.usuario = dadosFormulario.Paises[0]

            break
        case "pais2":
            habilitaBotaoPronto()
            carta.usuario = dadosFormulario.Paises[1]

            break
        case "pais3":
            habilitaBotaoPronto()
            carta.usuario = dadosFormulario.Paises[2]

            break
        case "pais4":
            habilitaBotaoPronto()
            carta.usuario = dadosFormulario.Paises[3]

            break
        
    }
})

document.getElementById("menuAlvoCartas").addEventListener("click",function(event){
    const listCountry = document.getElementById("paisesAlvos")
    const botaoUsar = document.getElementsByClassName("botaoUsar")[0]
    const id = event.target.id

    switch(id) {
        case "menuIcone1":
            if (listCountry.style.display == "none") {
                botaoUsar.style.display = "none"
                listCountry.style.display = "inline-block"
            } else {
                listCountry.style.display = "none"
                botaoUsar.style.display = "block"
            }
            break
        case "opcao1-telaAlvosCarta":

            break
        case "opcao2-telaAlvosCarta":

            break
    }
    
})

document.getElementById("paisesAlvos").addEventListener("click",function(event){
    const id = event.target.id
    const listCountry = document.getElementById("paisesAlvos")
    const botaoUsar = document.getElementsByClassName("botaoUsar")[0]

    listCountry.style.display = "none"
    botaoUsar.style.display = "block"


    switch(id) {
        case "alvo1":
            

            break
        case "alvo2":
           

            break
        case "alvo3":
            

            break
        case "alvo4":
            

            break
        
    }
})

document.getElementById("botaoProntoUsarCarta").addEventListener("click",function(){
    let areaCodigo = document.getElementById("codigoCarta")
    if (carta.usuario != "") {
        carta.id = areaCodigo.value
        getAffectedCard(carta.id)
        getChoicesCard(carta.id)

        
        if (carta.afetados == "um") {
            carta.canUse = true
        } 
        
        if (carta.canUse == true) {
            useCard(carta.id, carta.afetados)
        }
    }
})

const telaUsarCarta_1 = document.getElementById("containerUsarCarta")
const telaUsarCarta_2 = document.getElementById("containerAlvoCarta")
const telaResultado = document.getElementById("")

const botaoEscolha1_tela_1 = document.getElementById("opcao1-telaUsarCarta")
const botaoEscolha2_tela_1 = document.getElementById("opcao2-telaUsarCarta")

const botaoEscolha1_tela_2 = document.getElementById("opcao1-telaAlvosCarta")
const botaoEscolha2_tela_2 = document.getElementById("opcao2-telaAlvosCarta")


function getAffectedCard(id) {
    switch (cartas[id].afetados[0]) {
        case "um", "todos":
            telaUsarCarta_1.style.display = "none"
            telaResultado.style.display = "flex"

            break
        case "dois":
            telaUsarCarta_1.style.display = "none"
            telaUsarCarta_2.style.display = "flex"

            break
    }

}

function getChoicesCard(id) {
    if (cartas[id].afetados[1] == "escolha-sim") {
        if(carta.afetados[0] == "um") {
            botaoEscolha1_tela_1.style.display = "flex"
            botaoEscolha2_tela_1.style.display = "flex"
        } else {
            botaoEscolha1_tela_2.style.display = "flex"
            botaoEscolha2_tela_2.style.display = "flex"
        }
    }
}

function useCard(id, affecteds) {
    
}