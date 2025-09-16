// Seleciona elementos do DOM
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');
const bgMusic = document.getElementById('bgMusic');

const startBtn = document.getElementById('startBtn');
const startBtnReset = document.getElementById('startBtnReset');
const startScreen = document.getElementById('startScreen');
const pauseBtn = document.getElementById('pauseBtn');
const restartBtn = document.getElementById('restartBtn');

// Configurações iniciais
let snake = [{ x: 10, y: 10 }];
let direction = 'RIGHT';
let food = {};
let score = 0;
let lives = 3;
let gameInterval;
let paused = false;

// Cria o som da comida
const foodSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');

// Função para iniciar o jogo
function startGame(reset = false) {
    if (reset) {
        score = 0;
        lives = 3;
        scoreEl.textContent = score;
        livesEl.textContent = lives;
    }
    snake = [{ x: 10, y: 10 }];
    direction = 'RIGHT';
    placeFood();
    startScreen.style.display = 'none';
    bgMusic.play();
    gameInterval = setInterval(gameLoop, 150);
}

// Posiciona a comida em lugar aleatório
function placeFood() {
    food.x = Math.floor(Math.random() * 20);
    food.y = Math.floor(Math.random() * 20);
}

// Função principal do jogo
function gameLoop() {
    if (paused) return;

    // Move a cobra
    const head = { ...snake[0] };
    if (direction === 'RIGHT') head.x++;
    if (direction === 'LEFT') head.x--;
    if (direction === 'UP') head.y--;
    if (direction === 'DOWN') head.y++;

    // Verifica colisão com paredes
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        loseLife();
        return;
    }

    // Verifica colisão com o próprio corpo
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        loseLife();
        return;
    }

    snake.unshift(head);

    // Verifica colisão com comida
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreEl.textContent = score;
        foodSound.currentTime = 0;
        foodSound.play();
        placeFood(); // Reposiciona comida
    } else {
        snake.pop(); // Remove cauda se não comeu
    }

    draw();
}

// Função para perder vida
function loseLife() {
    lives--;
    livesEl.textContent = lives;
    if (lives <= 0) {
        alert('Game Over!');
        clearInterval(gameInterval);
        startScreen.style.display = 'flex';
    } else {
        // Reinicia posição da cobra
        snake = [{ x: 10, y: 10 }];
        direction = 'RIGHT';
    }
}

// Função para desenhar o jogo
function draw() {
    ctx.fillStyle = '#0d133d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenha comida
    ctx.fillStyle = '#00e5ff';
    ctx.fillRect(food.x * 20, food.y * 20, 20, 20);

    // Desenha cobra
    snake.forEach(segment => {
        ctx.fillStyle = '#fff';
        ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });
}

// Controle com teclado
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
    if (e.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
    if (e.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
    if (e.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
});

// Botões
startBtn.addEventListener('click', () => startGame(false));
startBtnReset.addEventListener('click', () => startGame(true));

pauseBtn.addEventListener('click', () => {
    paused = !paused;
    pauseBtn.textContent = paused ? 'Continuar' : 'Pausar';
});

restartBtn.addEventListener('click', () => startGame(false));
