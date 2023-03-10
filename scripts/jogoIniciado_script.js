let formulario = {
    quantPlayers: 0,
    cartasEvento: "",
    nomesPaises: []
}
const p1 = document.getElementById("pais1")
const p2 = document.getElementById("pais2")
const p3 = document.getElementById("pais3")
const p4 = document.getElementById("pais4")





;(function(){
    if(document.querySelector("#conteinerFormularioDeJogo")){
        document.querySelector("#conteinerFormularioDeJogo").addEventListener("click",function(event){   
            const id = event.target.id
            const botaoDePlayers = document.querySelectorAll(".quantPlayers")
            const botaoDeEvento = document.querySelectorAll(".eventButton")
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

                    visibleCoutryNames(2)
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

                    visibleCoutryNames(3)
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

                    visibleCoutryNames()
                    break
                case "event_sim":
                    formulario.cartasEvento = "ON"

                    ;[...botaoDeEvento].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })

                    document.querySelector("#event_sim").style.borderRadius = "10px"
                    document.querySelector("#event_nao").style.background = "brown"
                    document.querySelector("#event_sim").style.background = "rgb(45, 74, 75)"

                    visibleButtonPlay()

                    break
                case "event_nao":
                    formulario.cartasEvento = "OFF"
                    ;[...botaoDeEvento].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })

                    document.querySelector("#event_nao").style.borderRadius = "10px"
                    document.querySelector("#event_sim").style.background = "cadetblue"
                    document.querySelector("#event_nao").style.background = "rgb(88, 24, 24)"

                    visibleButtonPlay()

                    break
            }
        })

        function visibleCoutryNames(quantCountries) {
            const containerCountries = document.getElementById("CountryNamesConteiner")
            const allCountries = []
            const gameModeTwoCountries = []
            const gameModeTreeCountries = document.getElementById("player4")
            
            gameModeTwoCountries.push(document.getElementById("player3"))
            gameModeTwoCountries.push(document.getElementById("player4"))

            allCountries.push([...document.querySelectorAll(".definitionNames")])


            containerCountries.style.display = "flex"

            switch(quantCountries) {
                case 2:
                    gameModeTwoCountries.forEach(button => {
                        button.style.display = "none"
                    })
                    containerCountries.style.height = "200px"
                    break
                case 3:
                    allCountries.forEach(buttons => {
                        buttons.forEach(button => {
                            button.style.display = "flex"
                        })
                       
                    })
                    containerCountries.style.height = "265px"
                    gameModeTreeCountries.style.display = "none"

                    break
                default:
                    allCountries.forEach(buttons => {
                        buttons.forEach(button => {
                            button.style.display = "flex"
                        })
                       
                    })
                    containerCountries.style.height = "350px"
            }
        }

        function visibleButtonPlay() {
            document.getElementById("playGame").style.display = "block"
        }
        
        
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

