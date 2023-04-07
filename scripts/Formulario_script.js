let formulario = {
    quantPlayers: 0,
    cartasEvento: "",
    nomesPaises: []
}
const p1 = document.getElementById("pais1")
const p2 = document.getElementById("pais2")
const p3 = document.getElementById("pais3")
const p4 = document.getElementById("pais4")

let error = [0,""]

;(function(){
    if(document.querySelector("#conteinerFormularioDeJogo")){
        document.querySelector("#conteinerFormularioDeJogo").addEventListener("click",function(event){   
            const id = event.target.id
            const botaoDePlayers = document.querySelectorAll(".quantPlayers")
            const botaoDeEvento = document.querySelectorAll(".eventButton")
            const botaoDoisPlayers = document.getElementById("quant_2P")
            const botaoTresPlayers = document.getElementById("quant_3P")
            const botaoQuatroPlayers = document.getElementById("quant_4P")

            const botaoEventoSim = document.querySelector("#event_sim")
            const botaoEventoNao = document.querySelector("#event_nao")
            switch(id) {
                case "quant_2P":
                    formulario.quantPlayers = 2
                    ;[...botaoDePlayers].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })
        
                    botaoDoisPlayers.style.background = "rgb(45, 74, 75)"
                    botaoDoisPlayers.style.borderRadius = "10px"
                    botaoTresPlayers.style.background = "brown"
                    botaoQuatroPlayers.style.background = "coral"

                    visibleCoutryNames(2)
                    break
                case "quant_3P":
                    formulario.quantPlayers = 3
                    ;[...botaoDePlayers].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })

                    botaoDoisPlayers.style.background = "cadetblue"
                    botaoTresPlayers.style.background = "rgb(88, 24, 24)"
                    botaoTresPlayers.style.borderRadius = "10px"
                    botaoQuatroPlayers.style.background = "coral"

                    visibleCoutryNames(3)
                    break
                case "quant_4P":
                    formulario.quantPlayers = 4
                    ;[...botaoDePlayers].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })

                    botaoDoisPlayers.style.background = "cadetblue"
                    botaoTresPlayers.style.background = "brown"
                    botaoQuatroPlayers.style.background = "rgb(145, 73, 47)"
                    botaoQuatroPlayers.style.borderRadius = "10px"

                    visibleCoutryNames()
                    break
                case "event_sim":
                    formulario.cartasEvento = "ON"

                    ;[...botaoDeEvento].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })

                    botaoEventoSim.style.borderRadius = "10px"
                    botaoEventoNao.style.background = "brown"
                    botaoEventoSim.style.background = "rgb(45, 74, 75)"

                    visibleButtonPlay()

                    break
                case "event_nao":
                    formulario.cartasEvento = "OFF"
                    ;[...botaoDeEvento].forEach( elemento => {
                        elemento.style.borderRadius = "0px"
                    })

                    botaoEventoNao.style.borderRadius = "10px"
                    botaoEventoSim.style.background = "cadetblue"
                    botaoEventoNao.style.background = "rgb(88, 24, 24)"

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
            visibleButtonPlay()
        }

        function visibleButtonPlay() {
            if(formulario.quantPlayers && formulario.cartasEvento) {
               document.getElementById("playGame").style.display = "block" 
            }
        }
        
        
        document.querySelector("#playGame").addEventListener("click",function(){
            const inputCountry = document.querySelectorAll(".inputCountry")
            let valoresPaises = [p1.value, p2.value, p3.value, p4.value]
            const caracterMinimos = 4

            switch(formulario.quantPlayers) {
                case 2:

                    for(let c = 0 ; c < 2 ; c++) {
                        if(inputCountry[c].value === "") {
                            error = [1, "#input-vazio#"]
                        } else if(inputCountry[c].value.length < caracterMinimos) {
                            error = [1, "#pouco-caracter#"]
                        } 
                    }

                    if(error.indexOf(1) !== -1) {
                        detecErro(...error)
                        break
                    }

                    for(let c = 0 ; c <= 1 ; c++) {
                        formulario.nomesPaises.push(valoresPaises[c].toLowerCase())
                    }
                    play()

                    break
                case 3:
                    for(let c = 0 ; c < 3 ; c++) {
                        if(inputCountry[c].value === "") {
                            error = [1, "#input-vazio#"]
                        } else if(inputCountry[c].value.length < caracterMinimos) {
                            error = [1, "#pouco-caracter#"]
                        } 
                    }

                    if(error.indexOf(1) !== -1) {
                        detecErro(...error)
                        break
                    }

                    for(let c = 0 ; c <= 2 ; c++) {
                        formulario.nomesPaises.push(valoresPaises[c].toLowerCase())
                    }
                    play()

                    break
                case 4:

                    ;[...inputCountry].forEach(function(input){
                        if(input.value === "") {
                            error = [1, "#input-vazio#"]
                        } else if(input.value.length < caracterMinimos) {
                            error = [1, "#pouco-caracter#"]
                        } 
                    })

                    if(error.indexOf(1) !== -1) {
                        detecErro(...error)
                        break
                    }
                    
                    for(let c = 0 ; c <= 3 ; c++) {
                        formulario.nomesPaises.push(valoresPaises[c].toLowerCase())
                    }
                    play()
                    
                    break
            }

        })
    }

    function detecErro(cod,erro) {
        document.querySelector("#playGame").style.display = "none"
        let telaError = document.querySelector("#erros")
        telaError.style.display = "block"
        switch(erro) {
            case "#input-vazio#":
                telaError.innerHTML = "Preencha os nomes"
                break
            case "#pouco-caracter#":
                telaError.innerHTML = "Mínimo 4 caracteres"
                break
        }
        setTimeout(function(){
            telaError.style="display:none"
            document.querySelector("#playGame").style.display = "block"
            }, 3000);

        error = [0, ""]
    }

    function play() {
        localStorage.setItem("formulario",JSON.stringify(formulario))
        window.location.href = "./pagina-JogoRodando.html"
    }
    
})()