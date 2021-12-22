const cores = document.querySelectorAll('.ball');
const codigo = document.getElementById('rgb-color');

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

  return cores;
}

window.onload = alocaCores();

const resposta = document.getElementById('answer');

function selecao(evento) {
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
  } else {
    resposta.textContent = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selecao);
}

const reset = document.getElementById('reset-game');

function resetar() {
  window.location.reload();
}

reset.addEventListener('click', resetar);
