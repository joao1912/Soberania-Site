let formulario = {
    quantPlayers: 0,
    cartasEvento: "",
    nomesPaises: []
}
let p1 = document.getElementById("pais1").value
let p2 = document.getElementById("pais2").velue
let p3 = document.getElementById("pais3").velue
let p4 = document.getElementById("pais4").velue




;(function(){
    if(document.querySelector("#conteinerFormularioDeJogo")){
        document.querySelector("#conteinerFormularioDeJogo").addEventListener("click",function(event){   
            let id = event.target.id
            switch(id) {
                case "quant_2P":
                    formulario.quantPlayers = 2

                    break
                case "quant_3P":
                    formulario.quantPlayers = 3

                    break
                case "quant_4P":
                    formulario.quantPlayers = 4

                    break
                case "event_sim":
                    formulario.cartasEvento = "ON"

                    break
                case "event_nao":
                    formulario.cartasEvento = "OFF"

                    break
            }
        })
        //fazer verificação e colocar os nomes dos paises no array
        document.querySelector("#playGame").addEventListener("click",function(){
            if(true) {
                localStorage.setItem("formulario",JSON.stringify(formulario))
                formulario.nomesPaises.push(p1, p2, p2, p4)
                console.log(formulario.nomesPaises)
                //window.location.href = "pagina-jogoRodando.html"
            } else {

            }
        })
    }
    
})()

