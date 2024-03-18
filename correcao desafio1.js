//Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de um aluno, calcular a média (>= 7) e exibir se o aluno foi aprovado, reprovado (<= 4) ou se ficou para exame (<= 5, <= 6). Não é necessário ler as notas, você pode defini-las com variáveis.

//declaração - identificador - tipo (valor)
const nomeAluno = "Gabriel"

//entrada de dados
const prova01 = 10;
const prova02 = 8;
const prova03 = 9;

//processamento de dados - conta
const media = (prova01 + prova02 + prova03) / 3

//`` crazes
if (media >= 7) {
    //saída de dados
    console.log(`O aluno ${nomeAluno}, foi aprovado com a média final de: ${media.toFixed(2)}`);
} else if (media >= 5 ) {  
    //saída de dados 
    // se a media não é maior ou igual a 7, então obrigatoriamente será menor que sete, não sendo preciso testar esta condição. Isso elimina a necessidade de utilizarmos operadores lógicos em condicionais simples
    console.log(`O aluno ${nomeAluno}, Esta de recuperação com a média final de: ${media.toFixed(2)}`);
} else {
    //saída de dados
    console.log(`Aluno reprovado`);
}