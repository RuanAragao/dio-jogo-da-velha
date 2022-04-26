let jogador, vencedor = null;
const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
  if (vencedor !== null) {
    return;
  }

  let quadrado = document.getElementById(id);
  if (quadrado.innerHTML !== '-') {
    return;
  } 

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000000';

  if (jogador === 'X') {
    jogador = 'O';
  } else {
    jogador = 'X';
  }

  checaVencedor();
  mudarJogador(jogador);
}

function mudarJogador(valor) {
  jogador = valor;
}

function checaVencedor() {
  const quadrado1 = document.getElementById(1);
  const quadrado2 = document.getElementById(2);
  const quadrado3 = document.getElementById(3);
  const quadrado4 = document.getElementById(4);
  const quadrado5 = document.getElementById(5);
  const quadrado6 = document.getElementById(6);
  const quadrado7 = document.getElementById(7);
  const quadrado8 = document.getElementById(8);
  const quadrado9 = document.getElementById(9);

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarCorQuadrado(quadrado1);
    return;
  }

  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarCorQuadrado(quadrado4);
    return;
  }

  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarCorQuadrado(quadrado7);
    return;
  }

  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarCorQuadrado(quadrado1);
    return;
  }

  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarCorQuadrado(quadrado2);
    return;
  }

  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarCorQuadrado(quadrado3);
    return;
  }

  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarCorQuadrado(quadrado1);
    return;
  }

  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarCorQuadrado(quadrado3);
    return;
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#0f0';
  quadrado2.style.background = '#0f0';
  quadrado3.style.background = '#0f0';
  return;
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  let eigual = false;

  if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
    eigual = true;
  }

  return eigual;
}

function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = '';

  for (let i = 1; i <= 9; i++) {
    let quadrado = document.getElementById(i);
    quadrado.style.background = '#eee';
    quadrado.style.color = '#eee';
    quadrado.innerHTML = '-';
  }

  mudarJogador('X');
}