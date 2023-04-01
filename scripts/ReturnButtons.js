export {botoesDeRetorno}

const botoesDeRetorno = document.querySelectorAll(".Aretornar")

botoesDeRetorno[1].addEventListener('click',function(){
telaFabricar.style.display = "none"
telaFerramentas.style.display = "block"
})

botoesDeRetorno[2].addEventListener('click',function(){
telaUsarCarta.style.display = "none"
telaFerramentas.style.display = "block"
})

botoesDeRetorno[3].addEventListener('click',function(){
telaRegras.style.display = "none"
telaFerramentas.style.display = "block"
})

botoesDeRetorno[4].addEventListener("click",function(){
    for(let c = 0 ; c < 3 ; c++) {
        telasDasCartas[c].style.display = "none"
        telaFabricar.style.display = "block"
    }
})

botoesDeRetorno[5].addEventListener("click",function(){
    for(let c = 0 ; c < 3 ; c++) {
        telasDasCartas[c].style.display = "none"
        telaFabricar.style.display = "block"
    }
})

botoesDeRetorno[6].addEventListener("click",function(){
    for(let c = 0 ; c < 3 ; c++) {
        telasDasCartas[c].style.display = "none"
        telaFabricar.style.display = "block"
    }
})
