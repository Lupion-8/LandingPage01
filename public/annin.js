
    var socket = io();


const contDigital = document.getElementById('um');
const porqueDigital = document.getElementById('dois');
const imagem1 = document.getElementById('tres');
const beneficios = document.querySelectorAll('#cinco');
const Quemsomos = document.getElementById('seis');
const video = document.getElementById('video');

const sete = document.querySelector("#sete");

contDigital.classList.add('contDigital');
porqueDigital.classList.add('porqueDigital');
imagem1.classList.add('imagem1');

beneficios[0].classList.add('beneficios');
beneficios[1].classList.add('beneficios');
beneficios[2].classList.add('beneficios');



window.onscroll = function() {estaVisivel(sete)};


function estaVisivel(el) {

    const posicoes = el.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;

    let estaVisivel = false
    
    if((inicio >= 0) && (fim <= window.innerHeight)) {
            estaVisivel = true;
            Quemsomos.classList.add('quemSomos');
            video.classList.add('video');

    }else{Quemsomos.classList.remove('quemSomos');}
    
    return estaVisivel;
    
}

