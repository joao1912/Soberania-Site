export {quantPlayers, cartasEvento}

;(function(){
    if(document.querySelector("#conteinerFormularioDeJogo")){
        document.querySelector("#conteinerFormularioDeJogo").addEventListener("click",function(event){   
            let id = event.target.id
            switch(id) {
                case "quant_2P":
                    quantPlayers = 2

                    break
                case "quant_3P":
                    quantPlayers = 3

                        break
                    case "quant_4P":
                        quantPlayers = 4

                        break
                    case "event_sim":
                        cartasEvento = "ON"

                        break
                    case "event_nao":
                        cartasEvento = "OFF"

                        break
                }
        })

        document.querySelector("#playGame").addEventListener("click",function(){
            if(true) {
                window.location.href = "pagina-jogoRodando.html"
            } else {

            }
        })
    }
    
})()
var quantPlayers = 0
var cartasEvento = "" //os dados estao indo formatados, ou seja 0 e ""

