


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
    const listCountry = document.getElementById("paisesUsarCarta")
    const botaoPronto = document.getElementById("botaoProntoUsarCarta")

    listCountry.style.display = "none"
    botaoPronto.style.display = "inline-block"


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

document.getElementById("menuAlvoCartas").addEventListener("click",function(){
    const listCountry = document.getElementById("paisesAlvos")
    const botaoUsar = document.getElementsByClassName("botaoUsar")[0]

    if (listCountry.style.display == "none") {
        botaoUsar.style.display = "none"
        listCountry.style.display = "inline-block"
    } else {
        listCountry.style.display = "none"
        botaoUsar.style.display = "block"
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