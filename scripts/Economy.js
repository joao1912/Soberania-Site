import Principal from "./Main.js"
import { Erros } from "./Error.js"
import { reoladed } from "./Main.js"

const economiaAtualPais = document.querySelectorAll(".infoPais")
const botaoTransfer = document.querySelector(".botaoTransfer")
const selecaoPais1 = document.querySelector("#selecionarPais1")
const selecaoPais2 = document.querySelector("#selecionarPais2")
let economiaPositivo = ""
let economiaNegativo = ""
let transfer = 0
let economyError = []

selecaoPais1.addEventListener("click",function(event){
    const pais = event.target.id
    switch(pais) {
        case "pais1_negativo": 
            selecaoPais1.style.visibility = "hidden"
           economiaAtualPais[0].textContent = Principal.atributos.player1.economia
            botaoTransfer.style.visibility = "visible"
            economiaNegativo = "pais1"
            break
        case "pais2_negativo": 
            selecaoPais1.style.visibility = "hidden"
            economiaAtualPais[0].textContent = Principal.atributos.player2.economia
            botaoTransfer.style.visibility = "visible"
            economiaNegativo = "pais2"
            break
        case "pais3_negativo": 
            selecaoPais1.style.visibility = "hidden"
            economiaAtualPais[0].textContent = Principal.atributos.player3.economia
            botaoTransfer.style.visibility = "visible"
            economiaNegativo = "pais3"
            break
        case "pais4_negativo": 
            selecaoPais1.style.visibility = "hidden"
            economiaAtualPais[0].textContent =  Principal.atributos.player4.economia
            botaoTransfer.style.visibility = "visible"
            economiaNegativo = "pais4"
            break
        case "banco_negativo":
            selecaoPais1.style.visibility = "hidden"
            economiaAtualPais[0].textContent = "$$$$$$"
            botaoTransfer.style.visibility = "visible"
            economiaNegativo = "banco"
            break
    }
})

selecaoPais2.addEventListener("click",function(event){
    const pais = event.target.id

    switch(pais) {
        case "pais1_positivo":
            selecaoPais2.style.visibility = "hidden"
            economiaAtualPais[1].textContent = Principal.atributos.player1.economia
            botaoTransfer.style.visibility = "visible"
            economiaPositivo = "pais1" 
            break
        case "pais2_positivo":
            selecaoPais2.style.visibility = "hidden"
            economiaAtualPais[1].textContent = Principal.atributos.player2.economia
            botaoTransfer.style.visibility = "visible"
            economiaPositivo = "pais2"
            break
        case "pais3_positivo":
            selecaoPais2.style.visibility = "hidden"
            economiaAtualPais[1].textContent = Principal.atributos.player3.economia
            botaoTransfer.style.visibility = "visible"
            economiaPositivo = "pais3"
            break
        case "pais4_positivo":
            selecaoPais2.style.visibility = "hidden"
            economiaAtualPais[1].textContent = Principal.atributos.player4.economia
            botaoTransfer.style.visibility = "visible"
            economiaPositivo = "pais4"
            break
        case "banco_positivo":
            selecaoPais2.style.visibility = "hidden"
            economiaAtualPais[1].textContent = "$$$$$$"
            botaoTransfer.style.visibility = "visible"
            economiaPositivo = "banco"
            break
    }
})

botaoTransfer.addEventListener("click",function(){ 
    let dinheiroAtual_negativo = document.querySelectorAll(".infoPais")[0]
    let dinheiroAtual_positivo = document.querySelectorAll(".infoPais")[1]
    let valorT = Number(document.querySelector(".textoMoney").value)

    if(economiaNegativo === economiaPositivo || economiaNegativo === "" || economiaPositivo === "") {
        
        economyError = [1,"#pagamento_invalido#"]
        Erros(...economyError)
        economyError = []
        
    } else if(valorT == "" || valorT < 0) {

        economyError = [1,"#valor_invalido#"]
        Erros(...economyError)
        economyError = []

    } else if(typeof valorT !== "number") {
        
        economyError = [1,"#apenas_numeros#"]
        Erros(...economyError)
        economyError = []

    } else {
        
        transfer = Number(document.querySelector(".textoMoney").value)
        switch(economiaNegativo) {
            case "pais1":
                if(transfer > Principal.atributos.player1.economia) {
                    economyError = [1,"#saldo_insuficiente#"]
                    break
                }
                Principal.atributos.player1.economia -= transfer
                dinheiroAtual_negativo.innerHTML = Principal.atributos.player1.economia
                reoladed(Principal.atributos)
                
                break
            case "pais2":
                if(transfer > Principal.atributos.player2.economia) {
                    economyError = [1,"#saldo_insuficiente#"]
                    break
                }
                Principal.atributos.player2.economia -= transfer
                dinheiroAtual_negativo.innerHTML = Principal.atributos.player2.economia
                reoladed(Principal.atributos)
                
                break
            case "pais3":
                if(transfer > Principal.atributos.player3.economia) {
                    economyError = [1,"#saldo_insuficiente#"]
                    break
                }
                Principal.atributos.player3.economia -= transfer
                dinheiroAtual_negativo.innerHTML = Principal.atributos.player3.economia
                reoladed(Principal.atributos)
                
                break
            case "pais4":
                if(transfer > Principal.atributos.player4.economia) {
                    economyError = [1,"#saldo_insuficiente#"] 
                    break
                }
                Principal.atributos.player4.economia -= transfer
                dinheiroAtual_negativo.innerHTML = Principal.atributos.player4.economia
                reoladed(Principal.atributos)
                
                break
                default:
        }
        
        switch(economiaPositivo) {
            case "pais1":
                
                if(economyError.indexOf(1) !== -1) {
                    Erros(...economyError)
                    economyError = []
                    break
                }
                Principal.atributos.player1.economia += transfer
                dinheiroAtual_positivo.innerHTML = Principal.atributos.player1.economia
                reoladed(Principal.atributos)
                
                break

            case "pais2":

                if(economyError.indexOf(1) !== -1) {
                    Erros(...economyError)
                    economyError = []
                    break
                }
                Principal.atributos.player2.economia += transfer
                dinheiroAtual_positivo.innerHTML = Principal.atributos.player2.economia
                reoladed(Principal.atributos)
                
                break
            case "pais3":
                if(economyError.indexOf(1) !== -1) {

                    Erros(...economyError)
                    economyError = []
                    break
                }
                Principal.atributos.player3.economia += transfer
                dinheiroAtual_positivo.innerHTML = Principal.atributos.player3.economia
                reoladed(Principal.atributos)
                
                break
            case "pais4":

                if(economyError.indexOf(1) !== -1) {
                    Erros(...economyError)
                    economyError = []
                    break
                }
                Principal.atributos.player4.economia += transfer
                dinheiroAtual_positivo.innerHTML = Principal.atributos.player4.economia
                reoladed(Principal.atributos)
                
                break
            default:
        }
    }
    document.querySelector(".textoMoney").value = ""
})

export {botaoTransfer}