
    var socket = io();


const contDigital = document.getElementById('um');
const porqueDigital = document.getElementById('dois');
const imagem1 = document.getElementById('tres');
const beneficios = document.querySelectorAll('#cinco');
const Quemsomos = document.getElementById('sete');

contDigital.classList.add('contDigital');
porqueDigital.classList.add('porqueDigital');
imagem1.classList.add('imagem1');

beneficios[0].classList.add('beneficios');
beneficios[1].classList.add('beneficios');
beneficios[2].classList.add('beneficios');


window.onscroll = function() {myFunction()};

function myFunction() {

    console.log(document.documentElement.scrollTop - 50/ document.documentElement.scrollTop) 
    
  if (document.documentElement.scrollTop / 700 > 1.0585714285714285 ) {
    
    Quemsomos.classList.add('quemSomos');

  } else {
    Quemsomos.classList.remove('quemSomos');
  }
}
   