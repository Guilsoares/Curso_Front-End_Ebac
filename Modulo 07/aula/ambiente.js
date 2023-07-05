function validaNome(nomeCompleto){
    const nomecomArray = nomeCompleto.split(' ');
    return nomecomArray.length >= 2;
    // função acima usada para contar se, o valor digitado no nome do beneficiário da página tem Nome e Sobrenome.
}

console.log(validaNome('Guilherme S'))

