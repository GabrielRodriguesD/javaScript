//Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de um aluno, calcular a média (>= 7) e exibir se o aluno foi aprovado, reprovado (<= 4) ou se ficou para exame (<= 5, <= 6). Não é necessário ler as notas, você pode defini-las com variáveis.


const aluno = "Gabriel"
const prova01 = 10
const prova02 = 10
const prova03 = 10

const media = (prova01 + prova02 + prova03) / 3



if (media >= 7) {
    console.log(`O aluno ${aluno}, teve a média de: ${media.toFixed(0)} Voce passou`);
} else if (media >= 5 && media <= 6) {  
    console.log(`O aluno ${aluno}, teve a média de: ${media.toFixed(0)} Esta de recuperação`);
} else {
    media <= 4
    console.log(`O aluno ${aluno}, teve a média de: ${media.toFixed(0)} Reprovou!`);
}