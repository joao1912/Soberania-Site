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

    Swal.fire({
        title: 'Você tem certeza?',
        text: "Seu progresso não sera salvo!",
        cancelButtonText: 'Cancelar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, apague tudo!'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "../index.html" 
            localStorage.clear()
        }
      })


})

export {botoesDeRetorno}