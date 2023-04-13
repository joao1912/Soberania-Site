import { dadosFormulario } from "./Main.js"
import { cartas } from "./CadastroCartas.js"
import { reoladed } from "./Main.js"
import Principal from "./Main.js"


const carta = {
    id: 0,
    usuarioExibido: "",
    usuario: "",
    afetados: "",
    escolha: ""
}


document.getElementById("menuUsarCarta").addEventListener("click",function(){
    const listCountry = document.getElementById("paisesUsarCarta")
    const botaoPronto = document.getElementsByClassName("botaoProntoUsarCarta")[0]

    if (listCountry.style.display == "none") {
        botaoPronto.style.display = "none"
        listCountry.style.display = "inline-block"
    } else {
        listCountry.style.display = "none"
        botaoPronto.style.display = "inline-block"
    }
        
})

document.getElementById("listaPaises").addEventListener("click",function(event){
    const id = event.target.id
    const listCountry = document.getElementById("paisesUsarCarta")
    const botaoPronto = document.getElementsByClassName("botaoProntoUsarCarta")[0]

    listCountry.style.display = "none"
    botaoPronto.style.display = "inline-block"

    function habilitaBotaoPronto() {
        botaoPronto.style.backgroundColor = "crimson"
        botaoPronto.style.cursor = "pointer"
    }


    switch(id) {
        case "pais1":
            habilitaBotaoPronto()
            carta.usuarioExibido = dadosFormulario.Paises[0]
            carta.usuario = "pais1"

            break
        case "pais2":
            habilitaBotaoPronto()
            carta.usuarioExibido = dadosFormulario.Paises[1]
            carta.usuario = "pais2"

            break
        case "pais3":
            habilitaBotaoPronto()
            carta.usuarioExibido = dadosFormulario.Paises[2]
            carta.usuario = "pais3"

            break
        case "pais4":
            habilitaBotaoPronto()
            carta.usuarioExibido = dadosFormulario.Paises[3]
            carta.usuario = "pais4"

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

document.getElementsByClassName("botaoProntoUsarCarta")[0].addEventListener("click",function(){
    let areaCodigo = document.getElementById("codigoCarta")
    let id = null
    if (carta.usuario != "") {
        id = areaCodigo.value
        carta.id = id
        getAffectedCard(id)
        getChoicesCard(id)

        if (carta.escolha == "escolha-nao" && carta.afetados == "um" || carta.afetados == "todos")  {
            useCard(Number(id))
        }
        
    }
})

document.getElementById("containerBotaoEscolha").addEventListener("click", function(event){
    const id = event.target.id
    const botaoEscolha_1 = document.getElementById("opcao1-maisAfetados")
    const botaoEscolha_2 = document.getElementById("opcao2-maisAfetados")
    const botaoPronto = document.getElementById("botaoPronto-maisAfetados")
    let escolha = 0

    switch(id) {
        case "opcao1-maisAfetados":
            botaoEscolha_1.style.backgroundColor = "rgb(61, 99, 100)"
            botaoEscolha_2.style.backgroundColor = "coral"

            botaoPronto.style.backgroundColor = "crimson"
            botaoPronto.style.cursor = "pointer"

            escolha = 1
            break

        case "opcao2-maisAfetados":
            botaoEscolha_1.style.backgroundColor = "cadetblue"
            botaoEscolha_2.style.backgroundColor = "rgb(161, 80, 50)"

            botaoPronto.style.backgroundColor = "crimson"
            botaoPronto.style.cursor = "pointer"

            escolha = 2
            break
        case "botaoPronto-maisAfetados":
            if (escolha != 0) {
                if (escolha == 1) {
                    useCard(Number(carta.id), escolha)
                } else if (escolha == 2) {
                    useCard(Number(carta.id), escolha)
                }
            }
    }
})

const telaUsarCarta_1 = document.getElementById("containerUsarCarta")
const telaUsarCarta_2 = document.getElementById("containerAlvoCarta")
const telaResultado = document.getElementById("contaneinerResultadoCarta")

const botaoEscolha1_tela_2 = document.getElementById("opcao1-telaAlvosCarta")
const botaoEscolha2_tela_2 = document.getElementById("opcao2-telaAlvosCarta")


function getAffectedCard(id) {
    switch (cartas[id].afetados[0]) {
        case "um":
            telaUsarCarta_1.style.display = "none"
            carta.afetados = "um"

            break
        case "dois":
            telaUsarCarta_1.style.display = "none"
            telaUsarCarta_2.style.display = "flex"
            carta.afetados = "dois"

            break
        case "todos":
            telaUsarCarta_1.style.display = "none"
            carta.afetados = "todos"
    }

}

function getChoicesCard(id) {
    const containerUsarCarta = document.getElementById("containerUsarCarta")
    const containerBotaoEscolha = document.getElementById("containerBotaoEscolha")

    if (cartas[id].afetados[1] == "escolha-sim") {
       
        if(carta.afetados == "um" || carta.afetados == "todos") {
            containerUsarCarta.style.display = "none"
            containerBotaoEscolha.style.display = "flex"

        } else if(carta.afetados == "dois") {
            botaoEscolha1_tela_2.style.display = "flex"
            botaoEscolha2_tela_2.style.display = "flex"
        } 
        carta.escolha = "escolha-sim"
    } else {
        carta.escolha = "escolha-nao"
    }
}


function useCard(id, escolha) {
    
    if(escolha) {

        switch (id) {
            case 15:
                
                switch (carta.usuario) {
                    case "pais1":
                    
                        break
                    case "pais2":

                        break
                    case "pais3":

                        break
                    case "pais4":

                        break
                }

                break
            case 16:

                break
            case 20:

                break
            case 57:

                break
            default:
                console.log("Carta não localizada")
        }

    } else {
        switch (id) {
            case 13:
                
                break
            case 14:

                break
            case 17:

                break
            case 18:

                break
            case 19:

                break
            case 22:

                break
            case 23:

                break
            case 24:

                break
            case 25:

                break
            case 26:

                break
            case 27:

                break
            case 28:

                break
            case 29:

                break
            case 30:

                break
            case 31:

                break
            case 32:

                break
            case 33:

                break
            case 34:

                break
            case 35:

                break
            case 36:

                break
            case 37:

                break
            case 38:

                break
            case 39:

                break
            case 40:

                break
            case 41:

                break
            case 42:

                break
            case 43:

                break
            default:
                console.log("Carta não localizada")
        }
    }
}