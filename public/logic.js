const processo = document.getElementById('seletivo');


document.addEventListener("DOMContentLoaded", function() {
    //conteúdo que será compartilhado: Título da página + URL
    var conteudo = encodeURIComponent('Olá, tenho interesse nos serviços');
    //altera a URL do botão
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?phone=5574999999999&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20servi%C3%A7os.";
}, false);
document.querySelector('button').addEventListener('click', ()=>{
 alert('Solicitação Enviada!');
 document.querySelector('.div24 > div'). innerHTML = '<h2>Solicitação Enviada!</h2>';
 document.querySelector('button').remove();
});



