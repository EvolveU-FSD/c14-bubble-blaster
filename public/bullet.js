
class Bullet {

    x = 0
    y = 0
    vx = 5
    vy = 5
    radius = 2
    
    spawn(canvas, aimX, aimY, velocity) {
        velocity = velocity || 10
        aimX = aimX - (canvas.width/2)
        aimY = aimY - (canvas.height/2)
        const shootAngle = Math.atan2(aimY, aimX)
        this.x = canvas.width/2
        this.y = canvas.height/2
        this.vx = Math.cos(shootAngle)*velocity
        this.vy = Math.sin(shootAngle)*velocity
    }

    contains(x, y) {
        const dx = x-this.x
        const dy = y-this.y
        return dx*dx + dy*dy < this.radius*this.radius
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
        context.fillStyle = '#ffffff'
        context.fill();
        context.closePath();
    }
}