import  Telas  from "./Main.js"
import { carta } from "./useCards.js"

const botoesDeRetorno = document.querySelectorAll(".Aretornar")
const botaoHome = document.getElementById("Bsair")
const exitAlert = document.getElementById("exitAlert")

botoesDeRetorno[1].addEventListener('click',function(){
    Telas.telaFabricar.style.display = "none"
    Telas.telaFerramentas.style.display = "block"
})

botoesDeRetorno[2].addEventListener('click',function(){

    Telas.telaUsarCarta.style.display = "none"

    const containersPrincipaisCartas = document.querySelectorAll(".containersPrincipaisCartas")
    ;[...containersPrincipaisCartas].forEach(function(container) {
        container.style.display = "none"
    })

    document.getElementById("codigoCarta").value = ""

    carta.id = undefined
    carta.usuarioExibido = ""
    carta.usuario = ""
    carta.alvoExibido = ""
    carta.alvo = ""
    carta.afetados = ""
    carta.escolha = undefined
    carta.opicoes = false

    Telas.telaFerramentas.style.display = "block"
})

botoesDeRetorno[3].addEventListener('click',function(){
    Telas.telaRegras.style.display = "none"
    Telas.telaFerramentas.style.display = "block"
})


botoesDeRetorno[4].addEventListener("click",function(){
    for(let c = 0 ; c < 3 ; c++) {
        Telas.telasDasCartas[c].style.display = "none"
        Telas.telaFabricar.style.display = "block"
    }
})

botoesDeRetorno[5].addEventListener("click",function(){
    for(let c = 0 ; c < 3 ; c++) {
        Telas.telasDasCartas[c].style.display = "none"
        Telas.telaFabricar.style.display = "block"
    }
})

botoesDeRetorno[6].addEventListener("click",function(){
    for(let c = 0 ; c < 3 ; c++) {
        Telas.telasDasCartas[c].style.display = "none"
        Telas.telaFabricar.style.display = "block"
    }
})

botaoHome.addEventListener("click",function(){
    const paragSaida  = document.getElementById("paragSaida")
    const topContainer = document.getElementById("top-container")
    const botaoSim = document.getElementById("botaoSimSaida")
    const botaoNao = document.getElementById("botaoNaoSaida")
    const h1Evento = document.getElementById("evento")

    topContainer.style.marginBottom  = "50px"
    h1Evento.style.display = "none"
    setTimeout(function(){
        botaoSim.style.display = "inline-block"
        botaoNao.style.display = "inline-block"
        paragSaida.style.display = "block"
        }, 200);
    
    botaoHome.style.display = "none"
    exitAlert.style.display = "block"

    exitAlert.addEventListener("click",function(event){
        const id =  event.target.id
        
        switch(id)  {
            case "botaoSimSaida":
                window.location.href = "../index.html" 
                localStorage.clear()
                break
            case "botaoNaoSaida":
                exitAlert.style.display = "none"
                exitAlert.style.width = "30px" 
                botaoHome.style.display = "inline-block"
                topContainer.style.marginBottom  = "0px"
                h1Evento.style.display = "block"

                botaoSim.style.display = "none"
                botaoNao.style.display = "none"
                paragSaida.style.display = "none"
                break
        }
    })

})

export {botoesDeRetorno}