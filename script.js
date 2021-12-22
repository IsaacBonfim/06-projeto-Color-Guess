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
