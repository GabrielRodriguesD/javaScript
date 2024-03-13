//aula 2 dia 13/03

//concatenação, interpolação, literal templates

//Propriedades de um carro

// declaração 2- Identificação da variável 3- tipo da variável
// padrão de escrita = camelCase
// comentário
const corDoCarro = "Vermelho";
const modeloDoCarro = "Sandero";
const marcaDoCarro = "Renault";
const chassiDoCarro = 231872372153326;
const anoDoCarro = 2012;

//primeira forma concatenação
console.log("Cor predominante é: " + corDoCarro + " Modelo do carro: " + modeloDoCarro + " Marca do carro: " + marcaDoCarro + " Chassi do carro: " + chassiDoCarro + " Ano do carro: " + anoDoCarro)

//segunda forma interpolação
console.log(`Cor predominante é: ${corDoCarro}, Modelo do carro: ${modeloDoCarro}, Marca do carro: ${marcaDoCarro}, Chassi do carro: ${chassiDoCarro}, Ano do carro: ${anoDoCarro}`)

//sem literal templates
console.log("Bem vindo ao bar do Guilherme:",
    "1- litrão,",
    "2- pitão,",
    "3- refri,",
    "4- agua,",
);

//terceira forma literal templates
console.log(`Bem vindo ao bar do Guilherme. Escolha uma opção:",
    1- Agua,
    2- Coca,
    3- Pepsi,
    4- Litrão,
`);

