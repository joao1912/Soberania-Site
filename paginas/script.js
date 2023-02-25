const botaoHome = document.getElementById("Bsair")

const quantJ1 = document.getElementById("quant1")
const quantJ2 = document.getElementById("quant2") /* procurar a origem */
const quantJ3 = document.getElementById("quant3")
const quantJ4 = document.getElementById("quant4")

const eventYes = document.getElementById("eventSim")
const eventNo = document.getElementById("eventNao")


/* --------------------------------------------- */
    /* Configurações importantes*/ 
    let QuantidadeJogadores = ""
    let Cartas_de_evento = ""
    let CodigoErro = ""
/* --------------------------------------------- */

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
    switch(QuantidadeJogadores) {
        case 2:
            document.getElementById("pais3").remove()
            document.getElementById("pais4").remove()
            break
        case 3:
            document.getElementById("pais4").remove()
            break
        default:
    }
}

function setDataAttributes() {
    return localStorage.setItem("atributos", JSON.stringify(atributos))
}

function reoladed(objAtributos) {

    document.getElementById("DadosJogadores").innerHTML = `
    <h1>Status</h1>
    <section class="status" id="pais1">
        <h2>país 1</h2>
        <p id="populacao_P1">População: <strong>${objAtributos.player1.populacao}/50</strong></p> 
        <p id="militar_P1">Militar: <strong>${objAtributos.player1.militar}/15</strong></p>
        <p id="economia_P1">Economia: <strong>$ ${objAtributos.player1.economia}</strong></p>
        <p id="op_P1">Opinião publica: <strong>${objAtributos.player1.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais2">
        <h2>país 2</h2>
        <p id="populacao_P2">População: <strong>${objAtributos.player2.populacao}/50</strong></p>
        <p id="militar_P2">Militar: <strong>${objAtributos.player2.militar}/15</strong></p>
        <p id="economia_P2">Economia: <strong>$ ${objAtributos.player2.economia}</strong></p>
        <p id="op_P2">Opinião publica: <strong>${objAtributos.player2.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais3">
        <h2>país 3</h2>
        <p id="populacao_P3">População: <strong>${objAtributos.player3.populacao}/50</strong></p>
        <p id="militar_P3">Militar: <strong>${objAtributos.player3.militar}/15</strong></p>
        <p id="economia_P3">Economia: <strong>$ ${objAtributos.player3.economia}</strong></p>
        <p id="op_P3">Opinião publica: <strong>${objAtributos.player3.opiniao_publica}/100</strong></p>
    </section>
    <section class="status" id="pais4">
        <h2>país 4</h2>
        <p id="populacao_P4">População: <strong>${objAtributos.player4.populacao}/50</strong></p>
        <p id="militar_P4">Militar: <strong>${objAtributos.player4.militar}/15</strong></p>
        <p id="economia_P4">Economia: <strong>$ ${objAtributos.player4.economia}</strong></p>
        <p id="op_P4">Opinião publica: <strong>${objAtributos.player4.opiniao_publica}/100</strong></p>
    </section>
    `
    setQuantPlayers()
}

reoladed(atributos)
setDataAttributes()

/* CADASTRO DAS CARTAS DO JOGO*/
const cartas = [
    {
        nome: "petroleo",
        codigo: 0,
        quantidade: 20
    },

    {
        nome: "uranio",
        codigo: 1,
        quantidade: 1 
    },

    {
        nome: "metal",
        codigo: 2,
        quantidade: 12 
    },

    {
        nome: "concreto",
        codigo: 3,
        quantidade: 10 
    },

    {
        nome: "munição",
        codigo: 4,
        quantidade: 8 
    },

    {
        nome: "projeto",
        codigo: 5,
        quantidade: 8 
    },

    /* MULTIPLICADORES */
    {
        nome: "bomba-atomica",
        codigo: 6,
        quantidade: 1 
    },

    {
        nome: "tanque",
        codigo: 7,
        quantidade: 4 
    },

    {
        nome: "aviao-de-transporte",
        codigo: 8,
        quantidade: 4 
    },

    {
        nome: "espião",
        codigo: 9,
        quantidade: 4 
    },

    {
        nome: "sabotagem",
        codigo: 10,
        quantidade: 1 
    },

    {
        nome: "bombardeiro",
        codigo: 11,
        quantidade: 2 
    },

    {
        nome: "submarino",
        codigo: 12,
        quantidade: 4
    },

    {
        nome: "navio-de-transporte",
        codigo: 13,
        quantidade: 4
    },

    {
        nome: "helicoptero",
        codigo: 14,
        quantidade: 4
    },

    {
        nome: "navio-militar",
        codigo: 15,
        quantidade: 4
    },

    {
        nome: "caça",
        codigo: 16,
        quantidade: 4
    },

    {
        nome: "forças-especiais",
        codigo: 17,
        quantidade: 8 
    },

    {
        nome: "soldado",
        codigo: 18,
        quantidade: 60 
    },

    {
        nome: "artilharia",
        codigo: 19,
        quantidade: 4 
    },

    /* ADVERSIDADE */

    {
        nome: "pandemia",
        codigo: 20,
        quantidade: 1 
    },

    {
        nome: "crise-economica",
        codigo: 21,
        quantidade: 1 
    },

    {
        nome: "guerra-civil",
        codigo: 22,
        quantidade: 1 
    },

    {
        nome: "i-want-you",
        codigo: 23,
        quantidade: 1
    },

    {
        nome: "avanço-na-medicina",
        codigo: 24,
        quantidade: 1
    },

    {
        nome: "a-união-faz-a-força",
        codigo: 25,
        quantidade: 1 
    },

    /* COOPERAÇÃO */

    {
        nome: "meteoro",
        codigo: 26,
        quantidade: 1 
    },

    {
        nome: "alienigenas",
        codigo: 27,
        quantidade: 1
    },

    {
        nome: "descoberta",
        codigo: 28,
        quantidade: 1
    },

    {
        nome: "apocalipse",
        codigo: 29,
        quantidade: 1
    },

    /* PADRÃO BOAS */

    {
        nome: "ouro",
        codigo: 30,
        quantidade: 1,
    },

    {
        nome: "saude-publica",
        codigo: 31,
        quantidade: 1,
    },

    {
        nome: "caridade",
        codigo: 32,
        quantidade: 1,
    },

    {
        nome: "caridade-empresarial",
        codigo: 33,
        quantidade: 1,
    },

    {
        nome: "safra-boa-de-soja",
        codigo: 34,
        quantidade: 1,
    },

    {
        nome: "contra-corrupção",
        codigo: 35,
        quantidade: 1,
    },

    {
        nome: "saneamento-basico",
        codigo: 36,
        quantidade: 1,
    },

    {
        nome: "melhora-na-saude",
        codigo: 37,
        quantidade: 1,
    },

    {
        nome: "investir-em-medicamentos",
        codigo: 38,
        quantidade: 1,
    },

    {
        nome: "aceitar-refugiados",
        codigo: 39,
        quantidade: 1,
    },

    /* PADRÃO RUINS */

    {
        nome: "terremoto",
        codigo: 40,
        quantidade: 1,
    },

    {
        nome: "erupção-vulcanica",
        codigo: 41,
        quantidade: 1,
    },

    {
        nome: "vazamento-de-esgoto",
        codigo: 42,
        quantidade: 1,
    },

    {
        nome: "surto-de-catapora",
        codigo: 43,
        quantidade: 1,
    },

    {
        nome: "perda-na-safra",
        codigo: 44,
        quantidade: 1,
    },

    {
        nome: "falta-de-agua",
        codigo: 45,
        quantidade: 1,
    },

    {
        nome: "greve",
        codigo: 46,
        quantidade: 1,
    },

    {
        nome: "morte-inocente",
        codigo: 47,
        quantidade: 1,
    },

    {
        nome: "aumento-no-imposto",
        codigo: 48,
        quantidade: 1,
    },

    {
        nome: "quebra-na-bolsa",
        codigo: 49,
        quantidade: 1,
    },

    /* CARTAS DE CONSTRUÇÃO */

    {
        nome: "industria",
        codigo: 50,
        quantidade: 8,
    },

    {
        nome: "municipio",
        codigo: 51,
        quantidade: 500,
    },

    {
        nome: "oficina",
        codigo: 52,
        quantidade: 4,
    },

    {
        nome: "aeroporto",
        codigo: 53,
        quantidade: 4,
    },

    {
        nome: "porto",
        codigo: 54,
        quantidade: 4,
    },

    {
        nome: "capital",
        codigo: 55,
        quantidade: 4,
    },

    {
        nome: "antiaereo",
        codigo: 56,
        quantidade: 4,
    },

    /* CARTAS DE OBJETIVO */

    {
        nome: "motor-de-dobra-espacial",
        codigo: 57,
        quantidade: 1,
    },

    {
        nome: "bomba-de-antimatéria",
        codigo: 58,
        quantidade: 1,
    },

    {
        nome: "maquina-do-tempo",
        codigo: 59,
        quantidade: 1,
    },

    {
        nome: "pilula-de-imortalidade",
        codigo: 60,
        quantidade: 1,
    },

    {
        nome: "protese-avançada",
        codigo: 61,
        quantidade: 1,
    },

    {
        nome: "dominação-1",
        codigo: 62,
        quantidade: 1,
    },

    {
        nome: "dominação-2",
        codigo: 63,
        quantidade: 1,
    },

    {
        nome: "dominação-3",
        codigo: 64,
        quantidade: 1,
    },

    {
        nome: "dominação-4",
        codigo: 65,
        quantidade: 1,
    },

]

function iniciar() {
    window.location.href = "pagina-jogoIniciado.html"
}

botaoHome.addEventListener("click",function(){
    let sair = confirm("Você ira perder todo progresso, deseja sair?")
    if(sair) { 
        window.location.href = "../index.html" 
        localStorage.clear()
    } 
})

function QuantJogadores() {
    if (quantJ1.checked) {
        QuantidadeJogadores = 1
    } else if(quantJ2.checked) {
        QuantidadeJogadores = 2
    } else if(quantJ3.checked) {
        QuantidadeJogadores = 3
    } else if(quantJ4.checked) {
        QuantidadeJogadores = 4
    }
}

function CardEvent() {
    if(eventYes.checked) {
        Cartas_de_evento = "sim"
    } else if(eventNo.checked) {
        Cartas_de_evento = "nao"
    }
}

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
    console.log(erro)
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
