
class LevelStartScreen {

    constructor(level) {
        this.level = level
        this.armed = false
        setTimeout(() => this.armed = true, 2000)    
    }

    update(canvas) {
        if (this.armed) startLevel(this.level)
    }

    draw(context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.font = '40px monospace'
        context.textAlign = 'center'
        context.fillStyle = 'white'
        context.fillText("Level " + (this.level+1), canvas.width/2, canvas.height/2)

        context.font = '20px monospace'
        context.textAlign = 'center'
        context.fillStyle = 'white'
        context.fillText("Score: " + score, canvas.width/2, canvas.height-10)

    }

    tap(e) {
    }
}

