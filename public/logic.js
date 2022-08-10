//Constrói a URL depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function() {
    //conteúdo que será compartilhado: Título da página + URL
    var conteudo = encodeURIComponent('Olá, tenho interesse nos serviços');
    //altera a URL do botão
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?phone=558738610452&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20servi%C3%A7os.";
}, false);