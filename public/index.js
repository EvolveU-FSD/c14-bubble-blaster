const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initial setup
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // call once on load

let view = new TitleScreen()

// Update game state
function update() {
    view.update(canvas)
}

// Render to canvas
function draw() {
    view.draw(context)
}

// Main game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function tap(e) {
    view.tap(e)
}

canvas.addEventListener('click', tap)

let score = 0
let highScore = 0

function gotoTitleScreen() {
    view = new TitleScreen()
}

function startGame() {
    score = 0
    transitionToLevel(0)
}

function transitionToLevel(level) {
    view = new LevelStartScreen(level)
}

function startLevel(level) {
    view = new Level() 
    view.startLevel(level)
}

function crash() {
    view = new GameOverScreen()
    if (score > highScore) {
        highScore = score
    }
}

gotoTitleScreen()
gameLoop()