/*
5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"
*/

const nome = 'Caio Jablonski';
let nota1 = 7.8;
let nota2 = 8.9;
let nota3 = 9.6;
let media = ((nota1+nota2+nota3)/3).toFixed(2);

document.write(`O aluno ${nome}, ficou com média ${media}!`);
