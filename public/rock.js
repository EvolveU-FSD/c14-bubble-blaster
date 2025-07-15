
class Rock {

    x = 50
    y = 100
    vx = 3
    vy = 2
    rotation = 0
    radius = 40
    
    spawn(canvas, radius, x, y, velocity) {
        this.radius = radius || 40
        if (x && y) {
            this.x = x
            this.y = y
        }
        else {
            const spawnRange = (Math.min(canvas.width, canvas.height)/2) - this.radius
            const spawnAngle = Math.random() * 2.0 * Math.PI
            this.x = spawnRange*Math.cos(spawnAngle) + (canvas.width/2)
            this.y = spawnRange*Math.sin(spawnAngle) + (canvas.height/2)
        }

        velocity = velocity || 3
        const velocityAngle = Math.random() * 2.0 * Math.PI
        this.vx = velocity * Math.cos(velocityAngle)
        this.vy = velocity * Math.sin(velocityAngle)
    }

    contains(x, y, radius = 0) {
        const dx = x-this.x
        const dy = y-this.y
        return dx*dx + dy*dy < (this.radius+radius)*(this.radius+radius)
    }

    pop(canvas, rocks) {
        score += this.radius
        if (this.radius > 20) {            
            for (let i=0; i<2; i++) {
                const rock = new Rock()
                rock.spawn(canvas, this.radius-10, this.x, this.y, this.velocity+5)
                rocks.push(rock)
            }
        }
        const index = rocks.indexOf(this)
        rocks.splice(index, 1)
    }

    update(canvas) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < this.radius) {
            this.vx *= -1;
        }            
        if (this.x > (canvas.width - this.radius)) {
            this.vx *= -1;
        }
        if (this.y < this.radius) {
            this.vy *= -1;
        }
        if (this.y > (canvas.height - this.radius)) {
            this.vy *= -1;
        }
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // context.fillStyle = 'tomato';
        // context.fill();
        context.lineWidth = 3;
        context.strokeStyle = '#00FF00';
        context.stroke();
        context.closePath();
    }
}