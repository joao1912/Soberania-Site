import { botoesDeRetorno } from "./ReturnButtons.js"
import { setQuantTablesTransfer } from "./Cleaner.js"
import { setQuantPlayers } from "./Cleaner.js"
import { botaoTransfer } from "./Economy.js"

let formulario = {}
try {
    formulario = JSON.parse(localStorage.getItem("formulario"))
} catch(e) {
    formulario = {
        quantPlayers: 4,
        cartasEvento: "OFF",
        nomesPaises: ["Pais 1", "Pais 2", "Pais 3", "Pais 4",]
    }
}

/* --------------------------------------------- */
    /* Configurações importantes*/ 
    let dadosFormulario = {
        QuantidadeJogadores: formulario.quantPlayers,
        eventCards: formulario.cartasEvento,
        Paises: formulario.nomesPaises
    }
/* --------------------------------------------- */

if(dadosFormulario.eventCards === "ON") {
    document.getElementById("evento").style.display = "block"
}

setQuantTablesTransfer(dadosFormulario.QuantidadeJogadores)


let atributos = dados()
function dados() {
    
    try {
        if(JSON.parse(localStorage.getItem("atributos")) !== null) {
            return JSON.parse(localStorage.getItem("atributos"))
        } else {
            return {
                player1: {
                    populacao: 50,
                    militar: 5,
                    economia: 10000,
                    opiniao_publica: 100
                },
            
                player2: {
                    populacao: 50,
                    militar: 5,
                    economia: 10000,
                    opiniao_publica: 100
                },
            
                player3: {
                    populacao: 50,
                    militar: 5,
                    economia: 10000,
                    opiniao_publica: 100
                },
                player4: {
                    populacao: 50,
                    militar: 5,
                    economia: 10000,
                    opiniao_publica: 100
                },
            }
        }
    } catch(e) {
        return {
            player1: {
                populacao: 50,
                militar: 5,
                economia: 10000,
                opiniao_publica: 100
            },
        
            player2: {
                populacao: 50,
                militar: 5,
                economia: 10000,
                opiniao_publica: 100
            },
        
            player3: {
                populacao: 50,
                militar: 5,
                economia: 10000,
                opiniao_publica: 100
            },
            player4: {
                populacao: 50,
                militar: 5,
                economia: 10000,
                opiniao_publica: 100
            },
        }
    }
}

function setDataAttributes() {
    return localStorage.setItem("atributos", JSON.stringify(atributos))
}

function reoladed(objAtributos) {

    document.getElementById("DadosJogadores").innerHTML = `
    <h1>Status</h1>
    <section class="status" id="pais1">
        <h2>${dadosFormulario.Paises[0]}</h2>
        <p id="populacao_P1">População: <strong>${objAtributos.player1.populacao}/50</strong></p> 
        <p id="militar_P1">Militar: <strong>${objAtributos.player1.militar}/15</strong></p>
        <p id="economia_P1">Economia: <strong>$ ${objAtributos.player1.economia}</strong></p>
        <p id="op_P1">Opinião publica: <strong>${objAtributos.player1.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais2">
        <h2>${dadosFormulario.Paises[1]}</h2>
        <p id="populacao_P2">População: <strong>${objAtributos.player2.populacao}/50</strong></p>
        <p id="militar_P2">Militar: <strong>${objAtributos.player2.militar}/15</strong></p>
        <p id="economia_P2">Economia: <strong>$ ${objAtributos.player2.economia}</strong></p>
        <p id="op_P2">Opinião publica: <strong>${objAtributos.player2.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais3">
        <h2>${dadosFormulario.Paises[2]}</h2>
        <p id="populacao_P3">População: <strong>${objAtributos.player3.populacao}/50</strong></p>
        <p id="militar_P3">Militar: <strong>${objAtributos.player3.militar}/15</strong></p>
        <p id="economia_P3">Economia: <strong>$ ${objAtributos.player3.economia}</strong></p>
        <p id="op_P3">Opinião publica: <strong>${objAtributos.player3.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais4">
        <h2>${dadosFormulario.Paises[3]}</h2>
        <p id="populacao_P4">População: <strong>${objAtributos.player4.populacao}/50</strong></p>
        <p id="militar_P4">Militar: <strong>${objAtributos.player4.militar}/15</strong></p>
        <p id="economia_P4">Economia: <strong>$ ${objAtributos.player4.economia}</strong></p>
        <p id="op_P4">Opinião publica: <strong>${objAtributos.player4.opiniao_publica}/100</strong></p>
    </section>
    `

    const CountryNegativeTable_P1 = document.getElementById("pais1_negativo")
    const CountryNegativeTable_P2 = document.getElementById("pais2_negativo")
    const CountryNegativeTable_P3 = document.getElementById("pais3_negativo")
    const CountryNegativeTable_P4 = document.getElementById("pais4_negativo")

    const CountryPositiveTable_P1 = document.getElementById("pais1_positivo")
    const CountryPositiveTable_P2 = document.getElementById("pais2_positivo")
    const CountryPositiveTable_P3 = document.getElementById("pais3_positivo")
    const CountryPositiveTable_P4 = document.getElementById("pais4_positivo")

    switch(dadosFormulario.QuantidadeJogadores) {
        case 2:
            CountryNegativeTable_P1.textContent = dadosFormulario.Paises[0]
            CountryNegativeTable_P2.textContent = dadosFormulario.Paises[1]

            CountryPositiveTable_P1.textContent = dadosFormulario.Paises[0]
            CountryPositiveTable_P2.textContent = dadosFormulario.Paises[1]
            break

        case 3:
            CountryNegativeTable_P1.textContent = dadosFormulario.Paises[0]
            CountryNegativeTable_P2.textContent = dadosFormulario.Paises[1]
            CountryNegativeTable_P3.textContent = dadosFormulario.Paises[2]

            CountryPositiveTable_P1.textContent = dadosFormulario.Paises[0]
            CountryPositiveTable_P2.textContent = dadosFormulario.Paises[1]
            CountryPositiveTable_P3.textContent = dadosFormulario.Paises[2]
            break

        case 4:
            CountryNegativeTable_P1.textContent = dadosFormulario.Paises[0]
            CountryNegativeTable_P2.textContent = dadosFormulario.Paises[1]
            CountryNegativeTable_P3.textContent = dadosFormulario.Paises[2]
            CountryNegativeTable_P4.textContent = dadosFormulario.Paises[3]

            CountryPositiveTable_P1.textContent = dadosFormulario.Paises[0]
            CountryPositiveTable_P2.textContent = dadosFormulario.Paises[1]
            CountryPositiveTable_P3.textContent = dadosFormulario.Paises[2]
            CountryPositiveTable_P4.textContent = dadosFormulario.Paises[3]
    }

    setQuantPlayers()
    setDataAttributes()
}

reoladed(atributos)


const telaFerramentas = document.getElementById("ferramentas")
const telaEconomia = document.getElementById("telaEconomia")
const telaFabricar = document.getElementById("telaFabricar")
const telaUsarCarta = document.getElementById("telaUsarCarta")
const telaRegras = document.getElementById("telaRegras")

telaFerramentas.addEventListener("click",function(event){
    let botao = event.target.id
    switch(botao) {
        case "economia":
            telaFerramentas.style.display = "none"
            telaEconomia.style.display = "block"
            break
        case "fabricarCard":
            telaFerramentas.style.display = "none"
            telaFabricar.style.display = "block"
            break
        case "usarCard":
            telaFerramentas.style.display = "none"
            telaUsarCarta.style.display = "block"
            break
        case "regras":
            telaFerramentas.style.display = "none"
            telaRegras.style.display = "block"
            break
    }

})

const telasDasCartas = document.querySelectorAll(".botoesExtrasCartas")
;(function(){

    document.getElementById("menuIcone1").addEventListener("click",function(){
        const menu = document.querySelector("#selecionarPais1")
        
        if(menu.style.visibility == "hidden") {
            menu.style.visibility = "visible"
            botaoTransfer.style.visibility = "hidden"

        } else {
            menu.style.visibility = "hidden"
            botaoTransfer.style.visibility = "visible"
        }
    })

    document.getElementById("menuIcone2").addEventListener("click",function(){
        const menu = document.querySelector("#selecionarPais2")

        if(menu.style.visibility == "hidden") {
            menu.style.visibility = "visible"
            botaoTransfer.style.visibility = "hidden"
        } else {
            menu.style.visibility = "hidden"
            botaoTransfer.style.visibility = "visible"
        }
    })

    /* usar carta */

    document.getElementById("menuUsarCarta").addEventListener("click",function(){
        const listCountry = document.getElementById("paisesUsarCarta")
        const botaoPronto = document.getElementById("botaoProntoUsarCarta")

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

        switch(id) {
            case "pais1":
               
                break
            case "pais2":

                break
            case "pais3":

                break
            case "pais4":

                break
            
        }
    })
    

    const economiaAtualPais = document.querySelectorAll(".infoPais")
    
    botoesDeRetorno[0].addEventListener('click',function(){
    telaEconomia.style.display = "none"
    telaFerramentas.style.display = "block"
    economiaAtualPais[0].innerHTML = "$ - "
    economiaAtualPais[1].innerHTML = "$ - "
    economiaPositivo = ""
    economiaNegativo = ""
    transfer = 0
    document.querySelector(".textoMoney").value = ""
    document.querySelector("#selecionarPais1").style.visibility = "hidden"
    document.querySelector("#selecionarPais2").style.visibility = "hidden"

    })

    const telaFabricar = document.querySelector("#telaFabricar")
    const botoesFabricarCartas = document.querySelector("#telaBotoesExtras")
    
    botoesFabricarCartas.addEventListener("click",function(event){
        const botao = event.target.id
        
        const telaMultiplicador = document.querySelector("#telaCartaMultiplicador")
        const telaConstrucao = document.querySelector("#telaCartaContrucao")
        const telaObjetivos = document.querySelector("#telaCartaObjetivos")
        
        switch(botao) {
            case "cartasMultiplicador":
                telaFabricar.style.display = "none"
                telaMultiplicador.style.display = "block"
                break
            case "cartasConstrucao":
                telaFabricar.style.display = "none"
                telaConstrucao.style.display = "block"
                break
            case "cartasObjetivos":
                telaFabricar.style.display = "none"
                telaObjetivos.style.display = "block"
                break
        }
    })

})()

export {dadosFormulario}
export {reoladed}
export default {telaFerramentas, telaEconomia, telaFabricar, telaUsarCarta, telaRegras, telasDasCartas , atributos}