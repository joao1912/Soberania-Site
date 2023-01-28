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
 /* [codigo, quantidade] */

const cartas = {
    petroleo: [1,20],
    uranio: [2,1],
    metal: [3,12],        /* item */
    concreto: [4,10],
    munição: [5,8],
    projeto: [6,8],

    bombaAtomica: [7,1],
    tanque: [8,4],
    aviaoDeTransporte: [9,4],
    espiao: [10,1],
    sabotagem: [11,1],
    bombardeiro: [12,2],
    submarino: [13,4],
    navioDeTransporte: [14,4],
    helicoptero: [15,4],          /* multiplicador */
    navioMilitar: [16,4],
    caça: [17,4],
    forcasEspeciais: [18,8],
    soldado: [19,60],
    artilharia: [20,4],

    pandemia:[21,1],
    criseEconomica: [22,1],
    guerraCivil: [23,1],
    iWantYou: [24,1],         /* adversidade */
    avancoNaMedicina: [25,1],
    aUniaoFazAForca: [26,1],

    meteoro: [27,1],
    alienigena: [28,1],
    descoberta: [29,1], /* cooperação */
    apocalipse: [30,1],

    ouro: [31,1],
    saudePublica: [32,1],
    caridade: [33,1],
    caridadeEmpresarial: [34,1],
    safraBoaDeSoja: [35,1],       /* 10 boas */
    contraCorrupcao: [36,1],
    saneamentoBasico: [37,1],
    melhoraNaSaude: [38,1],
    investirEmMedicamento: [39,1],
    aceitarRefugiados: [40,1],

    terremoto: [41,1],
    erupcaoVulcanica: [42,1],
    vazamentoDeEsgoto: [43,1],
    surtoDeCatapora: [44,1],
    perdaNaSafra: [45,1],
    faltaDeAgua: [46,1],     /* 10 ruins */
    greve: [45,1],
    morteInocente: [46,1],
    aumentoNoImposto: [47,1],
    quebraNaBolsa: [48,1],

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

function economia() {
    telaFerramentas.style.display = "none"
    telaEconomia.style.display = "block"
}

function fabricar() {
    telaFerramentas.style.display = "none"
    telaFabricar.style.display = "block"
}

function usarCarta() {
    telaFerramentas.style.display = "none"
    telaUsarCarta.style.display = "block"
}

function regras() {
    telaFerramentas.style.display = "none"
    telaRegras.style.display = "block"
}

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

    /* valor_invalido */
    /* apenas_numeros */
    setTimeout(function(){
        const eventoErro = document.getElementById("erros");
        eventoErro.style="display:none"
        }, 3000);
    CodigoErro = []
}





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

    const paisNegativo_1 = document.querySelector("#pais1_negativo")
    const paisNegativo_2 = document.querySelector("#pais2_negativo")
    const paisNegativo_3 = document.querySelector("#pais3_negativo")
    const paisNegativo_4 = document.querySelector("#pais4_negativo")
    const bancoNegativo = document.querySelector("#banco_negativo")

    const paisPositivo_1 = document.querySelector("#pais1_positivo")
    const paisPositivo_2 = document.querySelector("#pais2_positivo")
    const paisPositivo_3 = document.querySelector("#pais3_positivo")
    const paisPositivo_4 = document.querySelector("#pais4_positivo")
    const bancoPositivo = document.querySelector("#banco_positivo")

    const selecaoPais1 = document.querySelector("#selecionarPais1")
    const selecaoPais2 = document.querySelector("#selecionarPais2")

    paisNegativo_1.addEventListener("click",function(){
        selecaoPais1.style.visibility = "hidden"
        economiaAtualPais[0].textContent = player_1.economia
        botaoTransfer.style.visibility = "visible"

        economiaNegativo = "pais1"
    })
    paisNegativo_2.addEventListener("click",function(){
        selecaoPais1.style.visibility = "hidden"
        economiaAtualPais[0].textContent = player_2.economia
        botaoTransfer.style.visibility = "visible"

        economiaNegativo = "pais2"
    })
    paisNegativo_3.addEventListener("click",function(){
        selecaoPais1.style.visibility = "hidden"
        economiaAtualPais[0].textContent = player_3.economia
        botaoTransfer.style.visibility = "visible"

        economiaNegativo = "pais3"
    })
    paisNegativo_4.addEventListener("click",function(){
        selecaoPais1.style.visibility = "hidden"
        economiaAtualPais[0].textContent =  player_4.economia
        botaoTransfer.style.visibility = "visible"

        economiaNegativo = "pais4"
    })
    bancoNegativo.addEventListener("click",function(){
        selecaoPais1.style.visibility = "hidden"
        economiaAtualPais[0].textContent = "$$$$$$"
        botaoTransfer.style.visibility = "visible"

        economiaNegativo = "banco"
    })


    paisPositivo_1.addEventListener("click",function(){
        selecaoPais2.style.visibility = "hidden"
        economiaAtualPais[1].textContent = player_1.economia
        botaoTransfer.style.visibility = "visible"

        economiaPositivo = "pais1"
    })
    paisPositivo_2.addEventListener("click",function(){
        selecaoPais2.style.visibility = "hidden"
        economiaAtualPais[1].textContent = player_2.economia
        botaoTransfer.style.visibility = "visible"

        economiaPositivo = "pais2"
    })
    paisPositivo_3.addEventListener("click",function(){
        selecaoPais2.style.visibility = "hidden"
        economiaAtualPais[1].textContent = player_3.economia
        botaoTransfer.style.visibility = "visible"

        economiaPositivo = "pais3"
    })
    paisPositivo_4.addEventListener("click",function(){
        selecaoPais2.style.visibility = "hidden"
        economiaAtualPais[1].textContent = player_4.economia
        botaoTransfer.style.visibility = "visible"

        economiaPositivo = "pais4"
    })
    bancoPositivo.addEventListener("click",function(){
        selecaoPais2.style.visibility = "hidden"
        economiaAtualPais[1].textContent = "$$$$$$"
        botaoTransfer.style.visibility = "visible"

        economiaPositivo = "banco"
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
    
})()



