
class Bullet {

    x = 0
    y = 0
    vx = 5
    vy = 5
    radius = 2
    
    spawn(canvas, aimX, aimY, velocity, fromX, fromY) {
        this.x = fromX || canvas.width/2
        this.y = fromY || canvas.height/2
        velocity = velocity || 10

        aimX = aimX - this.x
        aimY = aimY - this.y

        const shootAngle = Math.atan2(aimY, aimX)
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

    draw(context, cameraLocation) {
        const screenCenterX = canvas.width/2
        const screenCenterY = canvas.height/2

        const cameraX = cameraLocation?.x || screenCenterX
        const cameraY = cameraLocation?.y || screenCenterY

        context.beginPath();
        context.arc(this.x-cameraX+screenCenterX, this.y-cameraY+screenCenterY, this.radius, 0, Math.PI * 2);
        context.fillStyle = '#ffffff'
        context.fill();
        context.closePath();
    }
}