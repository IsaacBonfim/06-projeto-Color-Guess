const cores = document.querySelectorAll('.ball');
const codigo = document.getElementById('rgb-color');
const pontos = document.getElementById('score');
let codAtual = '';

// Consultei o seguinte site para conseguir montar a função de geração de cores aleatórias.
// https://www.ti-enxame.com/pt/javascript/gerador-de-cores-aleatorias/967183954/

function rgb() {
  return Math.floor(Math.random() * 255);
}

function alocaCores() {
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].style.backgroundColor = `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
  }

  codigo.textContent = cores[Math.floor(Math.random() * 6)].style.backgroundColor;
  // codigo.style.color = codigo.textContent;

  return cores;
}

window.onload = alocaCores();

function pontuacao() {
  let valor = parseInt(pontos.textContent, 10);

  if (codAtual !== codigo.textContent) {
    valor += 3;
    codAtual = codigo.textContent;
  }

  pontos.textContent = valor;
}

const resposta = document.getElementById('answer');

function resultado(evento) {
  const selecionado = evento.target;

  for (let i = 0; i < cores.length; i += 1) {
    cores[i].style.border = '1px solid rgba(0, 0, 0, 1)';
    cores[i].style.boxShadow = '2px 2px 3px rgba(0, 0, 0, 1)';
    selecionado.style.border = '3px solid rgba(61, 220, 151, 1)';
    selecionado.style.boxShadow = '2px 2px 3px rgba(37, 110, 255, 1)';
  }

  const cor = selecionado.style.backgroundColor;

  if (codigo.textContent === cor) {
    resposta.textContent = 'Acertou!';
    pontuacao();
  } else {
    resposta.textContent = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', resultado);
}

const reset = document.getElementById('reset-game');

function resetar() {
  alocaCores();
  resposta.textContent = 'Escolha uma cor';

  for (let i = 0; i < cores.length; i += 1) {
    cores[i].style.border = '1px solid rgba(0, 0, 0, 1)';
    cores[i].style.boxShadow = '2px 2px 3px rgba(0, 0, 0, 1)';
  }
}

reset.addEventListener('click', resetar);
