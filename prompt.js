function validar () {
    let nome = formcontato.nome.value;
    let email = formcontato.email.value;
    let assunto = formcontato.assunto.value;
    let mensagem = formcontato.mensagem.value;


    if (nome === ""){
        alert('preencha o campo nome é obrigatorio.');
        formcontato.nome.focus();
        return false;
    }
    if (email === "" || email.indexof('@') === -1){
        alert('preencha o campo email é obrigatorio.');
        formcontato.email.focus();
        return false;
    }
    if (assunto === ""){
        alert('preencha o campo assunto é obrigatorio.');
        formcontato.assunto.focus();
        return false;
    }

    if (mensagem === ""){
        alert('preencha o campo mensagem é obrigatorio.');
        formcontato.mensagem.focus();
        return false;
    }
    
    
     


}