
class Turret {

    x = 50
    y = 100
    rotation = 0
    radius = 10
    
    reset(canvas) {
        this.x = canvas.width / 2
        this.y = canvas.height / 2
        this.rotation = Math.random() * 2 * Math.PI
    }

    update(canvas) {
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = 'blue';
        context.fill();
        context.closePath();
    }
}

