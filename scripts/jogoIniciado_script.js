let formulario = {
    quantPlayers: 0,
    cartasEvento: "",
    nomesPaises: []
}
let p1 = document.getElementById("pais1")
let p2 = document.getElementById("pais2")
let p3 = document.getElementById("pais3")
let p4 = document.getElementById("pais4")





;(function(){
    if(document.querySelector("#conteinerFormularioDeJogo")){
        document.querySelector("#conteinerFormularioDeJogo").addEventListener("click",function(event){   
            let id = event.target.id
            let botaoDePlayers = document.querySelectorAll(".quantPlayers")
            switch(id) {
                case "quant_2P":
                    formulario.quantPlayers = 2
                    ;[...botaoDePlayers].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })
        
                    document.getElementById("quant_2P").style.background = "rgb(45, 74, 75)"
                    document.getElementById("quant_2P").style.borderRadius = "10px"
                    document.getElementById("quant_3P").style.background = "brown"
                    document.getElementById("quant_4P").style.background = "coral"

                    break
                case "quant_3P":
                    formulario.quantPlayers = 3
                    ;[...botaoDePlayers].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })

                    document.getElementById("quant_2P").style.background = "cadetblue"
                    document.getElementById("quant_3P").style.background = "rgb(88, 24, 24)"
                    document.getElementById("quant_3P").style.borderRadius = "10px"
                    document.getElementById("quant_4P").style.background = "coral"

                    break
                case "quant_4P":
                    formulario.quantPlayers = 4
                    ;[...botaoDePlayers].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })

                    document.getElementById("quant_2P").style.background = "cadetblue"
                    document.getElementById("quant_3P").style.background = "brown"
                    document.getElementById("quant_4P").style.background = "rgb(145, 73, 47)"
                    document.getElementById("quant_4P").style.borderRadius = "10px"

                    break
                case "event_sim":
                    formulario.cartasEvento = "ON"

                    break
                case "event_nao":
                    formulario.cartasEvento = "OFF"

                    break
            }
        })
        
        
        document.querySelector("#playGame").addEventListener("click",function(){
            if(true) {
                formulario.nomesPaises.push(p1.value) 
                formulario.nomesPaises.push(p2.value) 
                formulario.nomesPaises.push(p3.value) 
                formulario.nomesPaises.push(p4.value) 
                localStorage.setItem("formulario",JSON.stringify(formulario))
                window.location.href = "pagina-jogoRodando.html"
            } else {

            }
        })
    }
    
})()

