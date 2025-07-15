
class TitleScreen {

    constructor() {
    }

    update(canvas) {
    }

    draw(context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.font = '40px monospace'
        context.textAlign = 'center'
        context.fillStyle = 'white'
        context.fillText("Bubble Blaster", canvas.width/2, canvas.height/2)
        context.font = '20px monospace'
        context.fillText("tap screen to start", canvas.width/2, canvas.height/2+30)

        context.font = '20px monospace'
        context.textAlign = 'center'
        context.fillStyle = 'white'
        context.fillText("High Score: " + highScore, canvas.width/2, canvas.height-10)
    }

    tap(e) {
        startGame()
    }
}

