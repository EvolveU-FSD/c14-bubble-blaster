
class GameOverScreen {

    constructor() {
        this.armed = false
        setTimeout(() => this.armed = true, 1000)    
    }

    update(canvas) {
    }

    draw(context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.font = '40px monospace'
        context.textAlign = 'center'
        context.fillStyle = 'white'
        context.fillText("Kaboom!", canvas.width/2, canvas.height/2)
        if (this.armed) {
            context.font = '20px monospace'
            context.fillText("tap screen to continue", canvas.width/2, canvas.height/2+30)
        }

        if (highScore === score) {
            context.font = '20px monospace'
            context.textAlign = 'center'
            context.fillStyle = 'white'
            context.fillText("NEW HIGH SCORE!", canvas.width/2, canvas.height-40)
        }

        context.font = '20px monospace'
        context.textAlign = 'center'
        context.fillStyle = 'white'
        context.fillText("Score: " + score, canvas.width/2, canvas.height-10)

    }

    tap(e) {
        if (this.armed) gotoTitleScreen()
    }
}

