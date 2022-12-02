/*
3. Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"
*/

let total = 2489.00;
let qtdParcelas = 12;
let valorParcela = (total/qtdParcelas).toFixed(2);

document.write(`O valor total da compra foi R$${total}.`);
document.write(`<br>`);
document.write(`A forma de pagamento foi: ${qtdParcelas} x R$${valorParcela}`);

