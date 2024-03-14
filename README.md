# Operadores em JavaScript

Aprendendo a utilizar operadores na linguagem JavaScript

## operadores-aritimeticos.js

Inicialmente, declaramos as variáveis com a palavra `const`.

~~~js
const numero1 = 30;
const numero2 = 20;
~~~

Depois, realizamos as operaçoes utilizando as operaçoes aritméticos:

* `+`: soma dois números
* `-`: subtrai dois números
* `*`: multiplica dois números
* `/`: divide dois números
* `%`: obtém o resto da divisão de dois números


~~~js
console.log(`A soma dos números é: ${numero1 + numero2}`);
console.log(`A subtração dos números é: ${numero1 - numero2}`);
console.log(`A multiplicação dos números é: ${numero1 * numero2}`);
console.log(`A divisão dos números é: ${numero1 / numero2}`);
console.log(`O resto da divisão dos números é: ${numero1 % numero2}`);
~~~

As operaçoes são realizadas no momento da impressão do resultado e não necessitam ser armazenadas em variáveis.

## operadores-atribuicao.js

~~~js
let numero = 10;
~~~

Declaramos a variável do `número` usando a palavra reservada `let`, pois essa variável sera reatribuida ao longo do nosso código

em seguida, fazemos uma série de reatribuições utilizando os operadores de atribuição.

~~~js
console.log(`O número inicial é ${numero}`);
 console.log(`Somando 10: ${numero += 10}`);
 console.log(`Subtraindo 10: ${numero -= 10}`);
 console.log(`Multiplicando por 10: ${numero *=1 0}`);
 console.log(`Dividindo por 10: ${numero /= 10}`);
 console.log(`Elevando a potência por 10: ${numero **= 10}`);
 console.log(`Obtendo o resto da divisão por 10: ${numero %= 10}`);
 console.log(`Incrementando 1: ${++numero}`); 
 console.log(`Decrementando 1: ${--numero}`);
 console.log(`O número final é : ${numero}`);
~~~

Operadores de atribuição:

* `=` -> atribui um novo valor para variável
* `+=` -> o proprio valor somado ao novo valor
* `-=` -> o proprio valor subtraindo-se o novo valor
* `*=` -> o proprio valor multiplicado pelo novo valor
* `/=` -> o proprio valor dividido pelo novo valor
* `**=` -> o proprio valor elevado a potencia do novo valor
* `%=` -> o resto da divisão do próprio valor pelo novo valor
* `++` -> o próprio valor **incrementado (somado) com 1** (pode ser  um _pré-incremento_ ou _pós-incremento_).
* `--` -> o próprio valor **decrementado (subtraído) com 1**  (pode ser  um _pré-decremento_ ou _pós-decremento_).



