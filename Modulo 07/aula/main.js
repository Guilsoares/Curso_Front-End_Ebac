const form = document.querySelector('#forms');


function validaNome(nomeCompleto){
    const nomecomArray = nomeCompleto.split(' ');
    return nomecomArray.length >= 2;
    // função acima usada para contar se, o valor digitado no nome do beneficiário da página tem Nome e Sobrenome.
}



// addEventListener ('nome do evento', ação do evento que será disparado)
form.addEventListener('submit', function(e){
    let formEvalido = false;
    e.preventDefault(); // Ele retirou o evento padrão de dar reload na página ao clicar no butão submit;

    const nomeBeneficiario = document.querySelector('#Nome')
    const numeroConta = document.querySelector('#Conta')
    const valorDeposito = document.querySelector('#Valor')
    const boxmsg = document.querySelector('.success_messenge')
    const erromsg = document.querySelector('.msg_erro')

    const msgsucesso = `O Montante de : <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`

    formEvalido = validaNome(nomeBeneficiario.value)
    if(formEvalido){
        erromsg.style.display = 'none'

        boxmsg.style.display = 'block'

        boxmsg.innerHTML = msgsucesso
        //window.alert(msgsucesso)
        
        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';
        

        

    }else{
        erromsg.style.display = 'block'
    }
})


