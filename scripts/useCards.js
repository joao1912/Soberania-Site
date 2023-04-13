import { dadosFormulario } from "./Main.js"
import { cartas } from "./CadastroCartas.js"
import { reoladed } from "./Main.js"
import Principal from "./Main.js"


const carta = {
    id: 0,
    usuarioExibido: "",
    usuario: "",
    alvoExibido: "",
    alvo: "",
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
            carta.alvoExibido = dadosFormulario.Paises[0]
            carta.alvo = "alvo1"

            break
        case "alvo2":
            carta.alvoExibido = dadosFormulario.Paises[1]
            carta.alvo = "alvo2"

            break
        case "alvo3":
            carta.alvoExibido = dadosFormulario.Paises[2]
            carta.alvo = "alvo3"

            break
        case "alvo4":
            carta.alvoExibido = dadosFormulario.Paises[3]
            carta.alvo = "alvo4"

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
                    useCard(Number(carta.id), escolha, carta.usuario)
                } else if (escolha == 2) {
                    useCard(Number(carta.id), escolha, carta.usuario)
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


function useCard(id, escolha, usuario, alvo) {
    
    if(escolha) {

        switch (id) {
            case 15:

                if(escolha = 1) {

                    

                } else {



                }
                break

            case 16:

                if(escolha = 1) {



                } else {


                    
                }
                break

            case 20:

                if(escolha = 1) {



                } else {


                    
                }

                break
            case 57:
                //alvo
                break
            default:
                console.log("Carta não localizada")
        }

    } else {
        switch (id) {
            case 13:

                Principal.atributos.player1.economia -= 4000
                Principal.atributos.player2.economia -= 4000
                Principal.atributos.player3.economia -= 4000
                Principal.atributos.player4.economia -= 4000

                Principal.atributos.player1.populacao -= 15
                Principal.atributos.player2.populacao -= 15
                Principal.atributos.player3.populacao -= 15
                Principal.atributos.player4.populacao -= 15
             
                break
            case 14:

                Principal.atributos.player1.economia = Math.ceil(Principal.atributos.player1.economia * 50 / 100)
                Principal.atributos.player2.economia = Math.ceil(Principal.atributos.player2.economia * 50 / 100)
                Principal.atributos.player3.economia = Math.ceil(Principal.atributos.player3.economia * 50 / 100)
                Principal.atributos.player4.economia = Math.ceil(Principal.atributos.player4.economia * 50 / 100)

                break
            case 17:

                Principal.atributos.player1.populacao += 15
                Principal.atributos.player2.populacao += 15
                Principal.atributos.player3.populacao += 15
                Principal.atributos.player4.populacao += 15

                break
            case 18:

                Principal.atributos.player1.opiniao_publica += 20
                Principal.atributos.player2.opiniao_publica += 20
                Principal.atributos.player3.opiniao_publica += 20
                Principal.atributos.player4.opiniao_publica += 20

                break
            case 19:

                Principal.atributos.player1.economia += 6000
                Principal.atributos.player2.economia += 6000
                Principal.atributos.player3.economia += 6000
                Principal.atributos.player4.economia += 6000

                break
            case 22:
                
                //pendente

                break
            case 23:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.economia += 500
                        break
                    case "pais2":
                        Principal.atributos.player2.economia += 500
                        break
                    case "pais3":
                        Principal.atributos.player3.economia += 500
                        break
                    case "pais4":
                        Principal.atributos.player4.economia += 500
                        break
                }

                break
            case 24:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao += 2
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao += 2
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao += 2
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao += 2
                        break
                }

                break
            case 25:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.opiniao_publica += 10
                        break
                    case "pais2":
                        Principal.atributos.player2.opiniao_publica += 10
                        break
                    case "pais3":
                        Principal.atributos.player3.opiniao_publica += 10
                        break
                    case "pais4":
                        Principal.atributos.player4.opiniao_publica += 10
                        break
                }

                break
            case 26:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.economia += 500
                        break
                    case "pais2":
                        Principal.atributos.player2.economia += 500
                        break
                    case "pais3":
                        Principal.atributos.player3.economia += 500
                        break
                    case "pais4":
                        Principal.atributos.player4.economia += 500
                        break
                }

                break
            case 27:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.economia += 500
                        break
                    case "pais2":
                        Principal.atributos.player2.economia += 500
                        break
                    case "pais3":
                        Principal.atributos.player3.economia += 500
                        break
                    case "pais4":
                        Principal.atributos.player4.economia += 500
                        break
                }

                break
            case 28:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.opiniao_publica += 10
                        break
                    case "pais2":
                        Principal.atributos.player2.opiniao_publica += 10
                        break
                    case "pais3":
                        Principal.atributos.player3.opiniao_publica += 10
                        break
                    case "pais4":
                        Principal.atributos.player4.opiniao_publica += 10
                        break
                }
                

                break
            case 29:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao += 2
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao += 2
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao += 2
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao += 2
                        break
                }

                break
            case 30:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao += 5
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao += 5
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao += 5
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao += 5
                        break
                }

                break
            case 31:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao += 5
                        Principal.atributos.player1.opiniao_publica += 5
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao += 5
                        Principal.atributos.player2.opiniao_publica += 5
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao += 5
                        Principal.atributos.player3.opiniao_publica += 5
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao += 5
                        Principal.atributos.player4.opiniao_publica += 5
                        break
                }

                break
            case 32:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao += 5
                        Principal.atributos.player1.opiniao_publica += 5
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao += 5
                        Principal.atributos.player2.opiniao_publica += 5
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao += 5
                        Principal.atributos.player3.opiniao_publica += 5
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao += 5
                        Principal.atributos.player4.opiniao_publica += 5
                        break
                }

                break
            case 33:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao -= 5
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao -= 5
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao -= 5
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao -= 5
                        break
                }

                break
            case 34:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao -= 5
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao -= 5
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao -= 5
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao -= 5
                        break
                }

                break
            case 35:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao -= 5
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao -= 5
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao -= 5
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao -= 5
                        break
                }

                break
            case 36:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.opiniao_publica -= 5
                        break
                    case "pais2":
                        Principal.atributos.player2.opiniao_publica -= 5
                        break
                    case "pais3":
                        Principal.atributos.player3.opiniao_publica -= 5
                        break
                    case "pais4":
                        Principal.atributos.player4.opiniao_publica -= 5
                        break
                }

                break
            case 37:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao -= 5
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao -= 5
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao -= 5
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao -= 5
                        break
                }

                break
            case 38:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.economia -= 500
                        break
                    case "pais2":
                        Principal.atributos.player2.economia -= 500
                        break
                    case "pais3":
                        Principal.atributos.player3.economia -= 500
                        break
                    case "pais4":
                        Principal.atributos.player4.economia -= 500
                        break
                }

                break
            case 39:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao -= 5
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao -= 5
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao -= 5
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao -= 5
                        break
                }

                break
            case 40:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.economia -= 500
                        break
                    case "pais2":
                        Principal.atributos.player2.economia -= 500
                        break
                    case "pais3":
                        Principal.atributos.player3.economia -= 500
                        break
                    case "pais4":
                        Principal.atributos.player4.economia -= 500
                        break
                }

                break
            case 41:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.opiniao_publica -= 10
                        break
                    case "pais2":
                        Principal.atributos.player2.opiniao_publica -= 10
                        break
                    case "pais3":
                        Principal.atributos.player3.opiniao_publica -= 10
                        break
                    case "pais4":
                        Principal.atributos.player4.opiniao_publica -= 10
                        break
                }

                break
            case 42:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.populacao -= 5
                        Principal.atributos.player1.opiniao_publica -= 10
                        break
                    case "pais2":
                        Principal.atributos.player2.populacao -= 5
                        Principal.atributos.player2.opiniao_publica -= 10
                        break
                    case "pais3":
                        Principal.atributos.player3.populacao -= 5
                        Principal.atributos.player3.opiniao_publica -= 10
                        break
                    case "pais4":
                        Principal.atributos.player4.populacao -= 5
                        Principal.atributos.player4.opiniao_publica -= 10
                        break
                }

                break
            case 43:

                switch(usuario) {
                    case "pais1":
                        Principal.atributos.player1.economia -= 500
                        break
                    case "pais2":
                        Principal.atributos.player2.economia -= 500
                        break
                    case "pais3":
                        Principal.atributos.player3.economia -= 500
                        break
                    case "pais4":
                        Principal.atributos.player4.economia -= 500
                        break
                }

                break
            case 53:
                //alvo
                break
            default:
                console.log("Carta não localizada")
        }
    }
    reoladed(Principal.atributos)
}