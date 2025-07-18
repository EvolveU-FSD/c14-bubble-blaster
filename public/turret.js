
class Turret {

    x = 50
    y = 100
    vx=1
    vy=1

    rotation = 0
    radius = 10
    
    reset(canvas) {
        this.x = canvas.width / 2
        this.y = canvas.height / 2
        this.rotation = Math.random() * 2 * Math.PI
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
        context.fillStyle = 'blue';
        context.fill();
        context.closePath();
    }
}

