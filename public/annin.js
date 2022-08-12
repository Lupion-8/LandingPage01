
const socket = io();
const maxAbertas = 69, maxFeliz = 93;
let contNumeros = false;


const contDigital = document.getElementById('um');
const porqueDigital = document.getElementById('dois');
const imagem1 = document.getElementById('tres');
const beneficios = document.querySelectorAll('#cinco');
const Quemsomos = document.getElementById('seis');
const video = document.getElementById('video');

const sete = document.querySelector("#sete");
const nAbertas = document.getElementById('nAberta');
const nFeliz = document.getElementById('nFeliz');
const servicos = document.querySelector('#servic');

const timerAberta = (seconds) =>  {
  let time = seconds * 1
  return new Promise(res => setTimeout(res, time))
}

const timerFeliz = (seconds) =>  {
  let time = seconds * 1
  return new Promise(res => setTimeout(res, time))
}

contDigital.classList.add('contDigital');
porqueDigital.classList.add('porqueDigital');
imagem1.classList.add('imagem1');

beneficios[0].classList.add('beneficios');
beneficios[1].classList.add('beneficios');
beneficios[2].classList.add('beneficios');



window.onscroll = function() {estaVisivel(sete); visibleSevice(servicos)};


function estaVisivel(el) {
    const posicoes = el.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;

    let estaVisivel = false
    
    if((inicio >= 0) && (fim <= window.innerHeight)) {
      estaVisivel = true;
      Quemsomos.classList.add('quemSomos');
      video.classList.add('video');
      if(!contNumeros)
      { contAbetas(); 
        contNumeros = true; contFeliz();
      }
     
    }else{Quemsomos.classList.remove('quemSomos');}   
     
}




async function contAbetas() {
  for (var i = 0; i < maxAbertas +1; i++) {
    await timerAberta(i);
    document.getElementById('nAberta').textContent = i;
  }
}

async function contFeliz() {
  for (var i = 0; i < maxFeliz +1; i++) {
    await timerFeliz(i);
    document.getElementById('nFeliz').textContent = i;
  }
}




function visibleSevice(el) {
  const posicoes = el.getBoundingClientRect();
  const inicio = posicoes.top;
  const fim = posicoes.bottom;

  let estaVisivel = false
  
  if((inicio >= 0) && (fim <= window.innerHeight)) {
    estaVisivel = true;
    servicos.classList.add('servic');
  }
   
}