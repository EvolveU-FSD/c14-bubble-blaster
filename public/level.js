class Level {
    // level state
    turret = new Turret()
    rocks = []
    bullets = []

    startLevel(difficulty = 0) {
        this.difficulty = difficulty

        this.turret = new Turret()
        this.rocks = []
        this.bullets = []

        if (difficulty == 0) {
            score = 0
        }

        // Start the game
        this.rocks.push(new Rock())
        this.rocks.push(new Rock())
        this.rocks.push(new Rock())
        this.rocks.push(new Rock())
        this.rocks.forEach(rock => rock.spawn(canvas))
        this.turret.reset(canvas)
    }

    update(canvas) {
        this.turret.update(canvas)
        this.bullets.forEach((bullet) => bullet.update(canvas))
        this.rocks.forEach((rock) => rock.update(canvas))

        this.rocks.forEach(rock => {
            if (rock.contains(this.turret.x, this.turret.y, this.turret.radius)) {
                crash()
            }
        })

        for (const bullet of this.bullets) {
            for(const rock of this.rocks) {
                if (rock.contains(bullet.x, bullet.y)) {
                    rock.pop(canvas, this.rocks)
                    this.bullets.splice(this.bullets.indexOf(bullet))
                    break;
                }
            }
        }

        if (this.rocks.length === 0) {
            transitionToLevel(this.difficulty+1)
        }
    }

    draw(context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw
        this.turret.draw(context)
        this.rocks.forEach((rock) => rock.draw(context))
        this.bullets.forEach((bullet) => bullet.draw(context))

        context.font = '20px monospace'
        context.textAlign = 'center'
        context.fillStyle = 'white'
        context.fillText("Score: " + score, canvas.width/2, canvas.height-10)
    }

    tap(e) {
        if (this.bullets.length >= 5) {
            this.bullets.shift()
        }
        const bullet = new Bullet() 
        bullet.spawn(canvas, e.x, e.y)
        this.bullets.push(bullet)
    }
}
