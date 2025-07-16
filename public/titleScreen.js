
class TitleScreen {

    rocks = []

    constructor() {
        this.rocks = []
        this.rocks.push(new Rock())
        this.rocks.push(new Rock())
        this.rocks.push(new Rock())
        this.rocks.push(new Rock())
        this.rocks.forEach((rock) => rock.spawn(canvas))
    }

    update(canvas) {
        this.rocks.forEach((rock) => rock.update(canvas))

    }

    draw(context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        this.rocks.forEach((rock) => rock.draw(context))

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

