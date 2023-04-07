import { dadosFormulario } from "./Main.js"

function setQuantPlayers(){
    switch(dadosFormulario.QuantidadeJogadores) {
        case 2:
            document.getElementById("pais3").remove()
            document.getElementById("pais4").remove()
            break
        case 3:
            document.getElementById("pais4").remove()
            break
        default:
    }
    
}

function setQuantTablesTransfer(quantPlayers) {
    const conteinerPlayersTransfer_negativo = document.querySelector("#selecionarPais1")
    const conteinerPlayersTransfer_positivo = document.querySelector("#selecionarPais2")
    const ul_negativo = conteinerPlayersTransfer_negativo.firstElementChild
    const ul_positivo = conteinerPlayersTransfer_positivo.firstElementChild

    const pais3_negativo = ul_negativo.firstElementChild.nextElementSibling.nextElementSibling
    const pais4_negativo = ul_negativo.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
    
    const pais3_positivo = ul_positivo.firstElementChild.nextElementSibling.nextElementSibling
    const pais4_positivo = ul_positivo.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
    
    if (quantPlayers === 2) {
        pais3_negativo.remove()
        pais4_negativo.remove()

        pais3_positivo.remove()
        pais4_positivo.remove()

    } else if(quantPlayers === 3) {
        pais4_negativo.remove()

        pais4_positivo.remove()
    }
}

export {setQuantTablesTransfer}
export {setQuantPlayers}