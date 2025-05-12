let valor = prompt("Informe o valor da compra: ");

if (valor > 100){
    let desconto = valor * 0.1;
    let valorFinal = valor - (valor * 0.1);
    alert(`Valor Original: R$ ${valor} \nDesconto Aplicado: R$ ${desconto} \nValor Final: R$ ${valorFinal}`);
}else{
    let desconto = valor * 0.05;
    let valorFinal = valor - (valor * 0.05);
    alert(`Valor Original: R$ ${valor} \nDesconto Aplicado: R$ ${desconto} \nValor Final: R$ ${valorFinal}`);
}