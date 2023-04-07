import  Telas  from "./Main.js"

const botoesDeRetorno = document.querySelectorAll(".Aretornar")

botoesDeRetorno[1].addEventListener('click',function(){
    Telas.telaFabricar.style.display = "none"
    Telas.telaFerramentas.style.display = "block"
})

botoesDeRetorno[2].addEventListener('click',function(){
    Telas.telaUsarCarta.style.display = "none"
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

export {botoesDeRetorno}