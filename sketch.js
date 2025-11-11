// ===============================
// Jogo Arco e Flecha - Corrigido e Otimizado
// ===============================

let arcoX, arcoY;
let angulo;
let forca;
let vento;
let flecha;
let alvoX, alvoY, alvoR;
let pontuacao;
let alvoAtivo = true;

function setup() {
  createCanvas(800, 500);
  arcoX = 100;
  arcoY = height - 100;
  angulo = -PI / 4;
  forca = 15;
  vento = 0;
  flecha = null;
  alvoR = 50;
  pontuacao = 0;

  novoVento();
  novoAlvo();
}

function draw() {
  background(135, 206, 235); // Céu
  noStroke();
  fill(34, 139, 34);
  rect(0, height - 40, width, 40); // Chão

  if (alvoAtivo) drawTarget(alvoX, alvoY, alvoR);
  drawArqueiro();

  if (flecha) {
    // vento influencia movimento horizontal
    flecha.vx += vento * 0.01;

    // atualiza posição
    flecha.x += flecha.vx;
    flecha.y += flecha.vy;

    // gravidade
    flecha.vy += 0.2;

    // desenha flecha
    stroke(0);
    strokeWeight(4);
    line(
      flecha.x,
      flecha.y,
      flecha.x - 15 * cos(flecha.a),
      flecha.y - 15 * sin(flecha.a)
    );

    // checa colisão com alvo
    if (alvoAtivo) {
      let d = dist(flecha.x, flecha.y, alvoX, alvoY);
      if (d < alvoR) {
        let pontos = int(map(d, 0, alvoR, 100, 10));
        pontuacao += pontos;
        alvoAtivo = false;
        flecha = null;

        // depois de um curto intervalo, cria novo alvo e vento
        setTimeout(() => {
          novoVento();
          novoAlvo();
          alvoAtivo = true;
        }, 500);
      }
    }

    // se sair da tela, reinicia tiro e vento (apenas uma vez)
    if (flecha && (flecha.y > height || flecha.x > width || flecha.x < 0)) {
      flecha = null;
      novoVento();
    }
  }

  // HUD
  fill(0, 150);
  rect(0, 0, width, 50);
  noStroke();
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text(`Ângulo: ${degrees(-angulo).toFixed(1)}°`, 20, 30);
  text(`Força: ${forca}`, 180, 30);
  text(`Vento: ${vento.toFixed(1)}`, 280, 30);
  text(`Pontuação: ${pontuacao}`, width - 160, 30);
}

// ===============================
// Desenhos
// ===============================
function drawArqueiro() {
  stroke(0);
  strokeWeight(2);
  line(arcoX, arcoY, arcoX, arcoY - 60);
  line(arcoX, arcoY - 60, arcoX - 10, arcoY - 80);
  line(arcoX, arcoY, arcoX - 10, arcoY + 20);
  line(arcoX, arcoY, arcoX + 10, arcoY + 20);
  fill(0, 200, 0);
  ellipse(arcoX, arcoY - 70, 20, 20);

  stroke(60);
  strokeWeight(6);
  line(arcoX + 15, arcoY - 60, arcoX + 15, arcoY - 10);

  stroke(255);
  strokeWeight(2);
  line(arcoX + 15, arcoY - 60, arcoX + 15, arcoY - 10);

  stroke(255, 100, 0);
  strokeWeight(2);
  let miraX = arcoX + 40 * cos(angulo);
  let miraY = arcoY - 40 + 40 * sin(angulo);
  line(arcoX, arcoY - 40, miraX, miraY);
}

function drawTarget(x, y, r) {
  noStroke();
  fill(255);
  ellipse(x, y, r * 2);
  fill(255, 255, 0);
  ellipse(x, y, r * 1.6);
  fill(0, 255, 0);
  ellipse(x, y, r * 1.2);
  fill(0, 0, 255);
  ellipse(x, y, r * 0.8);
  fill(255, 0, 0);
  ellipse(x, y, r * 0.4);
}

// ===============================
// Controles
// ===============================
function keyPressed() {
  if (keyCode === UP_ARROW) angulo -= 0.05;
  if (keyCode === DOWN_ARROW) angulo += 0.05;
  if (keyCode === RIGHT_ARROW) forca = min(forca + 1, 30);
  if (keyCode === LEFT_ARROW) forca = max(forca - 1, 5);
  if (key === ' ') atirar();
}

// ===============================
// Lógica do jogo
// ===============================
function atirar() {
  if (!flecha) {
    flecha = {
      x: arcoX + 40 * cos(angulo),
      y: arcoY - 40 + 40 * sin(angulo),
      vx: forca * cos(angulo),
      vy: forca * sin(angulo),
      a: angulo,
    };
  }
}

function novoVento() {
  vento = random(-2, 2);
}

function novoAlvo() {
  alvoX = random(width / 2, width - 50);
  alvoY = random(100, height - 120);
}
