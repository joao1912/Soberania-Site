function Carta(name, cod, quantidade, afetados) {
    'use strict'
    if(this === undefined) return

    this.nome = name
    this.codigo = cod ?? null
    this.quantidade = quantidade || 0
    this.afetados = afetados || null
}

// itens
const cartas = [
   
    new Carta("Petroleo", 0, 20),

    new Carta("Urânio", 1, 1),

    new Carta("Metal", 2, 12),

    new Carta("Concreto", 3, 10),

    new Carta("Munição", 4, 8),

    new Carta("Projeto", 5, 8),

    new Carta("Industria", 6, 8),

    new Carta("Municipio", 7, 500),

    new Carta("Oficina", 8, 4),

    new Carta("Aeroporto", 9, 4),

    new Carta("Porto", 10, 4),

    new Carta("Capital", 11, 4),

    new Carta("Antiaério", 12, 4),

    new Carta("Pandemia", 13, 1, ["todos","escolha-nao"]),

    new Carta("Crise Econômica", 14, 1, ["todos","escolha-nao"]),

    new Carta("Guerra Civíl", 15, 1, ["um","escolha-sim"]),

    new Carta("'I Want You'", 16, 1,["um","escolha-sim"]),

    new Carta("Avanço na Medicina", 17, 1, ["todos","escolha-nao"]),

    new Carta("A União Faz a Força", 18, 1, ["todos","escolha-nao"]),

    new Carta("Meteoro", 19, 1, ["todos","escolha-nao"]),

    new Carta("Alienigenas", 20, 1, ["todos","escolha-sim"]),

    new Carta("Descoberta", 21, 1),

    new Carta("Apocalipse", 22, 1, ["todos","escolha-nao"]),

    new Carta("Ouro", 23, 1, ["um","escolha-nao"]),

    new Carta("Saúde Pública", 24, 1, ["um","escolha-nao"]),

    new Carta("Caridade", 25, 1, ["um","escolha-nao"]),

    new Carta("Caridade Empresarial", 26, 1, ["um","escolha-nao"]),

    new Carta("Safra Boa de Soja", 27, 1, ["um","escolha-nao"]),

    new Carta("Contra Corrupção", 28, 1, ["um","escolha-nao"]),

    new Carta("Saneamento Básico", 29, 1, ["um","escolha-nao"]),

    new Carta("Melhora na Saúde", 30, 1, ["um","escolha-nao"]),

    new Carta("Investir em Medicamentos", 31, 1, ["um","escolha-nao"]),

    new Carta("Aceitar Refugiados", 32, 1, ["um","escolha-nao"]),

    new Carta("Terremoto", 33, 1, ["um","escolha-nao"]),

    new Carta("Erupção Vulcanica", 34, 1, ["um","escolha-nao"]),

    new Carta("Vazamento de Gás", 35, 1, ["um","escolha-nao"]),

    new Carta("Vazamento de Esgoto", 36, 1, ["um","escolha-nao"]),

    new Carta("Surto de Catapora", 37, 1, ["um","escolha-nao"]),

    new Carta("Perda Na Safra", 38, 1, ["um","escolha-nao"]),

    new Carta("Falta de Água", 39, 1, ["um","escolha-nao"]),

    new Carta("Greve", 40, 1, ["um","escolha-nao"]),

    new Carta("Morte de Inocentes", 41, 1, ["um","escolha-nao"]),

    new Carta("Aumento no Imposto", 42, 1, ["um","escolha-nao"]),

    new Carta("Queda na Bolsa", 43, 1, ["um","escolha-nao"]),

    new Carta("Motor de Dobra Espacial", 44, 1),

    new Carta("Bomba de Antimatéria", 45, 1),

    new Carta("Maquina do Tempo", 46, 1),

    new Carta("Pilula de Imortalidade", 47, 1),

    new Carta("Protese Avançada", 48, 1),

    new Carta("Domínio", 49, 1),

    new Carta("Domínio", 50, 1),

    new Carta("Domínio", 51, 1),

    new Carta("Domínio", 52, 1),

    new Carta("Bomba Atômica", 53, 1, ["dois","escolha-nao"]),

    new Carta("Tanque", 54, 4),

    new Carta("Avião de Transporte", 55, 4),

    new Carta("Espião", 56, 4),

    new Carta("Sabotagem", 57, 1, ["um","escolha-sim"]), //arrumar, tem alvo

    new Carta("Bombardeiro", 58, 2),

    new Carta("Submarino", 59, 4),

    new Carta("Navio de Transporte", 60, 4),

    new Carta("Helicóptero", 61, 4),

    new Carta("Navio Militar", 62, 4),

    new Carta("Caça", 63, 4),

    new Carta("Forças Especiais", 64, 8),

    new Carta("Soldado", 65, 60),

    new Carta("Artilharia", 66, 4)

]

export {cartas}