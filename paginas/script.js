let botaoHome = document.getElementById("Bsair")

let quantJ1 = document.getElementById("quant1")
let quantJ2 = document.getElementById("quant2")
let quantJ3 = document.getElementById("quant3")
let quantJ4 = document.getElementById("quant4")

let eventYes = document.getElementById("eventSim")
let eventNo = document.getElementById("eventNao")

/* população */ 
let pop_1 = document.getElementById("populacao_P1")
let pop_2 = document.getElementById("populacao_P2")
let pop_3 = document.getElementById("populacao_P3")
let pop_4 = document.getElementById("populacao_P4")

/* militar */
let mili_1 = document.getElementById("militar_P1")
let mili_2 = document.getElementById("militar_P2")
let mili_3 = document.getElementById("militar_P3")
let mili_4 = document.getElementById("militar_P4")

/* Economia */
let econ_1 = document.getElementById("economia_P1")
let econ_2 = document.getElementById("economia_P2")
let econ_3 = document.getElementById("economia_P3")
let econ_4 = document.getElementById("economia_P4")

/* Opinião Publica */
let OP_1 = document.getElementById("op_P1")
let OP_2 = document.getElementById("op_P2")
let OP_3 = document.getElementById("op_P3")
let OP_4 = document.getElementById("op_P4")

let player_1 = {
    populacao: 50, /* MAX (50)*/
    militar: 5, /* MAX (15)*/
    economia: 10000,
    opiniao_publica: 100 /* MAX (100)*/
}

let player_2 = {
    populacao: 50,
    militar: 5,
    economia: 10000,
    opiniao_publica: 100
}

let player_3 = {
    populacao: 50,
    militar: 5,
    economia: 10000,
    opiniao_publica: 100
}

let player_4 = {
    populacao: 50,
    militar: 5,
    economia: 10000,
    opiniao_publica: 100
}

/* --------------------------------------------- */
        /* Configurações importantes*/ 
let QuantidadeJogadores = ""
let Cartas_de_evento = ""
let CodigoErro = ""
/* --------------------------------------------- */

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
    }



]

const cartas_antigo = {

    industria: [49,8],
    municipio: [50,500],
    oficina: [51,4],
    aeroporto: [52,4],
    porto: [53,4],           /* cartas de construção */
    capital: [54,4],
    antiaerio: [55,4],

    motorDeDobraEspacial: [56,1],
    bombaDeAntiMateria: [57,1],
    maquinaDoTempo: [58,1],
    pilulaDeImortalidade: [59,1],
    proteseAvancada: [60,1],          /* cartas de objetivo */
    dominacao1: [61,1],
    dominacao2: [62,1],
    dominacao3: [63,1],
    dominacao4: [64,1],
    FUTURACARTA: [65,1]
}



function iniciar() {
    window.location.href = "pagina-jogoIniciado.html"
}

botaoHome.addEventListener("click",function(){
    let sair = confirm("Você ira perder todo progresso, deseja sair?")
    if(sair) { 
        window.location.href = "../index.html" 
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
                economiaAtualPais[0].textContent = player_1.economia
                botaoTransfer.style.visibility = "visible"
                economiaNegativo = "pais1"
                break
            case "pais2_negativo": 
                selecaoPais1.style.visibility = "hidden"
                economiaAtualPais[0].textContent = player_2.economia
                botaoTransfer.style.visibility = "visible"
                economiaNegativo = "pais2"
                break
            case "pais3_negativo": 
                selecaoPais1.style.visibility = "hidden"
                economiaAtualPais[0].textContent = player_3.economia
                botaoTransfer.style.visibility = "visible"
                economiaNegativo = "pais3"
                break
            case "pais4_negativo": 
                selecaoPais1.style.visibility = "hidden"
                economiaAtualPais[0].textContent =  player_4.economia
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
                economiaAtualPais[1].textContent = player_1.economia
                botaoTransfer.style.visibility = "visible"
                economiaPositivo = "pais1" 
                break
            case "pais2_positivo":
                selecaoPais2.style.visibility = "hidden"
                economiaAtualPais[1].textContent = player_2.economia
                botaoTransfer.style.visibility = "visible"
                economiaPositivo = "pais2"
                break
            case "pais3_positivo":
                selecaoPais2.style.visibility = "hidden"
                economiaAtualPais[1].textContent = player_3.economia
                botaoTransfer.style.visibility = "visible"
                economiaPositivo = "pais3"
                break
            case "pais4_positivo":
                selecaoPais2.style.visibility = "hidden"
                economiaAtualPais[1].textContent = player_4.economia
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
                    if(transfer > player_1.economia) {
                        CodigoErro = [1,"#saldo_insuficiente#"]
                        break
                    }
                    player_1.economia -= transfer
                    dinheiroAtual_negativo.innerHTML = player_1.economia
                    econ_1.innerHTML = `Economia: <strong>${player_1.economia}</strong>`
                    break
                case "pais2":
                    if(transfer > player_2.economia) {
                        CodigoErro = CodigoErro = [1,"#saldo_insuficiente#"]
                        break
                    }
                    player_2.economia -= transfer
                    dinheiroAtual_negativo.innerHTML = player_2.economia
                    econ_2.innerHTML = `Economia: <strong>${player_2.economia}</strong>`
                    break
                case "pais3":
                    if(transfer > player_3.economia) {
                        CodigoErro = CodigoErro = [1,"#saldo_insuficiente#"]
                        break
                    }
                    player_3.economia -= transfer
                    dinheiroAtual_negativo.innerHTML = player_3.economia
                    econ_3.innerHTML = `Economia: <strong>${player_3.economia}</strong>`
                    break
                case "pais4":
                    if(transfer > player_4.economia) {
                        CodigoErro = CodigoErro = [1,"#saldo_insuficiente#"] 
                        break
                    }
                    player_4.economia -= transfer
                    dinheiroAtual_negativo.innerHTML = player_4.economia
                    econ_4.innerHTML = `Economia: <strong>${player_4.economia}</strong>`
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
                    player_1.economia += transfer
                    dinheiroAtual_positivo.innerHTML = player_1.economia
                    econ_1.innerHTML = `Economia: <strong>${player_1.economia}</strong>`
                    break

                case "pais2":
                    if(CodigoErro.indexOf(1) !== -1) {
                        Erros(...CodigoErro)
                        break
                    }
                    player_2.economia += transfer
                    dinheiroAtual_positivo.innerHTML = player_2.economia
                    econ_2.innerHTML = `Economia: <strong>${player_2.economia}</strong>`
                    break
                case "pais3":
                    if(CodigoErro.indexOf(1) !== -1) {
                        Erros(...CodigoErro)
                        break
                    }
                    player_3.economia += transfer
                    dinheiroAtual_positivo.innerHTML = player_3.economia
                    econ_3.innerHTML = `Economia: <strong>${player_3.economia}</strong>`
                    break
                case "pais4":
                    if(CodigoErro.indexOf(1) !== -1) {
                        Erros(...CodigoErro)
                        break
                    }
                    player_4.economia += transfer
                    dinheiroAtual_positivo.innerHTML = player_4.economia
                    econ_4.innerHTML = `Economia: <strong>${player_4.economia}</strong>`
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