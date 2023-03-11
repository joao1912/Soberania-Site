
const botaoHome = document.getElementById("Bsair")
botaoHome.addEventListener("click",function(){
    let sair = confirm("Você ira perder todo progresso, deseja sair?")
    if(sair) { 
        window.location.href = "../index.html" 
        localStorage.clear()
    } 
})

let formulario = {}
try {
    formulario = JSON.parse(localStorage.getItem("formulario"))
} catch(e) {
    formulario = {
        quantPlayers: 4,
        cartasEvento: "OFF",
        nomesPaises: ["Pais 1", "Pais 2", "Pais 3", "Pais 4",]
    }
}


/* --------------------------------------------- */
    /* Configurações importantes*/ 
    var dadosFormulario = {
        QuantidadeJogadores: formulario.quantPlayers,
        eventCards: formulario.cartasEvento,
        Paises: formulario.nomesPaises
    }
    let CodigoErro = ""
/* --------------------------------------------- */

if(dadosFormulario.eventCards === "ON") {
    document.getElementById("evento").style.display = "block"
}

let atributos = dados()
function dados() {
    
    try {
        if(JSON.parse(localStorage.getItem("atributos")) !== null) {
            return JSON.parse(localStorage.getItem("atributos"))
        } else {
            return {
                player1: {
                    populacao: 50,
                    militar: 5,
                    economia: 10000,
                    opiniao_publica: 100
                },
            
                player2: {
                    populacao: 50,
                    militar: 5,
                    economia: 10000,
                    opiniao_publica: 100
                },
            
                player3: {
                    populacao: 50,
                    militar: 5,
                    economia: 10000,
                    opiniao_publica: 100
                },
                player4: {
                    populacao: 50,
                    militar: 5,
                    economia: 10000,
                    opiniao_publica: 100
                },
            }
        }
    } catch(e) {
        return {
            player1: {
                populacao: 50,
                militar: 5,
                economia: 10000,
                opiniao_publica: 100
            },
        
            player2: {
                populacao: 50,
                militar: 5,
                economia: 10000,
                opiniao_publica: 100
            },
        
            player3: {
                populacao: 50,
                militar: 5,
                economia: 10000,
                opiniao_publica: 100
            },
            player4: {
                populacao: 50,
                militar: 5,
                economia: 10000,
                opiniao_publica: 100
            },
        }
    }
}

function setQuantPlayers(){
    switch(dadosFormulario.QuantidadeJogadores) {
        case 2:
            document.getElementById("pais3").remove()
            document.getElementById("pais4").remove()
            break
        case 3:
            document.getElementById("pais4").remove()
            break
        default:
    }
    setQuantTablesTransfer(dadosFormulario.QuantidadeJogadores)
}

function setQuantTablesTransfer(quantPlayers) {
    const conteinerPlayersTransfer_negativo = document.querySelector("#selecionarPais1")
    const conteinerPlayersTransfer_positivo = document.querySelector("#selecionarPais2")
    const ul_negativo = conteinerPlayersTransfer_negativo.firstElementChild
    const ul_positivo = conteinerPlayersTransfer_positivo.firstElementChild

    const pais3_negativo = ul_negativo.firstElementChild.nextElementSibling.nextElementSibling
    const pais4_negativo = ul_negativo.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
    
    const pais3_positivo = ul_positivo.firstElementChild.nextElementSibling.nextElementSibling
    const pais4_positivo = ul_positivo.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
    
    if (quantPlayers === 2) {
        pais3_negativo.remove()
        pais4_negativo.remove()

        pais3_positivo.remove()
        pais4_positivo.remove()

        conteinerPlayersTransfer_negativo.style.height = "75px"
        conteinerPlayersTransfer_positivo.style.height = "75px"
    } else if(quantPlayers === 3) {
        pais4_negativo.remove()

        pais4_positivo.remove()

        conteinerPlayersTransfer_negativo.style.height = "100px"
        conteinerPlayersTransfer_positivo.style.height = "100px"
    }
}

function setDataAttributes() {
    return localStorage.setItem("atributos", JSON.stringify(atributos))
}

function reoladed(objAtributos) {

    document.getElementById("DadosJogadores").innerHTML = `
    <h1>Status</h1>
    <section class="status" id="pais1">
        <h2>${dadosFormulario.Paises[0]}</h2>
        <p id="populacao_P1">População: <strong>${objAtributos.player1.populacao}/50</strong></p> 
        <p id="militar_P1">Militar: <strong>${objAtributos.player1.militar}/15</strong></p>
        <p id="economia_P1">Economia: <strong>$ ${objAtributos.player1.economia}</strong></p>
        <p id="op_P1">Opinião publica: <strong>${objAtributos.player1.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais2">
        <h2>${dadosFormulario.Paises[1]}</h2>
        <p id="populacao_P2">População: <strong>${objAtributos.player2.populacao}/50</strong></p>
        <p id="militar_P2">Militar: <strong>${objAtributos.player2.militar}/15</strong></p>
        <p id="economia_P2">Economia: <strong>$ ${objAtributos.player2.economia}</strong></p>
        <p id="op_P2">Opinião publica: <strong>${objAtributos.player2.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais3">
        <h2>${dadosFormulario.Paises[2]}</h2>
        <p id="populacao_P3">População: <strong>${objAtributos.player3.populacao}/50</strong></p>
        <p id="militar_P3">Militar: <strong>${objAtributos.player3.militar}/15</strong></p>
        <p id="economia_P3">Economia: <strong>$ ${objAtributos.player3.economia}</strong></p>
        <p id="op_P3">Opinião publica: <strong>${objAtributos.player3.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais4">
        <h2>${dadosFormulario.Paises[3]}</h2>
        <p id="populacao_P4">População: <strong>${objAtributos.player4.populacao}/50</strong></p>
        <p id="militar_P4">Militar: <strong>${objAtributos.player4.militar}/15</strong></p>
        <p id="economia_P4">Economia: <strong>$ ${objAtributos.player4.economia}</strong></p>
        <p id="op_P4">Opinião publica: <strong>${objAtributos.player4.opiniao_publica}/100</strong></p>
    </section>
    `

    const CountryNegativeTable_P1 = document.getElementById("pais1_negativo")
    const CountryNegativeTable_P2 = document.getElementById("pais2_negativo")
    const CountryNegativeTable_P3 = document.getElementById("pais3_negativo")
    const CountryNegativeTable_P4 = document.getElementById("pais4_negativo")

    const CountryPositiveTable_P1 = document.getElementById("pais1_positivo")
    const CountryPositiveTable_P2 = document.getElementById("pais2_positivo")
    const CountryPositiveTable_P3 = document.getElementById("pais3_positivo")
    const CountryPositiveTable_P4 = document.getElementById("pais4_positivo")

    CountryNegativeTable_P1.textContent = dadosFormulario.Paises[0]
    CountryNegativeTable_P2.textContent = dadosFormulario.Paises[1]
    CountryNegativeTable_P3.textContent = dadosFormulario.Paises[2]
    CountryNegativeTable_P4.textContent = dadosFormulario.Paises[3]

    CountryPositiveTable_P1.textContent = dadosFormulario.Paises[0]
    CountryPositiveTable_P2.textContent = dadosFormulario.Paises[1]
    CountryPositiveTable_P3.textContent = dadosFormulario.Paises[2]
    CountryPositiveTable_P4.textContent = dadosFormulario.Paises[3]

    setQuantPlayers()
}

reoladed(atributos)
setDataAttributes()



function JogoRodando() {
    window.location.href = "pagina-JogoRodando.html"
}

const telaFerramentas = document.getElementById("ferramentas")
const telaEconomia = document.getElementById("telaEconomia")
const telaFabricar = document.getElementById("telaFabricar")
const telaUsarCarta = document.getElementById("telaUsarCarta")
const telaRegras = document.getElementById("telaRegras")

telaFerramentas.addEventListener("click",function(event){
    let botao = event.target.id
    switch(botao) {
        case "economia":
            telaFerramentas.style.display = "none"
            telaEconomia.style.display = "block"
            break
        case "fabricarCard":
            telaFerramentas.style.display = "none"
            telaFabricar.style.display = "block"
            break
        case "usarCard":
            telaFerramentas.style.display = "none"
            telaUsarCarta.style.display = "block"
            break
        case "regras":
            telaFerramentas.style.display = "none"
            telaRegras.style.display = "block"
            break
        default:
            break
    }

})

function Erros(n, erro) {
    let telaError = document.querySelector("#erros")
    telaError.style.display = "block"
    switch(erro) {
        case "#saldo_insuficiente#":
            telaError.innerHTML = "Saldo Insuficiente"
            break
        case "#pagamento_invalido#":
            telaError.innerHTML = "Pagamento Inválido"
            break
        case "#valor_invalido#":
            telaError.innerHTML = "Valor Inválido"
            break
        case "#apenas_numeros#":
            telaError.innerHTML = "Apenas Números"
            break
    }

    setTimeout(function(){
        const eventoErro = document.getElementById("erros");
        eventoErro.style="display:none"
        }, 3000);
    CodigoErro = []
};

(function(){

    let economiaPositivo = ""
    let economiaNegativo = ""
    let transfer = 0

    const botoesDeRetorno = document.getElementsByClassName("Aretornar")
    const economiaAtualPais = document.querySelectorAll(".infoPais")

    

    botoesDeRetorno[0].addEventListener('click',function(){
    telaEconomia.style.display = "none"
    telaFerramentas.style.display = "block"
    economiaAtualPais[0].innerHTML = "$ - "
    economiaAtualPais[1].innerHTML = "$ - "
    economiaPositivo = ""
    economiaNegativo = ""
    transfer = 0
    document.querySelector(".textoMoney").value = ""
    document.querySelector("#selecionarPais1").style.visibility = "hidden"
    document.querySelector("#selecionarPais2").style.visibility = "hidden"

    })

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

    const botaoTransfer = document.querySelector(".botaoTransfer")

    document.getElementById("menuIcone1").addEventListener("click",function(){
        const menu = document.querySelector("#selecionarPais1")
        if(menu.style.visibility == "hidden") {
            menu.style.visibility = "visible"
            botaoTransfer.style.visibility = "hidden"
        } else {
            menu.style.visibility = "hidden"
            botaoTransfer.style.visibility = "visible"
        }
    })

    document.getElementById("menuIcone2").addEventListener("click",function(){
        const menu = document.querySelector("#selecionarPais2")
        if(menu.style.visibility == "hidden") {
            menu.style.visibility = "visible"
            botaoTransfer.style.visibility = "hidden"
        } else {
            menu.style.visibility = "hidden"
            botaoTransfer.style.visibility = "visible"
        }
    })

    const selecaoPais1 = document.querySelector("#selecionarPais1")
    const selecaoPais2 = document.querySelector("#selecionarPais2")

    selecaoPais1.addEventListener("click",function(event){
        const pais = event.target.id
        switch(pais) {
            case "pais1_negativo": 
                selecaoPais1.style.visibility = "hidden"
                economiaAtualPais[0].textContent = atributos.player1.economia
                botaoTransfer.style.visibility = "visible"
                economiaNegativo = "pais1"
                break
            case "pais2_negativo": 
                selecaoPais1.style.visibility = "hidden"
                economiaAtualPais[0].textContent = atributos.player2.economia
                botaoTransfer.style.visibility = "visible"
                economiaNegativo = "pais2"
                break
            case "pais3_negativo": 
                selecaoPais1.style.visibility = "hidden"
                economiaAtualPais[0].textContent = atributos.player3.economia
                botaoTransfer.style.visibility = "visible"
                economiaNegativo = "pais3"
                break
            case "pais4_negativo": 
                selecaoPais1.style.visibility = "hidden"
                economiaAtualPais[0].textContent =  atributos.player4.economia
                botaoTransfer.style.visibility = "visible"
                economiaNegativo = "pais4"
                break
            case "banco_negativo":
                selecaoPais1.style.visibility = "hidden"
                economiaAtualPais[0].textContent = "$$$$$$"
                botaoTransfer.style.visibility = "visible"
                economiaNegativo = "banco"
                break
        }
    })

    selecaoPais2.addEventListener("click",function(event){
        const pais = event.target.id

        switch(pais) {
            case "pais1_positivo":
                selecaoPais2.style.visibility = "hidden"
                economiaAtualPais[1].textContent = atributos.player1.economia
                botaoTransfer.style.visibility = "visible"
                economiaPositivo = "pais1" 
                break
            case "pais2_positivo":
                selecaoPais2.style.visibility = "hidden"
                economiaAtualPais[1].textContent = atributos.player2.economia
                botaoTransfer.style.visibility = "visible"
                economiaPositivo = "pais2"
                break
            case "pais3_positivo":
                selecaoPais2.style.visibility = "hidden"
                economiaAtualPais[1].textContent = atributos.player3.economia
                botaoTransfer.style.visibility = "visible"
                economiaPositivo = "pais3"
                break
            case "pais4_positivo":
                selecaoPais2.style.visibility = "hidden"
                economiaAtualPais[1].textContent = atributos.player4.economia
                botaoTransfer.style.visibility = "visible"
                economiaPositivo = "pais4"
                break
            case "banco_positivo":
                selecaoPais2.style.visibility = "hidden"
                economiaAtualPais[1].textContent = "$$$$$$"
                botaoTransfer.style.visibility = "visible"
                economiaPositivo = "banco"
                break
        }
    })
    
    botaoTransfer.addEventListener("click",function(){ 
        let dinheiroAtual_negativo = document.querySelectorAll(".infoPais")[0]
        let dinheiroAtual_positivo = document.querySelectorAll(".infoPais")[1]
        let valorT = Number(document.querySelector(".textoMoney").value)
        if(economiaNegativo === economiaPositivo || economiaNegativo === "" || economiaPositivo === "") {
            CodigoErro = [1,"#pagamento_invalido#"]
            Erros(...CodigoErro)
        } else if(valorT == "" || valorT < 0) {
            CodigoErro = [1,"#valor_invalido#"]
            Erros(...CodigoErro)
        } else if(typeof valorT !== "number") {
            CodigoErro = [1,"#apenas_numeros#"]
            Erros(...CodigoErro)
        } else {
            
            transfer = Number(document.querySelector(".textoMoney").value)
            switch(economiaNegativo) {
                case "pais1":
                    if(transfer > atributos.player1.economia) {
                        CodigoErro = [1,"#saldo_insuficiente#"]
                        break
                    }
                    atributos.player1.economia -= transfer
                    dinheiroAtual_negativo.innerHTML = atributos.player1.economia
                    reoladed(atributos)
                    setDataAttributes()
                    break
                case "pais2":
                    if(transfer > atributos.player2.economia) {
                        CodigoErro = CodigoErro = [1,"#saldo_insuficiente#"]
                        break
                    }
                    atributos.player2.economia -= transfer
                    dinheiroAtual_negativo.innerHTML = atributos.player2.economia
                    reoladed(atributos)
                    setDataAttributes()
                    break
                case "pais3":
                    if(transfer > atributos.player3.economia) {
                        CodigoErro = CodigoErro = [1,"#saldo_insuficiente#"]
                        break
                    }
                    atributos.player3.economia -= transfer
                    dinheiroAtual_negativo.innerHTML = atributos.player3.economia
                    reoladed(atributos)
                    setDataAttributes()
                    break
                case "pais4":
                    if(transfer > atributos.player4.economia) {
                        CodigoErro = CodigoErro = [1,"#saldo_insuficiente#"] 
                        break
                    }
                    atributos.player4.economia -= transfer
                    dinheiroAtual_negativo.innerHTML = atributos.player4.economia
                    reoladed(atributos)
                    setDataAttributes()
                    break
                case "banco":
                /* NULL */
            }
            
            switch(economiaPositivo) {
                case "pais1":
                    if(CodigoErro.indexOf(1) !== -1) {
                        Erros(...CodigoErro)
                        break
                    }
                    atributos.player1.economia += transfer
                    dinheiroAtual_positivo.innerHTML = atributos.player1.economia
                    reoladed(atributos)
                    setDataAttributes()
                    break

                case "pais2":
                    if(CodigoErro.indexOf(1) !== -1) {
                        Erros(...CodigoErro)
                        break
                    }
                    atributos.player2.economia += transfer
                    dinheiroAtual_positivo.innerHTML = atributos.player2.economia
                    reoladed(atributos)
                    setDataAttributes()
                    break
                case "pais3":
                    if(CodigoErro.indexOf(1) !== -1) {
                        Erros(...CodigoErro)
                        break
                    }
                    atributos.player3.economia += transfer
                    dinheiroAtual_positivo.innerHTML = atributos.player3.economia
                    reoladed(atributos)
                    setDataAttributes()
                    break
                case "pais4":
                    if(CodigoErro.indexOf(1) !== -1) {
                        Erros(...CodigoErro)
                        break
                    }
                    atributos.player4.economia += transfer
                    dinheiroAtual_positivo.innerHTML = atributos.player4.economia
                    reoladed(atributos)
                    setDataAttributes()
                    break
                case "banco":
                /* NULL */
            }
        }
        document.querySelector(".textoMoney").value = ""
    })

    const telaFabricar = document.querySelector("#telaFabricar")
    const botoesFabricarCartas = document.querySelector("#telaBotoesExtras")
    const telasDasCartas = document.querySelectorAll(".botoesExtrasCartas")

    botoesFabricarCartas.addEventListener("click",function(event){
        const botao = event.target.id
        
        const telaMultiplicador = document.querySelector("#telaCartaMultiplicador")
        const telaConstrucao = document.querySelector("#telaCartaContrucao")
        const telaObjetivos = document.querySelector("#telaCartaObjetivos")
        
        switch(botao) {
            case "cartasMultiplicador":
                telaFabricar.style.display = "none"
                telaMultiplicador.style.display = "block"
                break
            case "cartasConstrucao":
                telaFabricar.style.display = "none"
                telaConstrucao.style.display = "block"
                break
            case "cartasObjetivos":
                telaFabricar.style.display = "none"
                telaObjetivos.style.display = "block"
                break
        }
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
})()